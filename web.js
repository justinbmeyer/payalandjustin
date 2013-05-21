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
  	},
  	csv = require('csv')

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

/*app.get('/', function(req, res){
	res.render('index.ejs', {
			  layout:false
	});
	
});*/




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


var prettyName = function(family){
	var attendees = [family.head].concat(family.children);
	if(attendees.length == 1){
		return attendees[0].name
	}
	var last = attendees.pop();
	return attendees.map(function(attendee){
		return attendee.name || "Guest";
	}).join(", ")+" and "+last.name
}

app.get('/attendees.csv',function(req, res){
	res.setHeader('Content-disposition', 'attachment; filename=attendees.csv'); 
	
	res.writeHead(200, {
        'Content-Type': 'text/csv'
    });
    
	var query = client.query('SELECT * FROM attendees'),
		attendees = [];
  
	query.on('row', function(result) {
	    attendees.push(result)
	});
	query.on('end', function(){
		
		var families = {};
		var makeById = function(id){
			if( !families[id] ) {
				families[id] = {children: []}
			}
			return families[id];
		};
		
		attendees.forEach(function(attendee){
			if(typeof attendee.headofhouseid == 'number' && attendee.headofhouseid !== attendee.id){
				makeById(attendee.headofhouseid).children.push(attendee)
			} else {
				makeById(attendee.id).head = attendee
			}
		})
		var familyData = [];
		for( var headId in families ) {
			var fam = families[headId];
			
			familyData.push({
				name: prettyName(fam),
				street: fam.head.street,
				apt: fam.head.apt,
				city: fam.head.city,
				zip: fam.head.zip,
				country: fam.head.country
			})
		}
		
	    csv().from.array(familyData).to(res)
	});
    
    
	
})


app.listen(port, function() {
  console.log('Listening on:', port);
});