import express from "express";

const app = express();

app.get("/", (req, res) => {
	return res.json({ msg: "Hi" });
});

export default app;
