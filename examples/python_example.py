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
