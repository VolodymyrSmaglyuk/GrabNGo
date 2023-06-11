const sqlite3 = require("sqlite3").verbose();
let sql;
const db = new sqlite3.Database(
  "./fastFood.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
// );ql = `CREATE TABLE sections ( sectionClass TEXT,src TEXT,alt TEXT,header TEXT,description TEXT ,PRIMARY KEY (sectionClass))`;
// s
// db.run(sql);
// db.close();

// const data = [
//   [
//     "about_section",
//     "images/about-img.jpg",
//     "dish illustration",
//     "Про нашу їжу",
//     "Наша їжа - це справжнє задоволення для вашого смаку. Ми пропонуємо тільки найсвіжіші інгредієнти, щоб забезпечити найвищу якість і смак нашої їжі. Спробуйте наші смачні бургери, снеки, салати та напої - і ви не зможете відірватися від нашого меню!",
//   ],
//   [
//     "dish-section",
//     "images/dish.jpg",
//     "dish photo",
//     "Наші Страви ",
//     "Наш заклад швидкого харчування пропонує широкий вибір страв, які задовольнять будь-який смак. В нашому меню ви знайдете смачні бургери, хрусткі курячі крильця, свіжі салати, ароматні снеки та безліч напоїв.",
//   ],
//   [
//     "map-section",
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.402420949832!2d24.009372124649474!3d49.83489572291163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7921b27893%3A0xeb0af83fbf3c123c!2z0LLRg9C70LjRhtGPINCh0YLQtdC_0LDQvdCwINCR0LDQvdC00LXRgNC4LCAyNiwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1683828404710!5m2!1suk!2sua",
//     "-",
//     "Наша Локація ",
//     "Наша локація зручно розташована поруч з головними транспортними магістралями, що дозволяє легко до нас дістатися. Завітайте до нас за смачними стравами та енергетичними напоями!",
//   ],
//   [
//     "delivery-section",
//     "images/delivery.jpg",
//     "delivery photo",
//     "Доставка Їжі ",
//     "Ми розуміємо, що іноді вам необхідно замовити їжу на додому або в офіс, тому ми співпрацюємо з найкращими службами доставки. Наші партнери з доставки включають такі відомі компанії, як Uber Eats, Glovo, Bolt Food та інші",
//   ],
// ];

// const insertQuery =
//   "INSERT INTO sections (sectionClass, src, alt, header, description) VALUES (?, ?, ?, ?, ?)";

// data.forEach((row) => {
//   db.run(insertQuery, row, function (err) {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(`Row inserted with ID: ${this.lastID}`);
//     }
//   });
// });

// db.close();

// const name = "Французький Хот-дог";
// const src = "images/french-hot-dog.jpg";

// sql = `UPDATE menuItems SET src = ? WHERE name = ?`;

// db.run(sql, [src, name], function (err) {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log(`Row(s) updated: ${this.changes}`);
// });

// db.close();
// sql = "SELECT * FROM menuItems  WHERE rank = 2";

// db.all(sql, [], (err, rows) => {
//   if (err) {
//     return console.error(err.message);
//   }

//   // Отримані рядки з бази даних
//   console.log(rows);

//   db.close();
// });
// sql =
//   "UPDATE menuItems SET rank = 2 WHERE rowid IN (SELECT rowid FROM menuItems ORDER BY rowid DESC LIMIT 20)";

// db.run(sql, [], (err) => {
//   if (err) {
//     return console.error(err.message);
//   }

//   console.log("Rank values updated successfully");

//   db.close();
// });

// const name = "Французький Хот-дог";
// sql = `SELECT * FROM menuItems WHERE name = ?`;

// db.all(sql, [name], (err, rows) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

// db.close();

// sql = `SELECT * FROM menuItems `;

// db.all(sql, [], (err, rows) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

// db.close();

// sql = `CREATE TABLE chefs ( name TEXT,specialty TEXT,src TEXT,alt TEXT,PRIMARY KEY (name))`;
// db.run(sql);
// db.close();
// sql = `INSERT INTO chefs(name,specialty,src,alt) VALUES (?,?,?,?)`;
// db.run(
//   sql,
//   [
//     "Андрій Шаповалов",
//     "Володар картоплі фрі та снеків.",
//     "images/chefs-02.jpg",
//     "chef photo 2",
//   ],
//   (err) => {
//     if (err) return console.error(err.message);
//   }
// );
// db.close();
// sql = `SELECT * FROM chefs`;

// db.all(sql, [], (err, rows) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });
// db.close();

// const name = "Лаймовий смузі";
// sql = `SELECT * FROM menuItems WHERE name = ?`;

// db.all(sql, [name], (err, rows) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

// db.close();
// const name = "Лаймовий смузі";
// sql = `DELETE FROM menuItems WHERE name = ?`;

// db.run(sql, [name], function (err) {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log(`Deleted ${this.changes} record(s)`);
// });

// db.close();

// sql = `CREATE TABLE comments ( name TEXT,comment TEXT,PRIMARY KEY (name, comment))`;
// sql = `CREATE TABLE menuItems ( name TEXT,comment TEXT,PRIMARY KEY (name, comment))`;
// db.run(sql);
// sql = `CREATE TABLE menuItems (name TEXT, description TEXT, price TEXT, src TEXT,
//     alt TEXT, rank INTEGER, PRIMARY KEY (name))`;
// db.run("DROP TABLE comment");
// db.run("DROP TABLE menuItems");
// db.run(sql);

// sql = `INSERT INTO comments(name,comment) VALUES (?,?)`;
// db.run(sql, ["Mike", "Very good service"], (err) => {
//   if (err) return console.error(err.message);
// });
// sql = `SELECT * FROM menuItems`;
// db.all(sql, [], (err, rows) => {
//   if (err) return console.error(err.message);
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

// sql = `INSERT INTO menuItems(name,description,price,src,alt,rank) VALUES (?,?,?,?,?,?)`;
// db.run(
//   sql,
//   [
//     "Лаймовий смузі",
//     "Освіжаючий смузі з лаймом та сумішшю цитрусових фруктів.",
//     "25 грн",
//     "images/smoothie-with-lime.avif",
//     "smoothie with lime",
//     0,
//   ],
//   (err) => {
//     if (err) return console.error(err.message);
//   }
// );
// db.close();
