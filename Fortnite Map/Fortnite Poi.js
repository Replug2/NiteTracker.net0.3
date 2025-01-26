<!-- Include the POI and zoom functionality script -->
<script>
  const poiSwitch = document.getElementById("poiSwitch");
  const mapContainer = document.getElementById("map-container");
  const map = document.getElementById("map");

  const apiKey = "9d1087c7-b685-45ab-ad0c-d732c2f4b456"; // Your API Key
  const poiImageURL = "/fortnite map poi names.png"; // Replace with your POI image

  let poiMode = false;

  // Toggle POI visibility
  poiSwitch.addEventListener("change", (e) => {
    poiMode = e.target.checked;
    if (poiMode) {
      displayPOIs();
    } else {
      clearPOIs();
    }
  });

  // Use the provided POI data
  const pois = [
    { "id": "Athena.Location.UnNamedPOI.GasStation.03", "name": "BURD To Go", "location": { "x": -8568, "y": -17134, "z": 2686 } },
    { "id": "Athena.Location.UnNamedPOI.Landmark.14", "name": "Kite's Flight", "location": { "x": 107605, "y": 89675, "z": 1115 } },
    { "id": "Athena.Location.UnNamedPOI.Landmark.20", "name": "Splitting Pins", "location": { "x": -44328, "y": 102776, "z": 3997 } },
    { "id": "Athena.Location.POI.Generic.17", "name": "BRUTAL BOXCARS", "location": { "x": 9691, "y": -34932, "z": 4432 } },
    { "id": "Athena.Location.POI.Generic.18", "name": "MASKED MEADOWS", "location": { "x": 15134, "y": 76343, "z": 3598 } },
    { "id": "Athena.Location.POI.Generic.04", "name": "CANYON CROSSING", "location": { "x": -57184, "y": 71601, "z": 4432 } },
    { "id": "Athena.Location.UnNamedPOI.Landmark.10", "name": "Yacht Stop", "location": { "x": 6469, "y": -110943, "z": -812 } },
    { "id": "Athena.Location.UnNamedPOI.Landmark.32", "name": "Way Station", "location": { "x": 39927, "y": 88133, "z": 3115 } },
    { "id": "Athena.Location.POI.Generic.08", "name": "WHIFFY WHARF", "location": { "x": -88950, "y": -84496, "z": 4432 } },
    { "id": "Athena.Location.POI.Generic.10", "name": "PUMPED POWER", "location": { "x": 50225, "y": -57403, "z": 4432 } },
    { "id": "Athena.Location.UnNamedPOI.Landmark.11", "name": "Moisty Manor", "location": { "x": -64686, "y": -72055, "z": 5784 } },
    // Add all other POIs here...
  ];

  // Store POI elements for later toggling
  const poiElements = [];

  function displayPOIs() {
    pois.forEach((poi) => {
      const x = poi.location.x; // x coordinate of the POI
      const y = poi.location.y; // y coordinate of the POI

      // Create POI div and set its position on the map
      const poiElement = document.createElement("div");
      poiElement.classList.add("item");
      poiElement.style.left = `${(x + 100000) / 1000}px`; // Adjust for map scale
      poiElement.style.top = `${(y + 100000) / 1000}px`; // Adjust for map scale

      const poiImg = document.createElement("img");
      poiImg.src = poiImageURL; // Use the POI image URL you want

      poiElement.appendChild(poiImg);
      mapContainer.appendChild(poiElement);

      // Store the POI element in case we need to toggle visibility later
      poiElements.push(poiElement);
    });
  }

  function clearPOIs() {
    poiElements.forEach((poiElement) => {
      poiElement.style.display = "none";
    });
  }

  // Zoom functionality
  let scale = 1;

  document.getElementById("zoomIn").addEventListener("click", () => {
    scale = Math.min(scale + 0.1, 2);
    map.style.transform = `scale(${scale})`;
  });

  document.getElementById("zoomOut").addEventListener("click", () => {
    scale = Math.max(scale - 0.1, 0.5);
    map.style.transform = `scale(${scale})`;
  });
</script>
</body>
</html>
