// pages/index.js
'use client'
import React from 'react';

const ScrapeButton = () => {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/scrape');
      const data = await response.json();
      console.log('Scraped data:', data);
      // Do something with the scraped data
    } catch (error) {
      console.error('Scraping failed.', error);
    }
  };

  return (
    <button onClick={handleClick}>Scrape Data</button>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Web Scraping Example</h1>
      <ScrapeButton />
    </div>
  );
};

export default Home;
