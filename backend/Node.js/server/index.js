/* eslint-disable no-unused-vars */
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://superuser:EklZREvQdzjs0nwG@clusterrasn.qowzy.mongodb.net/myFirstDatabase";

const PORT = process.env.PORT || 3001;

let str = "";
let client = new MongoClient(url);

const app = express();

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
				console.log(result);
				res.send(result);
				db.close();
			});
	});
});

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
