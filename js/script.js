// controller that would respond to button events
//so pressing on a project button would show the project div
//and hide the other divs

window.addEventListener("load",init);
function init(){
    loadProjects();
    initProjectController();
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

function initProjectController() {
    bindEvents();
}
  

function loadProjects() {
    projectSearch.projects.push(
      new Project("Night Calc", "nightCalc", "Night Calc is a react web app I created to calculate new shutter speeds in night photography."+ 
      " I used GitHub to host my webapp and to manage version control across the entire project. I "+
      "created the app with react and styled with CSS. I learnt a lot from this project and had "+
      "enjoyed figuring out how to iterate my app based off my client.", ["imgs/night-calc"])
    );
    projectSearch.projects.push(
      new Project("Chaps Challenge", "chapsChallenge", "Chaps Challenge was group project developed in java. My role in this project was to code the"+
      " logic and main structure of the code. I had to work with the other members closely to "+
      "communicate the structure of the code where I used existing java patterns. I was quite "+
      "proud with the game created and learnt a lot from managing roles within a group.", ["img/chaps-challenge"])
    );

    projectSearch.projects.push(
        new Project("Neural Network", "neuralNetwork", "This program was a neural network that would classify instances using Python. I created this "+
        "program without the use of external libraries like sklearn. You can train the neural network "+
        "with csv data file and with another for the testing set. I enjoyed constructing the neural "+
        "network myself and the similarities to brain neurons.", ["img/neural-network"])
    );
      
    projectSearch.projects.push(
        new Project("Colour Switcher", "colourSwitcher", "Colour Switcher was a Processing game I made for my Computer Graphics Course. "+
        "I largely based it off previous games I had played such as Colour Switch and Undertale. This was the first Processing game I had made, "+
        "which is a language that acts similarily to Java. I had to plan my game so that it would fit a theme and "+
        "consist of different game modes. On my GitHub you can download the processing game <a href = 'https://github.com/NathanCollinson123'>here</a>.", ["img/colour-switcher"])
    );
        

    projectSearch.projects.push(
        new Project("Personal Portfolio", "website", "I used my Personal Portfoio to showcase my projects and to share more about me. "+
        "I planned the design of the website using wireframes, and have used GitHub to host and manage the version control of my site."+
        " Currently this site is the first version, and I have made designs for my second site with Declan Cross. Working on this project" +
        " taught me to learn javascript and some Jquery, and further onto the development I could add new javascript techniques I learnt" +
        " from my courses at University.", ["img/website"])
    );

    projectSearch.projects.push(
        new Project("Data Recorder", "dataRecorder", "Data Recorder was a large group project that I was part of for my Project Management Course at University."+
        " The Data Recorder is a ESP32 board used to scan water levels and rain levels using the attached sensors and data that can be read from a web app." +
        " For this project I was part of the embedded sub-group, which managed the main running functions with micropython." +
        " This project taught me to work in a team environment, using project management methodologies and frameworks to plan out and deliver an outcome.", ["img/data-recorder"])
    );

    projectSearch.projects.push(
        new Project("Realm Render", "realmRender", "Realm Render is a Dungeon's and Dragon map generator that is made with React."+
        " This was a student led, group project would require us to plan our project entirely over the course of 12 weeks." +
        " This project has taught me to self learn. Many of the tools in this project I would research and discover"+
        " the processes and tools."+
        " Currently this project is ongoing, so feel free to ask me questions about it.", ["img/realm-render"])
    );
    initProjectController(); // Call the function to initialize event listeners
    //generateProjectCarousel();
}
  

function bindEvents() {
    // Remove existing event listeners
    //document.querySelector("#nightCalc").removeEventListener("click", handleProjectClick);
    //document.querySelector("#chapsChallenge").removeEventListener("click", handleProjectClick);
  
    // Bind updated event listeners
    document.querySelector("#nightCalc").addEventListener("click", handleProjectClick);
    //document.querySelector(".card").forEach(item => {item.addEventListener("click", handleProjectClick);})
    document.querySelector("#chapsChallenge").addEventListener("click", handleProjectClick);
    document.querySelector("#neuralNetwork").addEventListener("click", handleProjectClick);
    document.querySelector("#colourSwitcher").addEventListener("click", handleProjectClick);
    document.querySelector("#realmRender").addEventListener("click", handleProjectClick);
    document.querySelector("#website").addEventListener("click", handleProjectClick);
    document.querySelector("#dataRecorder").addEventListener("click", handleProjectClick);
}

/*
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
}*/

function handleProjectClick(event) {
    var target = event.target;
    if(event.target.classList.contains("projectTitle")){
        target = event.target.parentElement;
    }
    
    var projectKey = target.id;
    var project = projectSearch.searchProject(projectKey)[0];
    console.log("project " + project);
    console.log("project key " + projectKey);
    projectSearch.projects.forEach(p => {p.unSelect();});
    document.querySelectorAll(".selected").forEach(item => {item.classList.remove("selected");});
    target.classList.add("selected");
    document.getElementById("projectName").innerText = project.title;
    document.getElementById("projectDescription").innerHTML = project.desc;
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
