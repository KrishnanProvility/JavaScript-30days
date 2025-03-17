function calculateValue() {
    const massValue = parseInt(document.querySelector(".inputBox").value);
    const selectedPlanet = document.querySelector("select[name='planet']").value;
  
    if (!massValue) {
      document.querySelector(".empty-result").style.display = "block";
      document.querySelector(".result-container").style.display = "none";
      return;
    }
  
    document.querySelector(".empty-result").style.display = "none";
    document.querySelector(".result-container").style.display = "block";
  
    addImage(selectedPlanet);  // Pass the selected planet to change image dynamically
    calculateWeight(massValue, selectedPlanet);  // Pass arguments correctly
  }
  
  function addImage(selectedPlanet) {
    let resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = ""; // Clear previous results
  
    let imgElement = document.createElement("img");
    imgElement.src = `./solarplanets/${selectedPlanet}.png`; // Dynamically change image
    imgElement.alt = selectedPlanet;
    imgElement.classList.add("planet-image");
  
    resultDiv.appendChild(imgElement);
  }
  
  function calculateWeight(massValue, selectedPlanet) {
    const gravityValues = {
      Mercury: 3.7,
      Venus: 8.87,
      Earth: 9.81,
      Mars: 3.71,
      Jupiter: 24.79,
      Saturn: 10.44,
      Uranus: 8.69,
      Neptune: 11.15,
      Pluto: 0.62,
    };
  
    if (!gravityValues[selectedPlanet]) return; 
  
    const objectWeight = massValue * gravityValues[selectedPlanet];
  
    let resultDiv = document.querySelector(".result");
  
    let weightResultDiv = document.createElement("div");
    weightResultDiv.classList.add("weight-result");
  
    let spanText = document.createElement("span");
    spanText.textContent = `The weight of the object on ${selectedPlanet}: `;
  
    let spanValue = document.createElement("span");
    spanValue.classList.add("calculated-value");
    spanValue.textContent = `${objectWeight.toFixed(2)} N`;
  
    weightResultDiv.appendChild(spanText);
    weightResultDiv.appendChild(spanValue);
  
    resultDiv.appendChild(weightResultDiv);
  }
  