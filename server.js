let main = require("./custom_modules/main");
let action = require("./custom_modules/actions");
let app = main.appConfig;

app.get("/", action.home)
.get("/home", action.home)
.get("/contact", action.contact)
.post("/contact", action.contact)
.get("/user", action.user)

.get("/user/addUser", action.addUser)
.post("/user/addUser", action.addUser)

.get("/edit/:id", action.edit)
.post("edit/:id", action.postEdit)
.get("/delete/:id", action.del)
.use(action.error);

/*.post("/user", action.user)*/

/* ALTERNATIVE : en utilisant les COOKIES et en stockant les messages dans la SESSION
	let session = require("cookie-session");
	app.use(session({secret: '123456'}));

.get("/contact", function(req, res){
	res.render("contact.ejs", {"messages":req.session.listeCookie});
})
.post("/contact",function(req, res){
	console.log(req.body);
	if(req.session.listeCookie == undefined){
		req.session.listeCookie = [];
	}
	req.session.listeCookie.push({"email": req.body.email,"content": req.body.content});
	console.log(req.session.listeCookie);
	res.redirect("/contact");
})
*/