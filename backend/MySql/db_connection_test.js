const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const database = require('./db_connection');
const mysqlsessionstore = require('./session_store');
const sendEmail = require('./email/template/send_email');
let pool = database.newPool();
let sessionStore = mysqlsessionstore.createStore();

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(
	session({ name: 'SessionCookie', secret: 'test', cookie: { maxAge: 600000 }, store: sessionStore, resave: true })
);

app.route('/Rasn/login').post(async function (req, res) {

	const data = req.body;
	req.session.cookie.email = data.email;
	let sql = `SELECT login_user_node_session("${data.email}", "${data.password}")`;
	try {
		pool.getConnection(function (err, connection) {
			if (err) throw err;
			connection.query(sql, function (err, result) {
				if (err) throw err;
				let loginAccepted = Object.values(JSON.parse(JSON.stringify(result[0])));
				if (loginAccepted == 1) {
					let sqlSession = `SELECT restrict_session("${req.sessionID}", "${data.email}")`;

					req.session.email = data.email;
					req.session.save();
					connection.query(sqlSession, function (err2, resulta2) {
						if (err2) throw err2;
						console.log(resulta2[0]);
						let singleSession = Object.values(JSON.parse(JSON.stringify(resulta2[0])));
						if (singleSession == 1) {
							let testVar = { sessionID: req.sessionID, status: 'success' };
							res.json(testVar);
						} else {
							res.send('Ya existe una sesión para este usuario.');
						}
					});
				} else {
					res.send('Usuario o contraseña incorrectos.');
				}
				return;
			});
			connection.release();
		});
	} catch (error) {
		console.log(error);
	}
});


app.route('/Rasn/admin/faq/nueva-pregunta').post(function (req, res) {
	let data = req.body;
	

	sendEmail(
		{
			id : data.id,
			nombre : data.nombre,
			apellido : data.apellido,
			telefono : data.telefono,
			email : data.email,
			residencia : data.residencia,
			direccion : data.direccion,
			ocupacion : data.ocupacion,
			edad : data.edad,
			pregunta1 : data.pregunta1,
			pregunta2 : data.pregunta2,
			pregunta3 : data.pregunta3,
			pregunta4 : data.pregunta4,
			pregunta5 : data.pregunta5,
			pregunta6 : data.pregunta6,
			pregunta7 : data.pregunta7
		},
		'./welcome.handlebars',
		data.email
	);
	res.send("Enviado");
});
	






let dynamicToken = (email, recoveryToken) =>
	new Promise(function (resolve, reject) {
		let sql = `select token_recovery('${email}', '${recoveryToken}', 'password', 'password')`;
		app.route(`/Rasn/recoverPassword/${recoveryToken}`).get(function (req, res) {
			try {
				pool.getConnection(function (err, connection) {
					if (err) throw err;
					connection.query(sql, function (err, result) {
						if (err) throw err;
						console.log('test');
						res.send(result[0]);
					});
				});
			} catch (error) {
				console.log(error);
			}
		});
		resolve(sql);
	});

/* app.route('/Rasn/validateSession').post(function (req, res) {
	let data = req.body;
	let sql = `SELECT refresh_session(${data.sessionID}, ${data.sessionEmail})`;
	try {
		pool.getConnection(function (err, connection) {
			if (err) throw err;
			connection.query(sql, function (err, result) {
				if (err) throw err;
				let refreshAccepted = Object.values(JSON.parse(JSON.stringify(result[0])));
				if (refreshAccepted == 1) {
				 	console.log('test'); 
					req.session.touch();
					res.json(result);
				}
				console.log(result);
			});
		});
	} catch (error) {
		console.log(error);
	}
});
 */


app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
