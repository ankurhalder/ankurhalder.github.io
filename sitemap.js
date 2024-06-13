import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const urls = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  // Add more URLs as needed
];

const stream = new SitemapStream({ hostname: "https://www.ankurhalder.in" });

urls.forEach((url) => {
  stream.write(url);
});

stream.end();

streamToPromise(stream)
  .then((data) => {
    fs.writeFileSync("./public/sitemap.xml", data.toString());

    console.log("Sitemap generated successfully.");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
