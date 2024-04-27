import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  zod,
  thirdweb,
  vox,
  canvas,
  murcielaco,
  shopi,
  katana,
  bank,
  todo,
  avicii,
  batatabit,
  calculator,
  vates,
  sql,
  python,
  fastapi,
  mazzoccone,
  beginning,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Front-End",
    icon: mobile,
  },
  {
    title: "Back-End",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const experiences = [
  {
    title: "My beginnings",
    company_name: "Learning Path",
    icon: beginning,
    iconBg: "#f5f5f5",
    date: "2021 - 2023",
    points: [
      "I started my journey as a self-taught developer, learning the basics of web development.",
      "I worked on various projects to hone my skills and gain experience in the field.",
      "I focused on front-end development, mastering React.js and creating responsive user interfaces.",
      "I gained experience working with modern technologies like TypeScript, Tailwind CSS, Material UI, etc.",
      "I also delved into back-end development, learning Node.js and SQL databases to create full-stack applications.",
      "I created a variety of projects, from social networks to e-commerce websites, even blockchain applications opening up new horizons in the world of web development.",
    ],
  },
  {
    title: "Front-Back End Developer",
    company_name: "Vates",
    icon: vates,
    iconBg: "#f5f5f5",
    date: "Nov. 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js.",
      "Back-end development and implementation using FastAPI.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-Back End Developer",
    company_name: "Mazzoccone Lawyers",
    icon: mazzoccone,
    iconBg: "#f5f5f5",
    date: "Jan. 2023 - Present",
    points: [
      "Creation and maintenance of a cause management system.",
      "Front-end development using React.js and Material UI.",
      "Back-end development using Node.js and SQL databases.",
      "From the initial design phase to the implementation and ongoing maintenance.",
    ],
  },
];

const projects = [
  {
    url: "vox",
    name: "VOX",
    description:
      "VOX is a modern full-stack social network developed with Next.js, featuring interactive functionalities like Threads. Users can create accounts, post updates, engage with others, and build communities.",
    detailed_description:
      "VOX is a modern full-stack social network developed with Next.js, utilizing an interactive system similar to Threads. In VOX, users can create an account, post updates, reply to others, and form communities by inviting others to join. The technologies used in this project include:\n\n- Next.js 13.4 with Server-Side Rendering: Version 13.4 takes advantage of server-side rendering for optimal performance and fast page loading, ensuring a smooth user experience.\n\n- MongoDB: This is the database used, with schemas and multiple data population utilized.\n\n- TailwindCSS: Employed in VOX to create an elegant and modern user interface.\n\n- Clerk for Authentication: Authentication platform that simplifies the implementation of secure login and registration processes. In this project, Clerk is integrated to ensure a secure and personalized authentication process.\n\n- File Uploads with UploadThing: It allows users to upload files, enriching the user interaction and the functionality of the social network.\n\n- Middleware, API Actions, and Authorization: Custom middleware and API actions are implemented to control user requests and ensure proper authorization. This ensures that users can only access functions for which they have permission.\n\n- Data Validation with Zod: Library used to validate input data and ensure that it is correct and secure before processing it in the application. This is crucial for maintaining data integrity and user security.\n\n To sum up, VOX leverages modern and advanced technologies to deliver high-quality web solutions with exceptional performance. You are welcome to log in and start interacting with other users.",
    technologies: [reactjs, tailwind, mongodb, typescript, zod],
    image: vox,
    project_link: "https://vox-frang.vercel.app/",
    source_code_link: "https://github.com/thefrang/VOX",
  },
  {
    url: "nft-drop",
    name: "NFT Drop",
    description:
      "Project carried out with the Murcielaco team, aimed at deploying a smart contract in the Polygon network (MATIC) through its testnet 'Mumbai'. This allowed NFT sales and money transactions.",
    detailed_description:
      "This is a test project that was carried out with the Murcielaco team. It involved deploying a smart contract on the Polygon network (MATIC) using their testnet called 'Mumbai', thus enabling the sale and receipt of money by selling NFTs created by the brand. The objectives were: \n\n- Connect a wallet. \n\n- Buy the NFT.\n\n- Display purchased NFTs in our profile.\n\n - Be able to transfer them to the wallet. \n\nFor this project, I utilized a framework provided by ThirdWeb that works in conjunction with React. It was a success and one of my early experiences in the world of web3 and smart contracts.",
    technologies: [reactjs, thirdweb, tailwind, javascript],
    image: murcielaco,
    project_link: "https://murcielaco-polygon.vercel.app/",
    source_code_link: "https://github.com/thefrang/polygon-test",
  },
  {
    url: "shopi",
    name: "Shopi",
    description:
      "This project showcases multiple products from a public API, featuring functionalities like sign-up, login, filtering by titles, categories, and both simultaneously, adding to the cart, checkout, and order summary viewing, along with detailed product information.",
    detailed_description:
      "This is a test project that was carried out with the Murcielaco team. It involved deploying a smart contract on the Polygon network (MATIC) using their testnet called 'Mumbai', thus enabling the sale and receipt of money by selling NFTs created by the brand. The objectives were: \n\n- Connect a wallet. \n\n- Buy the NFT.\n\n- Display purchased NFTs in our profile.\n\n - Be able to transfer them to the wallet. \n\nFor this project, I utilized a framework provided by ThirdWeb that works in conjunction with React. It was a success and one of my early experiences in the world of web3 and smart contracts.",
    technologies: [reactjs, thirdweb, tailwind, javascript],
    image: shopi,
    project_link: "https://react-ecommerce-alpha-ashen.vercel.app/",
    source_code_link: "https://github.com/thefrang/React-Ecommerce",
  },
  {
    url: "katana-fight",
    name: "Katana Fight",
    description:
      "My inaugural game project was an invaluable learning experience in JavaScript, focusing on logic, classes, methods, and event listeners. Inspired by Chris Courses on YouTube, it's an interactive HTML5 canvas-based fighting game.",
    detailed_description:
      "This was the first game I created, and it helped me a lot in my learning of logic with JavaScript, using classes, methods, and listeners to bring the game to life. I originally took the idea for this game from a YouTube channel called Chris Courses, and I really enjoyed making it. \nIn general, the code creates an interactive animation of a fighting game on an HTML5 canvas, where the player and the enemy can move and perform actions like attacks. The collision detection logic and health management add elements of gameplay and competition. This is a player vs player game and only for desktop devices.\n\n Player1 controls:\n W: Jump, D: Move forward, A: Move Backward, Space: Attack. \n\n Player2 controls:\n 🡡: Jump, 🡢: Move forward, 🡠: Move Backward, 🡣: Attack",
    technologies: [javascript, html, canvas],
    image: katana,
    project_link: "https://thefrang.github.io/Fighting-Game/",
    source_code_link: "https://github.com/thefrang/Fighting-Game",
  },
  {
    url: "bank-app",
    name: "Bank App",
    description:
      "This project involved crafting a landing page for a fictional bank, using free and copyright-free designs for skill demonstration and learning purposes.",
    detailed_description:
      "In this practice, I decided to work on creating a landing page for a fictional bank. The designs used were taken from free and copyright-free sources, and were solely used for learning and showcasing my skills.\n\nKey features:\n\n- Modern and appealing design, highlighting a user-friendly and functional interface.\n\n- Implementation of reusable components and organized folder structure.\n\n- Integration of smooth animations to enhance the user experience.\n\n- Utilization of technologies like React and Tailwind CSS for efficient development and responsive design.",
    technologies: [reactjs, javascript, tailwind],
    image: bank,
    project_link: "https://thefrang.github.io/bank_app/",
    source_code_link:
      "https://github.com/thefrang/bank_app/tree/Files/Desktop/React.js/Bank_Modern_App",
  },
  {
    url: "todo-react",
    name: "To-Do",
    description:
      "I created my inaugural 'To-Do List' app using React, augmenting the user interface with select components from the Material-UI library. Users can easily add, edit, and remove tasks from their to-do lists.",
    detailed_description:
      "With the help of Platzi, I made my very first 'To-Do List' application using the power of React and enhancing the user interface with select components from the Material-UI library. Users can effortlessly add, edit, and remove tasks from their to-do list, enhancing their productivity and organization.\n This project allowed me to delve into the world of web development and gain hands-on experience in building interactive and dynamic user interfaces.",
    technologies: [reactjs, javascript],
    image: todo,
    project_link: "https://thefrang.github.io/Todo-React.js/",
    source_code_link: "https://github.com/thefrang/Todo-React.js",
  },
  {
    url: "avicii",
    name: "Avicii",
    description:
      "This project involves data retrieval from the YouTube API using Fetch and subsequently generating HTML content based on the acquired data. It focuses on Avicii, one of my favorite artists. While the page is not responsive, I am pleased with the outcomes and its overall aesthetics.",
    detailed_description:
      "This project involves data retrieval from the YouTube API using Fetch and subsequently generating HTML content based on the acquired data. It focuses on Avicii, one of my favorite artists. While the page is not responsive, I am pleased with the outcomes and its overall aesthetics.",
    technologies: [javascript, html, tailwind],
    image: avicii,
    project_link: "https://thefrang.github.io/Async-Avicii/",
    source_code_link: "https://github.com/thefrang/Async-Avicii/",
  },
  {
    url: "batatabit",
    name: "Batatabit",
    description:
      "Cryptocurrency transaction webpage using only HTML and CSS. The page is designed to be fully responsive and user-friendly. It provides users with a comprehensible and intuitive interface.",
    detailed_description:
      "This project entails the development of a cryptocurrency transaction webpage, exclusively utilizing HTML and CSS. The primary objective is to craft a fully responsive and user-centric interface. The design prioritizes clarity and intuitiveness, ensuring that users can easily navigate and execute cryptocurrency transactions with confidence. Through meticulous attention to detail and thoughtful design choices, this webpage aims to offer a seamless and enjoyable user experience for individuals engaging in cryptocurrency transactions.",
    technologies: [html, css],
    image: batatabit,
    project_link: "https://thefrang.github.io/Batatabit-Mobile_First/",
    source_code_link: "https://github.com/thefrang/Batatabit-Mobile_First",
  },
  {
    url: "calculator",
    name: "Calculator",
    description:
      "This is my second calculator project, and I've made several improvements since the first one. I've focused on making the interface user-friendly, so anyone can use it without any trouble. It still does all the basic calculator stuff, but it looks much better.",
    detailed_description:
      "This is my second calculator project, and I've made several improvements since the first one. This time, I used only HTML, CSS, and JavaScript to create it. One cool feature is the dark mode, which makes it easier on the eyes, especially in low light. I've also focused on making the interface user-friendly, so anyone can use it without any trouble. It still does all the basic calculator stuff, but it looks much better.",
    technologies: [javascript, html, css],
    image: calculator,
    project_link: "https://thefrang.github.io/Calculator-2.0/",
    source_code_link: "https://github.com/thefrang/Calculator-2.0",
  },
];

export { services, technologies, projects, experiences };
