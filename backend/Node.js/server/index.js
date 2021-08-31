/* eslint-disable no-unused-vars */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://superuser:EklZREvQdzjs0nwG@clusterrasn.qowzy.mongodb.net/myFirstDatabase";

const PORT = process.env.PORT || 3001;

let str = "";
let client = new MongoClient(url);

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.route("/Rasn/admin/animales").get(function (req, res) {
	client.connect(function (err, db) {
		if (err) throw err;
		var dbo = db.db("proyectoRasn");
		dbo.collection("animales")
			.find({})
			.toArray(function (err, result) {
				if (err) throw err;
				console.log(req.id);
				res.send(result);
				db.close();
			});
	});
});

app.route("/Rasn/admin/animales/delete").post(async function (req, res) {
	try {
		await client.connect();
		const db = client.db("proyectoRasn");
		const collection = db.collection("animales");
		const result = await collection.deleteOne({ _id: new mongodb.ObjectId(req.body.id)});
		//res.send(result);
		if (result.deletedCount === 1) {
			console.dir("Successfully deleted one document.");
			console.log({ _id: new mongodb.ObjectId(req.body.id)});
		} else {
			console.log("No documents matched the query. Deleted 0 documents.");
		}
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}

app.route("/Rasn/admin/animales/nuevo-animal").post(async function (req, res) {
	try {
		await client.connect();
		const db = client.db("proyectoRasn");
		const collection = db.collection("animales");
		const updatedData = req.body.updatedData;
		const result = await collection.replaceOne({ _id: new mongodb.ObjectId(req.body.id)},
		updatedData);
		//res.send(result);
		if (result.deletedCount === 1) {
			console.dir("Successfully deleted one document.");
			console.log({ _id: new mongodb.ObjectId(req.body.id)});
		} else {
			console.log("No documents matched the query. Deleted 0 documents.");
		}
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
	/* client.connect(async function (err, db) {
		if (err) throw err;
		var dbo = db.db("proyectoRasn");

		const collection = dbo.collection("animales");
		const query = { _id: req.body.id };
		const result = await collection.deleteOne(query);

		if (result.deletedCount === 1) {
			console.dir("Successfully deleted one document.");
		} else {
			console.log("No documents matched the query. Deleted 0 documents.");
		}

		dbo.collection("animales")
			.deleteOne(function (err, result) {
				{
					_id: req.body.id;
				}
				if (err) throw err;

				res.send(result);
				db.close();
			})
			.then(console.log("Borrado el registro " + req.body.id))
			.catch();
		db.close();
	}); */
});

/*app.route("/Rasn/admin/animales/delete").get(function (req, res) {
	client.connect(function (err, db) {
		if (err) throw err;
		var dbo = db.db("proyectoRasn");
		dbo.collection("animales")
			.find({})
			.toArray(function (err, result) {
				if (err) throw err;
				console.log(req.params);
				res.send(req.params);
				db.close();
			});
	});
});*/

app.route("/Rasn/faq").get(function (req, res) {
	client.connect(function (err, db) {
		if (err) throw err;
		var dbo = db.db("proyectoRasn");
		dbo.collection("faq")
			.find({})
			.toArray(function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
				db.close();
			});
	});
});

app.route("/Rasn/posts").get(function (req, res) {
	client.connect(function (err, db) {
		if (err) throw err;
		var dbo = db.db("proyectoRasn");
		dbo.collection("posts")
			.find({})
			.toArray(function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
				db.close();
			});
	});
});

app.route("/Rasn/integrantes").get(function (req, res) {
	client.connect(function (err, db) {
		if (err) throw err;
		var dbo = db.db("proyectoRasn");
		dbo.collection("integrantes")
			.find({})
			.toArray(function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
				db.close();
			});
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
