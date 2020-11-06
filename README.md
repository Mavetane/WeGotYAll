# WeGotYAll
This is a blue collar app which allows people to search for blue collor jobs and allows employers to find employees based on their profession

## Backend

### Database
I used postgres sql database which was installed locally on my machine. database info is as follows: {
  dbname: postgres,
  user: postgres,
  port: 5432,

} 
My database consist of three schemas each with different tables viz:{
   Authentication/Authorization - 'users' as table name, 
   Workers - ('babysitters', 'plumbers', 'nannies', 'handymen', 'maids', 'dogwalkers') as table names
   Seekers - ('babysitters', 'plumbers', 'nannies', 'handymen', 'maids', 'dogwalkers') as table names
}
I've included scripts named as tables.sql to help with the inserting of database columns and tables including values as well


*I'm sorry I couldn't deploy my app, time wasn't on my side*

For starting the Database install psql and run it on the bash login as postgres with the database name as postgres

### Server
For the server I used nodejs express gp and many more dependencies. I implemented jwt which I described the key in the .env file.
I've included --save at the end of every dependency I install to make much easier for another person to clone the app. cd server and npm install to install the dependencies and conclude with "nodemon server.js"

### Client

My client side is build with reactjs, I've created routes that seperates Workers from employers but nevertheless the login screen is the same

Same thing applies to client, cd client and run npm install followed by npm start


