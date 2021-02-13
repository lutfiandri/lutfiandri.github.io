const card = ({ title, img, date, tools, link }) => `
    <a class="box" href="${link}" target="_blank">
        <div class="title">${title}</div>
        <img class="img" src="./img/portfolios/${img}.png" />
        <div class="date">${date}</div>
        <div class="tools">
            ${htmlTools(tools)}
        </div>
    </a>
`;

const htmlTools = (tools) => {
    let template = "";
    tools.forEach((tool) => {
        template += `<img src="./icons/${tool}.svg" />`;
    });
    return template;
};

const projects = [
    {
        title: "Countdown",
        img: "countdown",
        date: "June 2020",
        tools: ["javascript", "tailwind"],
        link: "https://lutfiandri.github.io/countdown",
    },
    {
        title: "Pengoreksi Pilihan Ganda",
        img: "pengoreksi-pilihan-ganda",
        date: "June 2020",
        tools: ["vue", "tailwind"],
        link: "https://lutfiandri-pengoreksi-pilihan-ganda.netlify.app",
    },
    {
        title: "Atom",
        img: "atom",
        date: "July 2020",
        tools: ["vue", "vuetify"],
        link: "https://lutfiandri.github.io/atom",
    },
    {
        title: "Coronavirus Info",
        img: "covidinfo",
        date: "August 2020",
        tools: ["javascript", "tailwind"],
        link: "https://lutfiandri.github.io/covidinfo",
    },
];

const root = document.querySelector(".portfolio .boxes");
projects.forEach((project) => {
    root.innerHTML += card(project);
});
