console.log("db",process.env.DATABASE_URL)

var pg = require('pg'),//.native, 
	connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/payalandjustin', 
	client, 
	query;

client = new pg.Client(connectionString);
client.connect();
// Table
query = client.query('DROP TABLE IF EXISTS attendees').on('end', function(){
	
	var sql = 'CREATE TABLE attendees ('+
		"id    serial PRIMARY KEY,"+
		"name   varchar(300) NOT NULL CHECK (name <> ''),"+
		"attending  boolean,"+
		"country varchar(30)  NOT NULL,"+
		"street   varchar(300)  NOT NULL,"+
		"apt   varchar(300),"+
		
		"city   varchar(300) NOT NULL,"+
		"state   varchar(300)  NOT NULL,"+
		"zip   varchar(60048) NOT NULL,"+
		"UNIQUE (id)"+')';
		
	console.log(sql)
	
	
	client.query(sql).on('end', function() { 
		client.end(); 
	});
	
	
})


