const { MongoClient, ServerApiVersion } = require('mongodb');
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
console.log("user",user,"password", password);
const uri = `mongodb+srv://${user}:${password}@fitness-playground-clus.fmxa9.mongodb.net/?retryWrites=true&w=majority&appName=fitness-playground-cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connectDB = async () => {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { connectDB, client };