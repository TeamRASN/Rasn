const { MongoClient } = require("mongodb");

async function main() {
	const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";

	const client = new MongoClient(uri, {
		useUnifiedTopology: true,
	});

	try {
		await client.connect();
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

main().catch(console.error);
