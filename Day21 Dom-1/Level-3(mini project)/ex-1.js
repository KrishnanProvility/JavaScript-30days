const yearElement = document.querySelector("h1");
const dateTimeElement = document.createElement("div");


dateTimeElement.style.textAlign = "center";
dateTimeElement.style.fontSize = "20px";
dateTimeElement.style.fontWeight = "bold";
dateTimeElement.style.padding = "10px";
dateTimeElement.style.margin = "10px auto";
dateTimeElement.style.width = "fit-content";
document.body.insertBefore(dateTimeElement, document.querySelector(".wrapper").nextSibling);


function changeYearColor() {
  yearElement.innerHTML = `Asabeneh Yetayeh challenges in <span style="color: ${generateRandomColor()};">2020</span>`;
}

function updateDateTimeDisplay() {
  const now = new Date();
  dateTimeElement.textContent = now.toLocaleString();
  dateTimeElement.style.backgroundColor = generateRandomColor();
}


function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}


function styleChallengeList() {
  const listItems = document.querySelectorAll("ul li");
  for (let li of listItems) {
    if (li.textContent.includes("Done")) {
      li.style.backgroundColor = "green";
    } else if (li.textContent.includes("Ongoing")) {
      li.style.backgroundColor = "yellow";
    } else {
      li.style.backgroundColor = "red";
    }
    li.style.padding = "10px";
    li.style.margin = "5px 0";
    li.style.color = "black";
    li.style.textAlign = "center";
    li.style.listStyle = "none";
  }
}


changeYearColor();
updateDateTimeDisplay();
styleChallengeList();


setInterval(changeYearColor, 2000);
setInterval(updateDateTimeDisplay, 1000);
