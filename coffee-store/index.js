const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dqfkiqe.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const database = client.db("coffeeDB");
    const coffeeCollection = database.collection("coffee");

    app.get("/coffee", async (req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/coffee", async (req, res) => {
      const newCoffee = req.body;
      const add = {
        name: newCoffee.name,
        supplier: newCoffee.supplier,
        category: newCoffee.category,
        chef: newCoffee.chef,
        taste: newCoffee.taste,
        details: newCoffee.details,
        photo: newCoffee.photo,
      };

      const result = await coffeeCollection.insertOne(add);
      console.log(newCoffee);
      res.send(result);
    });

    app.get("/coffee/:id", async (req, res) => {
      const id = req.params;
      const query = { _id: new ObjectId(id) };
      const coffee = await coffeeCollection.findOne(query);
      res.send(coffee);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running");
});

app.listen(port, () => {
  console.log(port);
});
