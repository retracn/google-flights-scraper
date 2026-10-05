// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/google-flights-scraper').call({
  "origin": "JFK",
  "destination": "LHR",
  "departureDate": "2026-11-12"
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.price, item.airlines, item.departure, item.duration);
