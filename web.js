var express = require('express'), 
	app = express.createServer(express.logger()),
	pg = require('pg'), 
	connectionString = process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_TEAL_URL || 'postgres://localhost:5432/payalandjustin', 
	start = new Date(), 
	port = process.env.PORT || 3000, 
	client,
	str = require('./escapestr').str;

client = new pg.Client(connectionString);
client.connect();

// configure
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({secret: 'secret-cookie'}));
	
	app.use( express.static( __dirname + '/public') );
})

app.get('/', function(req, res){
	var render = function(attendee){
			res.render('index.ejs', {
			  layout:false,
			  locals: {attendee:attendee}
			});
		}
	
	if(req.session.attendeeId){
		console.log("here!!!!!!!!!!!")
		var query = client.query('SELECT * FROM attendees WHERE id = $1',[req.session.attendeeId]);
		query.on('row', function(result){
			if(res){
				render(result);
			} else {
				render({});
			}
		})
	} else {
		render({})
	}
	
	
})

app.get('/attendees', function(req, res) {
  
  var query = client.query('SELECT * FROM attendees'),
  	  attendees = [];
  
  query.on('row', function(result) {
    attendees.push(result)
  });
  query.on('end', function(){
    res.render('page.ejs', {
	  layout:false,
	  locals: {attendees:attendees}
	});
  });
});



app.post('/attendees', function(req, res) {
  
  var propertyNames = ["name","street","apt",
	  	 "city","state","zip","country","attending"],
  	 values = [
	  	 	str(req.body.name),
	  	 	str(req.body.street),
	  	 	str(req.body.apt),
	  	 	str(req.body.city),
	  	 	str(req.body.state),
	  	 	str(req.body.zip),
	  	 	str(req.body.country),
	  	 	req.body.attending == "true" ? true : (
	  	 			req.body.attending === "false" ?
	  	 			false : 'null' )
	  	 	]
  
  if( req.session.attendeeId ){
  	var sql = 'UPDATE attendees SET '+
	  	propertyNames.map(function(name, i){
	  		return name +" = "+values[i]
	  	}).join(",")+ 
	  	" WHERE id = "+req.session.attendeeId+
	  	" RETURNING id"
  } else {
  	var sql = 'INSERT INTO attendees ('+
	  	propertyNames.join(",") +
	  	 ") VALUES("+
	  	 	values.join(",")+
	  	 ") RETURNING id"
	  
	  
  }
  client.query(sql,function(err, result){
  	console.log(err, result)
  	var id = result.rows[0].id;
  	req.session.attendeeId = id;
  	res.send({id: id})
  })
})


app.listen(port, function() {
  console.log('Listening on:', port);
});