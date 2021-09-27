const data = {
  name: "Hicham Askour",
  speciality: "Front-end web developer",
  photo: "/profile-img.jpeg",
  about:
    "Jeun rigoureux et dynamique, désireux de mettre en application mon apprentissage théorique. Je suis un développeur Front End avec une connaissance approfondie de JavaScript. Je travaille avec des technologies telles que ES6, Angular, React, VuJs, TypeScript.",
  contact: [
    {
      name: "Telephone",
      value: "+212 0622682892",
    },
    {
      name: "Email",
      value: "hishamaskour@gmail.com",
    },
    {
      name: "Linkedin",
      value: "www.linkedin.com/in/hichamaskour/",
    },
  ],
  experience: [
    {
      title: "Développeur Front-end",
      company: "1minscript",
      from: "Avril 2019",
      to: "Présent",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    },
    {
      title: "Développeur Front-end",
      company: "bahbref",
      from: "Juillet 2018",
      to: "Janvier 2019",
      description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures",
    },
  ],
  languages: [
    {
      name: "Français",
      level: 1,
    },
    {
      name: "Anglais",
      level: 2,
    },
  ],
  education: [
    {
      title: "Développement informatique (formation bac+2)",
      institut: "École Moulik Group Marrakech",
      from: "2017",
      to: "2019",
      descreption: "",
    },
    {
      title: "Baccalauréat",
      institut: "Lycée Ibn Al-Haytam Imintanout",
      from: "2015",
      to: "2016",
      descreption: "",
    },
  ],
  skills: [
    {
      name: "Javascript ES6+",
      level: 1,
    },
    {
      name: "Angular",
      level: 1,
    },
    {
      name: "React",
      level: 1,
    },
    {
      name: "React native",
      level: 1,
    },
    {
      name: "Bootstrap 4",
      level: 1,
    },
    {
      name: "ionic",
      level: 1,
    },
    {
      name: "css3",
      level: 1,
    },
    {
      name: "Vuejs",
      level: 1,
    },
  ],
  personalSkills: [
    {
      name: "Esprit créatif",
      level: 1,
    },
    {
      name: "Fiable et professionnel",
      level: 1,
    },
    {
      name: "Organisé",
      level: 1,
    },
    {
      name: "Gestion du temps",
      level: 1,
    },
    {
      name: "Esprit d'équipe",
      level: 1,
    },
    {
      name: "Apprenant rapide",
      level: 1,
    },
    {
      name: "Motivé",
      level: 1,
    },
  ],
};

export default (req, res) => {
  res.status(200).json(data);
};
