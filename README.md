# ms-project3
Describes the inspiration for the application.
Describes how to use the application.
Lists the technologies used to build the application.
Addresses any outstanding bugs or unfinished functionality.

I decided to make a MERN stack Personal Journal web application project because my milestone 2 project was PERN stack, so I went with MERN this time. My wife has always wanted me to get into journalling, so I thought making a personal journal app would inspire me to start. 

To use the application you would need to begin at the signup page. There you enter an email and a password. Then the application would save that data in a "user" table in the database, at which point the app would redirect you to your own journal page. There you will see an input for the entry title, and entry message. Make your entry and click the submit button. That will save that entry to the database, connected to your user ID, thus only you will be able to view it. If you click the signout button, it will log you out and you will no longer be able to view your entries until you signin again with your correct credentials.

Since this is a MERN app, obvioulsy I used Mongoose, Express, React and Node. Mongoose is used to connect the app to the MongoDB database. Express is the backend web framework that was used to build the API for the app. It handles the HTTP methods to make requests and give responses to the user. React is the JavaScript framework that is used to build the frontend and interacts with the Express backend. 

Validation
bcrypt
JWT
formatDistanceToNow