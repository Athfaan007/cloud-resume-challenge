const API_URL = "https://xxxxxxxx.execute-api.ap-south-1.amazonaws.com/prod/count";

async function updateVisitorCount() {
  const countEl = document.getElementById("count");
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("API error: " + response.status);
    const data = await response.json();
    countEl.textContent = data.count;
  } catch (error) {
    console.error("Could not load visitor count:", error);
    countEl.textContent = "-";
  }
}

updateVisitorCount();