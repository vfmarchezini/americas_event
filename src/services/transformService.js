// services/trans.js
//const FUNCTION_URL = "https://tt-colombia-2025-7160.twil.io/fetch_info.js"; 
const FUNCTION_URL = "https://events-3647.twil.io/fetch_info.js";
const USERNAME = "tt2025";
const PASSWORD = "2XT8P3Y7VL"; 

 console.log("Transform Service initialized with FUNCTION_URL:", FUNCTION_URL);

export async function getInfo() {
  console.log("Fetching info from Twilio Function...");
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + btoa(`${USERNAME}:${PASSWORD}`)
  );

  const response = await fetch(FUNCTION_URL, {
    method: "GET",
    headers
  });

 console.log("Response status:", response.status);

  if (!response.ok) {
    throw new Error(`Error fetching Info: ${response.status}`);
  }

  return response.json();
}