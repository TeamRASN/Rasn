/* eslint-disable no-unused-vars */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";

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
		const data = req.body;
		const newData = {
			...data
		}
		console.log(newData);
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
});

app.route("/Rasn/admin/animales/nuevo-animal").post(async function (req, res) {
	try {
		await client.connect();
		const db = client.db("proyectoRasn");
		const collection = db.collection("animales");
		const data = req.body;
		data.fechaNacimiento = new Date(data.fechaNacimiento);
		console.log(data);
		const result = await collection.insertOne(data);
		//res.send(result);
		if (result.insertedId !== undefined) {
			console.dir("Successfully added one document.");
			console.log(result.insertedId);
		} else {
			console.log("not inserted");
		}
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
});

app.route("/Rasn/admin/animales/actualizar-animal").post(async function (req, res) {
	try {
		await client.connect();
		const db = client.db("proyectoRasn");
		const collection = db.collection("animales");
		const data = req.body;
		const id = data.id;
		data.fechaNacimiento = new Date(data.fechaNacimiento);
		console.log(data);
		const result = await collection.replaceOne({ _id: new mongodb.ObjectId(id)},
		data);
		//res.send(result);
		if (result.updatedCount === 1) {
			console.dir("Successfully updated one document.");
			console.log({ _id: new mongodb.ObjectId(data.id)});
		} else {
			console.log("No documents matched the query. Updated 0 documents.");
		}
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
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

app.route("/Rasn/admin/faq").get(function (req, res) {
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

app.route("/Rasn/admin/faq/delete").post(async function (req, res) {
	try {
		await client.connect();
		const db = client.db("proyectoRasn");
		const collection = db.collection("faq");
		const data = req.body;
		const newData = {
			...data
		}
		console.log(newData);
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
