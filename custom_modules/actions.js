let db = require("./dal.js");

let home = function home(req, res){
	res.render("index.ejs");
}
let contact = function contact(req, res){
	res.render("contact.ejs",{"messages": req.body});
}
let user = function user(req, res){
	db.getUsers().then(function(rows){
		res.render("user.ejs", {"user": rows});
	});
}

let addUser = function (req, res) {
	let create = false;	
	db.createUser().then(function(rows){
		res.render("edit.ejs", { "create": create });
	});
}

let edit = function edit(req, res){
	let create = true;
	// if(req.params.id == 0){
	// 	create = true;
	// }
	db.getUserById(req.params.id).then(function(rows){
		res.render("edit.ejs", {"user": rows, "create": create});
	});
}

let postEdit = function(req, res){
	if(req.body.id == 0){
		db.createUser(req.body).then(redirect);
	}else{
		db.updateUser(req.body).then(redirect);
	}
	function redirect(){
		res.redirect("/");	
	}
}
let del = function(req, res){
	db.delUserById(req.params.id).then(function(rows){
		res.redirect("/");
	});
}
let error = function error(req, res){
	res.end("<h2>Page Not Found!<br>ERROR 404</h2>");
}

exports.home = home;
exports.contact = contact;
exports.user = user;
exports.addUser = addUser;
exports.edit = edit;
exports.postEdit = postEdit;
exports.del = del;
exports.error = error;