const yearElement = document.querySelector("h1");
const dateTimeElement = document.createElement("div");


dateTimeElement.style.textAlign = "center";
dateTimeElement.style.fontSize = "20px";
dateTimeElement.style.fontWeight = "bold";
dateTimeElement.style.padding = "10px";
dateTimeElement.style.margin = "10px auto";
dateTimeElement.style.width = "fit-content";
document.body.insertBefore(dateTimeElement, document.querySelector(".wrapper").nextSibling);

const techStack = [
  {
      language: "Python",
      tools: ["Flask", "NumPy", "Pandas", "Django", "TensorFlow", "PyTorch", "Scikit-learn"]
  },
  {
      language: "JavaScript",
      tools: ["React", "Node.js", "Express", "Vue.js", "Angular", "jQuery", "Next.js"]
  },
  {
      language: "HTML & CSS",
      tools: ["Bootstrap", "Tailwind CSS", "Sass", "CSS Grid", "CSS Flexbox"]
  },
  {
      language: "React",
      tools: ["React Router", "Redux", "React Native", "Styled Components", "Material-UI", "Axios"]
  },
  {
      language: "Full Stack",
      tools: ["MongoDB", "Express", "React", "Node.js", "MySQL", "PostgreSQL", "GraphQL", "Docker"]
  },
  {
    language: "Data Analysis",
      tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Jupyter Notebook", "SQL", "Tableau"]
  },
  {
      language: "React Native",
      tools: ["Expo", "Redux", "React Navigation", "Styled Components", "Axios"]
  },
  {
      field: "Machine Learning",
      tools: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "XGBoost"]
  }
];


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
  for(let i = 0 ;i<listItems.length;i++) {
    const listName = listItems[i];
    if(listName.textContent.includes("Done")) {
      listName.style.backgroundColor = "green";
      const para = document.createElement("p");
      para.textContent='Done';
      para.style.textAlign='right';
      listName.appendChild(para);
    } else if (listName.textContent.includes("Ongoing")) {
      listName.style.backgroundColor = "yellow";
      const para = document.createElement("p");
      para.textContent='Ongoing';
      para.style.textAlign='right';
      listName.appendChild(para);
    } else {
      listName.style.backgroundColor = "red";
      const para = document.createElement("p");
      para.textContent='Coming';
      para.style.textAlign='right';
      listName.appendChild(para);
    }
    listName.style.padding = "10px";
    listName.style.margin = "5px 0";
    listName.style.color = "black";
    listName.style.textAlign = "left";
    listName.style.listStyle = "none";
    const details = document.createElement("details");

    details.style.textAlign='center';
    const summary = document.createElement("summary");
    summary.textContent = techStack[i].language;
    details.style.textAlign = "center";
    const para = document.createElement("p");
    para.textContent =techStack[i].tools.join();
  
    const orderList = document.createElement("ul");

    details.appendChild(para);
    details.appendChild(summary);
    details.appendChild(orderList);
    listName.appendChild(details);
  }
  
}


changeYearColor();
updateDateTimeDisplay();
styleChallengeList();


setInterval(changeYearColor, 2000);
setInterval(updateDateTimeDisplay, 1000);
