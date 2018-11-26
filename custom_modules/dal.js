let mysql = require('promise-mysql');

let pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'node',
	connectionLimit : 10
});

let getUsers = function(){
	return pool.query("SELECT * FROM USERS");
}
let getUserById = function(id){
	return pool.query("SELECT * FROM users WHERE id=" + id);
}
let delUserById = function(){
	return pool.query("delete FROM users WHERE id=" + id);
}
let createUser = function(data){
	return pool.query("INSERT INTO users(username, password, email) VALUES('" + data.username + "', '" + data.password + "', '" + data.email + "')"); 
}
let updateUser = function(data){
	return pool.query("UPDATE users SET username='" + data.username + "', password='" + data.password + "', email='" + data.email + "' WHERE id='" + data.id + "'"); 
}


exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.delUserById = delUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;