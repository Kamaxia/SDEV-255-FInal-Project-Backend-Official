# SDEV-255-Final-Project-The-Scripters

Repository for our final project

### Install Dependencies

Run `npm instal` in the project root.

### Configure Environment Variables

Add the `.env` file you have for the project to the project root.

```
MONGO_URI="your_mongo_connection_string"
PORT=3000
```

### Seed the Database

Run the seed file to insert the initial dummy data into the MongoDB database if the database hasn't been seeded yet.

```
node seed/seedClasses.js
```

### Run the Server

`nodemon start`
