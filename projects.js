console.log("CONNECTED");


const projects = [
  {
    title: "Almost Amazon",
    screenshot: "screenshots/AlmostAmazon.png",
    altText: "Screen shot of Almost Amazon project",
    description: "App that allows a user to track books and authors",
    technologiesUsed: "HTML, CSS, Javascript, Github for version control",
    available: true,
    url: "https://unruffled-morse-7d9b48.netlify.app/",
    githubUrl: "https://github.com/Greenfin17/IN-CLASS-almost-amazon-template"
  },
  {
    title: "Tamagotchi",
    screenshot: "screenshots/Tamagotchi.png",
    altText: "Screen shot of Tamagotchi project",
    description: "Game that mimics the Tamagotchi toy of the 90's",
    technologiesUsed: "HTML, CSS, Javascript, Github for version control",
    available: true,
    url : "https://jm-e-pet-tamagotchi.netlify.app/",
    githubUrl: "https://github.com/Greenfin17/ASSIGNMENT-Tamagotchi"
  },
  {
    title: "Bear Watcher",
    screenshot: "screenshots/BearWatcher.png",
    altText: "Screen shot of Bear Watcher project",
    description: "Tool for tracking the fishing activiteis of bears in real time.",
    technologiesUsed: "HTML, CSS, Javascript, Github for version control",
    available: true,
    url : "https://jm-bear-watcher.netlify.app",
    githubUrl: "https://github.com/Greenfin17/ASSIGNMENT-Bear-Watcher"
  },
  {
    title: "Sorting Hat",
    screenshot: "screenshots/SortingHat.png",
    altText: "Screen shot of Sorting Hat project",
    description: "Mimics the Sorting Hat fo the Harry Potter series",
    technologiesUsed: "HTML, CSS, Javascript, Github for version control",
    available: true,
    url : "https://jm-hogwarts-sorting-hat.netlify.app",
    githubUrl : "https://github.com/Greenfin17/sorting-hat",
  },
  {
    title: "Pet Adoption",
    screenshot: "screenshots/PetAdoption.png",
    altText: "Screen shot of Pet Adoption project",
    description: "Mimics a pet adoption site.",
    technologiesUsed: "HTML, CSS, Javascript, Github for version control",
    available: true,
    url: "https://jm-pet-adoption.netlify.app/",
    githubUrl : "https://github.com/Greenfin17/pet-adoption",
  },
  {
    title: "Ski Shop",
    screenshot: "screenshots/SkiShop.png",
    altText: "Screen shot of Ski Shop product cards",
    description: "Product display of imaginary ski shop",
    technologiesUsed: "HTML, CSS, Javascript, Github for version control",
    available: true,
    url : "https://jm-product-cards.netlify.app",
    githubUrl : "https://github.com/Greenfin17/product-cards",
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
          <div class="img-container" style="background-image: url('${item.screenshot}');" 
          alt="${item.altText}"></div>
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
