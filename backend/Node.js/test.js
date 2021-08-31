/* eslint-disable no-unused-vars */
const { MongoClient } = require("mongodb");

async function main() {
	const uri = "mongodb+srv://superuser:EklZREvQdzjs0nwG@clusterrasn.qowzy.mongodb.net/myFirstDatabase";

	const client = new MongoClient(uri, {
		useUnifiedTopology: true,
	});

	try {
		await client.connect();

		await showAllFaq(client);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main().catch(console.error);

async function showAllAnimals(client) {
	const cursor = client.db("RASN").collection("animales").find();
	const results = await cursor.toArray();
	console.log(results);
	return results;
}

async function showAllPosts(client) {
	const cursor = client.db("RASN").collection("posts").find();
	const results = await cursor.toArray();
	console.log(results);
	return results;
}

async function showAllIntegrantes(client) {
	const cursor = client.db("RASN").collection("integrantes").find();
	const results = await cursor.toArray();
	console.log(results);
	return results;
}

async function showAllFaq(client) {
	const cursor = client.db("RASN").collection("faq").find();
	const results = await cursor.toArray();
	console.log(results);
	return results;
}
