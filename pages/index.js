export default function Home() {
  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", padding: "20px" }}>
      <h1>TasteBuds</h1>

      <div>
        <label>Your Location</label>
        <input type="text" id="location" placeholder="City, Country" />
      </div>

      <div>
        <label>Payment Preference</label>
        <select id="payment">
          <option value="split">Split the bill</option>
          <option value="you">I'm paying</option>
          <option value="them">They're paying</option>
        </select>
      </div>

      <div>
        <label>Preferred Cuisine</label>
        <select id="cuisine">
          <option>All</option>
          <option>Italian</option>
          <option>Mexican</option>
          <option>Chinese</option>
          <option>Japanese</option>
          <option>Indian</option>
          <option>French</option>
          <option>Mediterranean</option>
          <option>Thai</option>
          <option>American</option>
          <option>Vietnamese</option>
          <option>Korean</option>
          <option>Middle Eastern</option>
        </select>
      </div>

      <button onClick={searchRestaurants}>Find Restaurants</button>

      <div id="results"></div>
    </div>
  );
}

function searchRestaurants() {
  const cuisine = document.getElementById("cuisine").value;

  const sampleData = [
    { name: "Local Bistro", cuisine: "French" },
    { name: "Mama’s Pasta House", cuisine: "Italian" },
    { name: "Dragon Flame", cuisine: "Chinese" },
    { name: "Taco Fiesta", cuisine: "Mexican" },
    { name: "Sushi Zen", cuisine: "Japanese" },
    { name: "Bombay Spice", cuisine: "Indian" }
  ];

  const results = document.getElementById("results");
  results.innerHTML = "";

  let filtered =
    cuisine === "All"
      ? sampleData
      : sampleData.filter((r) => r.cuisine === cuisine);

  if (filtered.length === 0) {
    results.innerHTML = "<p>No restaurants found.</p>";
    return;
  }

  filtered.forEach((r) => {
    results.innerHTML += `
      <div style="background:#fff;padding:15px;margin:10px 0;border-radius:10px;">
        <strong>${r.name}</strong><br />
        <span>Cuisine: ${r.cuisine}</span>
      </div>
    `;
  });
}
