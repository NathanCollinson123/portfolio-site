// controller that would respond to button events
//so pressing on a project button would show the project div
//and hide the other divs

window.addEventListener("load",init);
function init(){
    loadProjects();
    //initProjectController();
}


const projectSearch = {
    projects: [],
    searchProject(projectName){
        return this.projects.filter(project => project.name === projectName);
    },
    selectProject(projectName){
        this.projects.forEach(project => {
            if(project.name === projectName){
                project.toggle();
            }
        });
    },
};

//function initProjectController() {
//    bindEvents();
//}
  

function loadProjects() {
    projectSearch.projects.push(
      new Project("Night Calc", "nightCalc", "Night Calc is a react web app I created to calculate new shutter speeds in night photography."+ 
      " I used GitHub to host my webapp and to manage version control across the entire project. I "+
      "created the app with react and styled with CSS. I learnt a lot from this project and had "+
      "enjoyed figuring out how to iterate my app based off my client.", ["imgs/night-calc"])
    );
    projectSearch.projects.push(
      new Project("Chaps Challenge", "chapsChallenge", "Chaps Challenge was group project developed in java. My role in this project was to code the"+
      "logic and main structure of the code. I had to work with the other members closely to "+
      "communicate the structure of the code that where I used existing java patterns. I was quite "+
      "proud with the game created and learnt a lot from managing roles within a group.", ["img/chaps-challenge"])
    );
  
    //initProjectController(); // Call the function to initialize event listeners
    generateProjectCarousel();
}
  

/*function bindEvents() {
    // Remove existing event listeners
    document.querySelector("#nightCalc").removeEventListener("click", handleProjectClick);
    document.querySelector("#chapsChallenge").removeEventListener("click", handleProjectClick);
  
    // Bind updated event listeners
    document.querySelector("#nightCalc").addEventListener("click", handleProjectClick);
    document.querySelector("#chapsChallenge").addEventListener("click", handleProjectClick);
}*/

function generateProjectCarousel(){
    const projectCarousel = document.getElementById("project-carousel");

    projectSearch.projects.forEach(p => {
        var projectObject;

        projectObject = document.createElement("li");
        projectObject.classList.add("carousel__item");
        projectCard = document.createElement("div");
        projectClasses = ["cs3-bg-contrast-lower", "cs3-height-4xl", "cs3-flex", "cs3-flex-center", "cs3-text-md", "card"];
        projectCard.classList.add(...projectClasses);
        text = document.createElement("p");
        text.innerText = p.title;
        projectCard.appendChild(text);
        projectCard.id = p.name;
        projectObject.appendChild(projectCard);

        projectCarousel.appendChild(projectObject);
        // attach listener to each project
        projectObject.addEventListener("click", handleProjectClick);
    });
    //for(var i = 0; i < 5; i++){
    var projectObject;
    projectObject = document.createElement("li");
    projectObject.classList.add("carousel__item");
    projectCard = document.createElement("div");
    projectClasses = ["cs3-bg-contrast-lower", "cs3-height-4xl", "cs3-flex", "cs3-flex-center", "cs3-text-md", "card"];
    projectCard.classList.add(...projectClasses);
    projectCard.id = "filler";
    projectObject.appendChild(projectCard);
    projectCarousel.appendChild(projectObject);
    //}
}

function handleProjectClick(event) {
    var projectKey = event.target.id;
    var project = projectSearch.searchProject(projectKey)[0];
    console.log("project " + project);
    console.log("project key " + projectKey);
    projectSearch.projects.forEach(p => {p.unSelect();});
    document.querySelectorAll(".selected").forEach(item => {item.classList.remove("selected");});
    event.target.classList.add("selected");
    console.log("ya"+ event.target);
    document.getElementById("projectName").innerText = project.title;
    document.getElementById("projectDescription").innerText = project.desc;
}
/*
// Wrap your event listener code in a function
function setupCarouselUpdatedEvent() {
    var carousel = document.querySelector('.js-carousel');
    if (carousel) {
      carousel.addEventListener('carousel-updated', function(event) {
        initProjectController();
      });
    }
}

  // Call the setupCarouselUpdatedEvent function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    setupCarouselUpdatedEvent();
    
});*/
