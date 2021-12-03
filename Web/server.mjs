import express from 'express';
const app = express();

app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Server is running on port ${process.env.PORT ?? 3000}`);
})

app.get("*", (req, res) => {
    return res.redirect("https://www.youtube.com/watch?v=XKLBMU6lWso")
})