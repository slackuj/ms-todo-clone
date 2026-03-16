import express from "express";

const app = express();

// never use magic numbers in your port
const PORT = 4000;

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

export default app;