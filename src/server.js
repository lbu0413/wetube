import express from "express";

const app = express();
const PORT = 4000;

const handleHome = (req, res) => {
	return res.send("<h1>hello world</h1>");
};

const handleLogin = (req, res) => {
	return res.send("login here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`listening on port ${PORT}`);

app.listen(PORT, handleListening);
