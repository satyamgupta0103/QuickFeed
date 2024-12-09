import Parser from "rss-parser";
import express from "express";
import cors from "cors";

const app = express();
const parser = new Parser();

const netflixFeedUrl = "https://netflixtechblog.com/feed";

let articles = [];

(async () => {
  const feed = await parser.parseURL(netflixFeedUrl);

  feed.items.forEach((item) => {
    articles.push({ item });
  });
})();

app.use(cors());

app.get("/", function (req, res) {
  res.send(articles);
});

const server = app.listen(4000, () => {
  console.log("App is running on port 4000");
});

export default server;
