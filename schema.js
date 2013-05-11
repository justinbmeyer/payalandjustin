

var pg = require('pg'),//.native, 
	connectionString = process.env.DATABASE_URL || process.env.HEROKU_POSTGRESQL_TEAL_URL || 'postgres://localhost:5432/payalandjustin', 
	client, 
	query;

console.log("db",connectionString)

client = new pg.Client(connectionString);
client.connect();
// Table
/*
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
	
	
})*/


// DROP COLUMNS
var dropSql = 'ALTER TABLE attendees '+
		"DROP COLUMN IF EXISTS editableName,"+
		"DROP COLUMN IF EXISTS headOfHouseId,"+
		"DROP COLUMN IF EXISTS invitedToManglik, "+
		"DROP COLUMN IF EXISTS comingToManglic, "+
		
		"DROP COLUMN IF EXISTS invitedToMehndi, "+
		"DROP COLUMN IF EXISTS comingToMehndi, "+
		
		"DROP COLUMN IF EXISTS invitedToWedding,"+
		"DROP COLUMN IF EXISTS comingToWedding";	
		
var addSql = 'ALTER TABLE attendees '+

		"ADD editableName boolean NOT NULL DEFAULT FALSE, "+
		"ADD headOfHouseId integer,"+
		"ADD invitedToManglik boolean NOT NULL DEFAULT TRUE, "+
		"ADD comingToManglik boolean, "+
		
		"ADD invitedToMehndi boolean NOT NULL DEFAULT TRUE, "+
		"ADD comingToMehndi boolean, "+
		
		"ADD invitedToWedding boolean NOT NULL DEFAULT TRUE, "+
		"ADD comingToWedding boolean",
		
	updateFalseSql = "UPDATE attendees SET comingToManglic=FALSE, comingToMehndi=FALSE, comingToWedding=FALSE "+
			"WHERE attending = FALSE",
			
	updateTrueSql = "UPDATE attendees SET comingToManglic=TRUE, comingToMehndi=TRUE, comingToWedding=TRUE "+
			"WHERE attending = TRUE";	

//console.log("dropping", dropSql)

client.query(dropSql).on('end',function(){

	console.log("adding",addSql)
	// ADD COLUMNS
	client.query(addSql).on('end', function() { 
		
		client.end(); 
		return;
		// update values to match current attending values
		console.log("updating False", updateFalseSql)
		client.query(updateFalseSql).on('end',function(){
			
			console.log("updating True", updateTrueSql)
			
			client.query(updateTrueSql).on('end', function() { 
				client.end(); 
			})
		})
		
		
	});
})




