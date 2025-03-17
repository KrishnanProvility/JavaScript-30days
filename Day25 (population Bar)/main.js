const languagesData = [
    { name: "English", count: 91 },
    { name: "French", count: 45 },
    { name: "Arabic", count: 25 },
    { name: "Spanish", count: 24 },
    { name: "Portuguese", count: 9 },
    { name: "Russian", count: 9 },
    { name: "Dutch", count: 8 },
    { name: "German", count: 7 },
    { name: "Chinese", count: 5 },
    { name: "Serbian", count: 4 }
];

const populationData = [
    { name: "China", count: 1441 },
    { name: "India", count: 1393 },
    { name: "USA", count: 331 },
    { name: "Indonesia", count: 273 },
    { name: "Pakistan", count: 225 },
    { name: "Brazil", count: 213 },
    { name: "Nigeria", count: 206 },
    { name: "Bangladesh", count: 166 },
    { name: "Russia", count: 146 },
    { name: "Mexico", count: 128 }
];

function generateChart(data, type) {
    const chartContainer = document.getElementById("chartContainer");
    chartContainer.innerHTML = ""; 

    const maxCount = Math.max(...data.map(item => item.count));

    data.forEach(item => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.width = `${(item.count / maxCount) * 100}%`; 
        bar.textContent = `${item.name} (${item.count}${type === "Population" ? "M" : ""})`;
        chartContainer.appendChild(bar);
    });

    document.getElementById("chartTitle").textContent = `10 Most ${type} in the World`;
}


generateChart(languagesData, "Languages");

document.getElementById("languagesBtn").addEventListener("click", () => {
    generateChart(languagesData, "Languages");
});

document.getElementById("populationBtn").addEventListener("click", () => {
    generateChart(populationData, "Population");
});
