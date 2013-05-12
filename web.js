var express = require('express'), 
	app = express.createServer(express.logger()),
	pg = require('pg'), 
	connectionString = process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_TEAL_URL || 'postgres://localhost:5432/payalandjustin', 
	start = new Date(), 
	port = process.env.PORT || 3000, 
	client,
	str = require('./escapestr').str,
	connect = require('connect'),
	tf = function(value){
		return (value || "").toLowerCase() == "true" ? true : false
	},
  	tfn = function(value){
  		return value == "true" ? true : (
  	 			value === "false" ?
  	 			false : 'null' )
  	}

client = new pg.Client(connectionString);
client.connect();

// configure
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({secret: 'secret-cookie'}));
	//app.use(connect.compress());
	app.use( express.static( __dirname + '/public') );
})

app.get('/', function(req, res){
	res.render('index.ejs', {
			  layout:false
	});
	
});

app.get('/attendee', function(req, res){
	if(req.session.attendeeId){
		console.log("here!!!!!!!!!!!")
		var query = client.query('SELECT * FROM attendees WHERE id = $1',[req.session.attendeeId]);
		query.on('row', function(result){
			if(result){
				res.send(result);
			} else {
				res.send({});
			}
		})
	} else {
		res.send({})
	}
})



app.get('/attendees', function(req, res) {
  
  var query = client.query('SELECT * FROM attendees'),
  	  attendees = [];
  
  query.on('row', function(result) {
    attendees.push(result)
  });
  query.on('end', function(){
    res.send(attendees)
  });
});

app.post('/attendees/:id/destroy',function(req, res){
	var query = client.query('DELETE FROM attendees WHERE id = $1',[req.params.id]);
		query.on('end', function(result){
			
			if(result){
				res.send({});
			} else {
				res.send(500,{});
			}
			
		})
})

app.get('/attendees/:id/edit',function(req, res){

	var query = client.query('SELECT * FROM attendees WHERE id = $1',[req.params.id]);
		query.on('row', function(result){
			
			if(result){
				res.send(result);
			} else {
				res.send({});
			}
			
		})
})

var props = {
	name:  str,
	street: str,
	apt: function(apt){  return apt ? str(apt) : 'null'},
	city: str,
	state: str,
	zip: str,
	country: str,
	attending: tfn,
	headofhouseid: function(id){ return id ? +id : "null"},
	invitedtomanglik: tf,
	comingtomanglik: tfn,
	
	invitedtomehndi: tf,
	comingtomehndi: tfn,
	
	invitedtowedding: tf,
	comingtowedding: tfn,
	editablename: tf

},
	processReq = function(req){
		var propertyNames = [],
			values = [];
		for(var prop in props) {
			if(req.body[prop] !== undefined){
				console.log(prop,req.body[prop], props[prop](req.body[prop]) )
				propertyNames.push(prop);
				values.push( props[prop](req.body[prop]) )
			}
		}
		return {
			properties: propertyNames,
			values: values
		}
	}

app.post('/attendees/:id',function(req, res){
	var processed = processReq(req)
  
	var propertyNames = processed.properties,
		values = processed.values;
		
	var sql = 'UPDATE attendees SET '+
	  	propertyNames.map(function(name, i){
	  		return name +" = "+values[i]
	  	}).join(",")+ 
	  	" WHERE id = "+req.params.id+
	  	" RETURNING id";
	
	console.log(sql)
		
	client.query(sql,function(err, result){
		
  		console.log(err)
	  	var id = result.rows[0].id;
	  	res.send({})
	});
	
})

app.post('/attendee', function(req, res) {
  
	var processed = processReq(req)
  
	var propertyNames = processed.properties,
		values = processed.values;
  

  	var sql = 'INSERT INTO attendees ('+
	  	propertyNames.join(",") +
	  	 ") VALUES("+
	  	 	values.join(",")+
	  	 ") RETURNING id";
	  	 
	console.log(sql)
	client.query(sql,function(err, result){
  	
	  	var id = result.rows[0].id;
	  	res.send({id: id})
	});
})


app.listen(port, function() {
  console.log('Listening on:', port);
});