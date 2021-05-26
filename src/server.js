import express from "express";

const app = express();
const PORT = 4000;

const gossipMiddleware = (req, res, next) => {
	console.log(`Someone is going to: ${req.url}`);
	next();
};

const handleHome = (req, res, next) => {
	return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
	return res.send("login here");
};

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`listening on port ${PORT}`);

app.listen(PORT, handleListening);
