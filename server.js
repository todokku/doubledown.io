const express = require("express");
const fs = require("fs");
const sqlite = require("sql.js");

const filebuffer = fs.readFileSync("db/usda-nnd.sqlite3");

const db = new sqlite.Database(filebuffer);

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

function createDeck() {
  let deck = [];
  for (let suitsIDX = 0; suitsIDX < suits.length; suitsIDX++) {
      for (let valuesIDX = 0; valuesIDX < values.length; valuesIDX++) {
          let card = {
              suit: suits[suitsIDX],
              value: values[valuesIDX],
              numValue: numValues[valuesIDX],
              show: true,
          };
          deck.push(card)
      }
       
 }
 for(let i = deck.length -1; i > 0; i--) {
  const j = Math.floor(Math.random()* i)
  const temp = deck[i]
  deck[i] = deck[j]
  deck[j] = temp
}
 return deck;

}; 


app.get("/api/deck", (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }

  // WARNING: Not for production use! The following statement
  // is not protected against SQL injections.
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
