//Server Kurulumu!
import express from "express";
const app = express();
const port = 3000;

//ESJ Engine'i tanımlama ve public dosyasıyla statiklerin gösterimi
app.set('view engine', 'ejs');
app.use(express.static("public"));

//yönlendirmeler
app.get("/", (req, res) => {
  res.render("index.ejs", { activePage: "home" });
});

app.get("/resume", (req, res) => {
  res.render("resume.ejs", { activePage: "resume" });
});

app.get("/skills", (req, res) => {
  res.render("skills.ejs", { activePage: "skills" });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { activePage: "about" });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { activePage: "contact" });
});

//port yönlendirme
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


