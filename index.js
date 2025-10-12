const skillSet = {
    skillSet: ["HTML", "CSS", "JavaScript","Git"],
    skillSetImages: ["images/html.png", "images/css.png", "images/js.png","images/github.png"],
    frameWorks: ["Tailwind CSS"],
};

const projects = {
    projectImages: ["images/profileImage.jpg",],
    projectTitles: ["Portfolio Project"],
    projectDescriptions: ["This is my portfolio project where I showcase different skills and projects I've made."],
}

const skillDiv = document.querySelector(".skillDiv");
const projectDiv = document.querySelector(".projectDiv");

for (let i = 0;i<skillSet.skillSet.length;i++){
    const templateSkill = document.querySelector(".templateSkills");
    const cloneTemplate = templateSkill.content.cloneNode(true).children[0];
    cloneTemplate.querySelector("h4").innerHTML = skillSet.skillSet[i];
    cloneTemplate.querySelector("img").src = skillSet.skillSetImages[i];

    skillDiv.append(cloneTemplate);
};

for (let j = 0;j<projects.projectImages.length;j++){
    const projectTemplate = document.querySelector(".projectTemplate");
    const cloneProject = projectTemplate.content.cloneNode(true).children[0];
    cloneProject.querySelector("h2").innerHTML = projects.projectTitles[j];
    cloneProject.querySelector("img").src = projects.projectImages[j];
    cloneProject.querySelector("h1").innerHTML = projects.projectDescriptions[j];

    projectDiv.append(cloneProject);
};

