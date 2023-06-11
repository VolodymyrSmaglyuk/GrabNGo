const express = require("express");
const app = express();
const ejs = require("ejs");
const sqlite3 = require("sqlite3").verbose();

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

app.get("/", (req, res) => {
  const db = new sqlite3.Database(
    "./fastFood.db",
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) return console.error(err.message);
    }
  );
  const sql = "SELECT * FROM sections";
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { sections: rows });
    }
    db.close();
  });
});

app.get("/menu", (req, res) => {
  const db = new sqlite3.Database(
    "./fastFood.db",
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) return console.error(err.message);
    }
  );

  const sql = "SELECT * FROM menuItems";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }

    // Формуємо масив об'єктів з витягнутих даних
    const data = rows.map((row) => ({
      name: row.name,
      description: row.description,
      price: row.price,
      src: row.src,
      alt: row.alt,
      rank: row.rank,
    }));

    const sqlChefs = "SELECT * FROM chefs";
    db.all(sqlChefs, [], (err, chefsRows) => {
      if (err) {
        return console.error(err.message);
      }

      const chefsData = chefsRows.map((row) => ({
        name: row.name,
        specialty: row.specialty,
        src: row.src,
        alt: row.alt,
      }));

      res.render("menu", { data: data, chefsData: chefsData });

      db.close();
    });
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
