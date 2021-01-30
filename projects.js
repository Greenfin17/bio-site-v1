console.log("CONNECTED");

const projects = [
  {
    title: "Pet Adoption",
    screenshot: "screenshots/PetAdoption.png",
    description: "Creates a complex rythm metronome",
    technologiesUsed: "HTML, CSS, Javascript, Github for version control",
    available: true,
    url : "https://github.com/Greenfin17/samplesite",
    githubUrl : "https://github.com/Greenfin17/pet-adoption",
  },
  {
    title: "Ski Shop",
    screenshot: "screenshots/SkiShop.png",
    description: "Creates a complex rythm metronome",
    technologiesUsed: "HTML, CSS, Javascript, Github for version control",
    available: true,
    url : "https://jm-product-cards.netlify.app",
    githubUrl : "https://github.com/Greenfin17/product-cards",
  },
  {
    title: "Cool Project3",
    screenshot: "screenshot3.jpg",
    description: "Creates a complex rythm metronome",
    technologiesUsed: "HTML, CSS, Javascript, Github for version control",
    available: false,
    url : "https://github.com/Greenfin17/samplesite",
    githubUrl : "https://github.com/Greenfin17/samplesite",
  },
]  


const printToDom = (divID, textToPrint)  => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = textToPrint;
}


const createProjectCards = (projectArr) => {
  let domString = '';
  let i = 0;
  for(let item of projectArr) {
    if(item.available) {
      domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
        <div class="card-body">
          <p class="card-text project-title">${item.title}</p>
          <div class="img-container" style="background-image: url('${item.screenshot}');"></div>
          <p class="card-text technologies">Technologies: ${item.technologiesUsed}</p>
          <p class="card-text url"><a href="${item.url}">Site Link</a></p>
          <p class="card-text githubUrl"><a href="${item.githubUrl}">GitHub</a></p>
        </div>
      </div>`; 
      i++;
    }
  };
   printToDom('#projectsPage', domString);
}

const init = () => {
  createProjectCards(projects);
}

init();
