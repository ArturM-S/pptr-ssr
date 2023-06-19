import puppeteer from 'puppeteer';

export default async function handler(req, res) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.google.com');

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