# Google Flights Scraper & API: prices, airlines and times

[![Run on Apify](https://img.shields.io/badge/Run%20on-Apify-0b57d0)](https://apify.com/automationnation/google-flights-scraper)

Google Flights Scraper is an Apify Actor that returns Google Flights results for any route and date: price, airlines, flight numbers, departure and arrival times, duration, stops and layovers, aircraft, legroom and CO2 emissions, one way or round trip, any cabin, passengers and currency, at $0.20 per 1,000 flights.

**Price:** $0.20 per 1,000 flights ($0.16 on Gold and above) · **Run it:** [https://apify.com/automationnation/google-flights-scraper](https://apify.com/automationnation/google-flights-scraper) · **Guide:** [https://retracn.github.io/automationnation-actors/google-flights-scraper/](https://retracn.github.io/automationnation-actors/google-flights-scraper/)

## Quick facts

- One row per flight: price, airlines, flight numbers, times, duration, stops, layovers, legs with aircraft and legroom, CO2 vs typical.
- One way or round trip, economy to first, 1–9 adults, nonstop filter, any currency.
- Airport codes or city names; many routes per run.
- Price: $0.20 per 1,000 flights (a search costs under a cent).
- Migrating from the Amadeus Self-Service API? The open-source amadeus-cloud package (github.com/retracn/amadeus-cloud) keeps the Amadeus Node SDK's flightOffersSearch.get/post and returns Amadeus-shaped offers from this Actor.

## Example input

```json
{
  "origin": "JFK",
  "destination": "LHR",
  "departureDate": "2026-11-12"
}
```

## Run it from code

**REST API**

```bash
curl -X POST "https://api.apify.com/v2/acts/automationnation~google-flights-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"origin": "JFK", "destination": "LHR", "departureDate": "2026-11-12"}'
```

**Python** — see [`examples/python_example.py`](examples/python_example.py)

```python
# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/google-flights-scraper").call(run_input={
  "origin": "JFK",
  "destination": "LHR",
  "departureDate": "2026-11-12"
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("price"), item.get("airlines"), item.get("departure"), item.get("duration"))
```

**JavaScript** — see [`examples/node_example.mjs`](examples/node_example.mjs)

```js
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
```

## Use it with AI agents (MCP)

Hosted MCP server URL (Claude, ChatGPT, Cursor and other clients with remote MCP support):

```
https://mcp.apify.com?tools=automationnation/google-flights-scraper
```

Local config for Claude Desktop / Cursor — [`mcp/claude_desktop_config.json`](mcp/claude_desktop_config.json):

```json
{
  "mcpServers": {
    "google-flights-scraper": {
      "command": "npx",
      "args": [
        "-y",
        "@apify/actors-mcp-server",
        "--tools",
        "automationnation/google-flights-scraper"
      ],
      "env": {
        "APIFY_TOKEN": "YOUR_APIFY_TOKEN"
      }
    }
  }
}
```

## FAQ

**Is there an official Google Flights API?**
No. Google shut down its QPX Express flights API in 2018. Google Flights Scraper returns Google Flights results as data.

**Are prices per person?**
Prices include taxes and cover all passengers; round trips show the round-trip total.

## More from AutomationNation

- [AI Visibility Tracker](https://apify.com/automationnation/ai-visibility-tracker) — $0.05 per answer checked ($0.04 on Gold) + $0.50 per optional report · [GitHub examples](https://github.com/retracn/ai-visibility-tracker)
- [Google Jobs Scraper](https://apify.com/automationnation/google-jobs-scraper) — $2 per 1,000 jobs ($1.50 on paid plans) + $0.03 per search · [GitHub examples](https://github.com/retracn/google-jobs-scraper)
- [YouTube Transcript Scraper](https://apify.com/automationnation/youtube-transcript-scraper) — $1.50 per 1,000 transcripts ($1.20 on Gold and above) · [GitHub examples](https://github.com/retracn/youtube-transcript-api)
- [Google Shopping Scraper](https://apify.com/automationnation/google-shopping-scraper) — $1 per 1,000 products ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-shopping-scraper)
- [Google Hotels Scraper](https://apify.com/automationnation/google-hotels-scraper) — $1 per 1,000 hotels ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-hotels-scraper)
- [Google Ads Transparency Scraper](https://apify.com/automationnation/google-ads-transparency-scraper) — $1 per 1,000 ads ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-ads-transparency-scraper)
- [Google News Scraper](https://apify.com/automationnation/google-news-scraper) — $1 per 1,000 articles ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-news-scraper)
- [Google Images Scraper](https://apify.com/automationnation/google-images-scraper) — $0.25 per 1,000 images ($0.20 on Gold and above) · [GitHub examples](https://github.com/retracn/google-images-scraper)
- [Google Videos Scraper](https://apify.com/automationnation/google-videos-scraper) — $1 per 1,000 videos ($0.80 on Gold and above) · [GitHub examples](https://github.com/retracn/google-videos-scraper)
- [Google Trends Scraper](https://apify.com/automationnation/google-trends-scraper) — $1 per 1,000 keyword reports ($0.27–$0.90 on paid plans) · $0.50 per 1,000 trending searches · [GitHub examples](https://github.com/retracn/google-trends-scraper)
- [App Store Reviews Scraper](https://apify.com/automationnation/app-store-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/app-store-reviews-scraper)
- [Google Play Reviews Scraper](https://apify.com/automationnation/google-play-reviews-scraper) — $0.08 per 1,000 reviews ($0.05–$0.07 on paid plans) · [GitHub examples](https://github.com/retracn/google-play-reviews-scraper)
- [AEO & GEO Tracker — Google AI Overview Citation Checker](https://apify.com/automationnation/aeo-auditor) — $0.04 per keyword ($0.032 on Gold), plus $2 per run from 17 Nov 2026; $0.01 per keyword until 16 Oct 2026 · [GitHub examples](https://github.com/retracn/google-ai-overview-tracker)
- [Google Maps Leads Scraper](https://apify.com/automationnation/google-maps-leads) — $0.03 per lead ($0.024 on Gold) · [GitHub examples](https://github.com/retracn/google-maps-leads-scraper)
- [Google Maps Leads Scraper UK](https://apify.com/automationnation/uk-business-leads) — $0.05 per lead ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/uk-business-leads-google-maps)
- [App Store & Google Play Reviews Scraper + AI](https://apify.com/automationnation/app-store-review-miner) — $0.05 per app report ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/app-store-google-play-reviews-ai)
- [UK Companies House Leads — Filing Signals & AI Outreach](https://apify.com/automationnation/companies-house-leads) — $0.008 per lead
- [Contact Waterfall Enrichment — Emails & Directors](https://apify.com/automationnation/contact-waterfall-enrichment) — $0.015 per company
- [All Actors and guides](https://retracn.github.io/automationnation-actors/) · [AI visibility trackers compared](https://retracn.github.io/automationnation-actors/compare/ai-visibility-trackers/) · [Google Jobs scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-jobs-scrapers/) · [Google Trends scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-trends-scrapers/) · [App Store review scrapers compared](https://retracn.github.io/automationnation-actors/compare/app-store-review-scrapers/) · [Google Play review scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-play-review-scrapers/) · [YouTube transcript scrapers compared](https://retracn.github.io/automationnation-actors/compare/youtube-transcript-scrapers/) · [Google Flights scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-flights-scrapers/) · [Google Hotels scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-hotels-scrapers/) · [Google Ads Transparency scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-ads-transparency-scrapers/) · [Google Shopping scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-shopping-scrapers/) · [Google News scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-news-scrapers/)

---

This repository holds usage examples. The scraper itself runs on the [Apify platform](https://apify.com/automationnation/google-flights-scraper); you need a free Apify account and API token. Examples are MIT licensed.
