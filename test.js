const puppeteer = require('puppeteer'); 
puppeteer.launch().then(async browser => {   const page = await browser.newPage();   
await page.goto('https://www.unibet.fr/sport');   
const title = await page.title()   
console.log(title)   
await browser.close(); });