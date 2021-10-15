const express = require("express");
const puppeteer = require("puppeteer");
const fs = require('fs')
var path =require("path");
const app = express();
const content = fs.readFileSync(
    path.resolve(__dirname, 'businesscard.html'),
    'utf-8'
)
const port=process.env.PORT||8080;


app.get("/", async (req, res) => {
    const browser = await puppeteer.launch({ headless: true ,
        args: ["--no-sandbox"]})
    const page = await browser.newPage()
    await page.setContent(content);
    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
            left: '0px',
            top: '0px',
            right: '0px',
            bottom: '0px'
        }
    })

    await browser.close();

    res.contentType("application/pdf");
    res.send(pdf);
})

app.listen(port, () => {
    console.log("Server started");
});
