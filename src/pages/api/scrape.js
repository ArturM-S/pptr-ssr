const puppeteer = require('puppeteer');

export default async function handler(req, res) {
    try {
        const browser = await puppeteer.launch({
            headless: 'new',
        });
        const page = await browser.newPage();
        console.log('oi');
        await page.goto('https://www.google.com');
        const pageSource = await page.content();
        console.log(pageSource);

        // Perform scraping actions with Puppeteer as needed
        const scrapedData = await page.evaluate(() => {
            // Example: Scrape the title of the page
            return document.querySelector('title').innerText;
        });
        console.log(scrapedData);
        await browser.close();

        res.status(200).json({ data: scrapedData });
    } catch (error) {
        res.status(500).json({ error: 'Scraping failed.' });
    }
}