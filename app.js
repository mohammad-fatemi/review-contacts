const contacts = [
    {
        id: 0,
        img: "0.jpg",
        name: "emenem",
        job: "raper",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda iusto natusarchitecto, repudiandae incidunt necessitatibus obcaecati minima sint possimus quis pariatur! Similiquevoluptatibus ullam nisi cumque in officia alias"
    },
    {
        id: 1,
        img: "1.jpg",
        name: "mammad",
        job: "bikar",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda iusto natusarchitecto, repudiandae incidunt necessitatibus obcaecati minima sint possimus quis pariatur! Similiquevoluptatibus ullam nisi cumque in officia alias"
    },
    {
        id: 2,
        img: "2.png",
        name: "javad",
        job: "artist",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda iusto natusarchitecto, repudiandae incidunt necessitatibus obcaecati minima sint possimus quis pariatur! Similiquevoluptatibus ullam nisi cumque in officia alias"
    },
    {
        id: 3,
        img: "3.jpg",
        name: "ali",
        job: "bloger",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda iusto natusarchitecto, repudiandae incidunt necessitatibus obcaecati minima sint possimus quis pariatur! Similiquevoluptatibus ullam nisi cumque in officia alias"
    }
];

console.log("its ok");

const hisImage = document.getElementById("contact-img");
const hisName = document.getElementById("name");
const hisJob = document.getElementById("job");
const hisDesc = document.getElementById("hisDesc");
const reviewBtn = document.getElementById("reveiw-contact");


reviewBtn.addEventListener("click", () => {
    var randomNumber = Math.floor(Math.random() * (4 + 1));

    console.log(randomNumber);
    switch (randomNumber) {
        case i = 0:
            hisImage.setAttribute("src",contacts[0].img);
            hisName.innerHTML = contacts[0].name;
            hisJob.innerHTML = contacts[0].job;
            hisDesc.innerHTML = contacts[0].desc;
            break;

        case i = 1:
            hisImage.setAttribute("src",contacts[1].img);
            hisName.innerHTML = contacts[1].name;
            hisJob.innerHTML = contacts[1].job;
            hisDesc.innerHTML = contacts[1].desc;
            break;

        case i = 2:
            hisImage.setAttribute("src",contacts[2].img);
            hisName.innerHTML = contacts[2].name;
            hisJob.innerHTML = contacts[2].job;
            hisDesc.innerHTML = contacts[2].desc;
            break;

        case i = 3:
            hisImage.setAttribute("src",contacts[3].img);
            hisName.innerHTML = contacts[3].name;
            hisJob.innerHTML = contacts[3].job;
            hisDesc.innerHTML = contacts[3].desc;
            break;


    }
})