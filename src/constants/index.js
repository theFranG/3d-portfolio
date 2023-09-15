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
    figma,
    docker,
    zod,
    thirdweb,
    vox,
    murcielaco,
    shopi

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const projects = [
    {
      url: "vox",
      name: "VOX",
      description:
        "VOX is a modern full-stack social network developed with Next.js, featuring interactive functionalities like Threads. Users can create accounts, post updates, engage with others, and build communities.",
      detailed_description:"VOX is a modern full-stack social network developed with Next.js, utilizing an interactive system similar to Threads. In VOX, users can create an account, post updates, reply to others, and form communities by inviting others to join. The technologies used in this project include:\n\n- Next.js 13.4 with Server-Side Rendering: Version 13.4 takes advantage of server-side rendering for optimal performance and fast page loading, ensuring a smooth user experience.\n\n- MongoDB: This is the database used, with schemas and multiple data population utilized.\n\n- TailwindCSS: Employed in VOX to create an elegant and modern user interface.\n\n- Clerk for Authentication: Authentication platform that simplifies the implementation of secure login and registration processes. In this project, Clerk is integrated to ensure a secure and personalized authentication process.\n\n- File Uploads with UploadThing: It allows users to upload files, enriching the user interaction and the functionality of the social network.\n\n- Middleware, API Actions, and Authorization: Custom middleware and API actions are implemented to control user requests and ensure proper authorization. This ensures that users can only access functions for which they have permission.\n\n- Data Validation with Zod: Library used to validate input data and ensure that it is correct and secure before processing it in the application. This is crucial for maintaining data integrity and user security.\n\n To sum up, VOX leverages modern and advanced technologies to deliver high-quality web solutions with exceptional performance. You are welcome to log in and start interacting with other users.",  
      technologies:[
        reactjs,
        tailwind,
        mongodb,
        typescript,
        zod
      ],
      image: vox,
      project_link:'https://vox-frang.vercel.app/',
      source_code_link: "https://github.com/Francogomez23800/VOX",
    },
    {
      url: "nft-drop",
      name: "NFT Drop",
      description:
        "Project carried out with the Murcielaco team, aimed at deploying a smart contract in the Polygon network (MATIC) through its testnet 'Mumbai'. This allowed NFT sales and money transactions.",
      detailed_description:"This is a test project that was carried out with the Murcielaco team. It involved deploying a smart contract on the Polygon network (MATIC) using their testnet called 'Mumbai', thus enabling the sale and receipt of money by selling NFTs created by the brand. The objectives were: \n\n- Connect a wallet. \n\n- Buy the NFT.\n\n- Display purchased NFTs in our profile.\n\n - Be able to transfer them to the wallet. \n\nFor this project, I utilized a framework provided by ThirdWeb that works in conjunction with React. It was a success and one of my early experiences in the world of web3 and smart contracts.",  
      technologies:[
        reactjs,
        thirdweb,
        tailwind,
        javascript
      ],
      image: murcielaco,
      project_link:'https://murcielaco-polygon.vercel.app/',
      source_code_link: "https://github.com/Francogomez23800/polygon-test",
    },    
    {
      url: "shopi",
      name: "Shopi",
      description:
        "This project showcases multiple products from a public API, featuring functionalities like sign-up, login, filtering by titles, categories, and both simultaneously, adding to the cart, checkout, and order summary viewing, along with detailed product information.",
      detailed_description:"This is a test project that was carried out with the Murcielaco team. It involved deploying a smart contract on the Polygon network (MATIC) using their testnet called 'Mumbai', thus enabling the sale and receipt of money by selling NFTs created by the brand. The objectives were: \n\n- Connect a wallet. \n\n- Buy the NFT.\n\n- Display purchased NFTs in our profile.\n\n - Be able to transfer them to the wallet. \n\nFor this project, I utilized a framework provided by ThirdWeb that works in conjunction with React. It was a success and one of my early experiences in the world of web3 and smart contracts.",  
      technologies:[
        reactjs,
        thirdweb,
        tailwind,
        javascript
      ],
      image: shopi,
      project_link:'https://react-ecommerce-alpha-ashen.vercel.app/',
      source_code_link: "https://github.com/Francogomez23800/React-Ecommerce",
    },
  ];
  
  export { services, technologies, projects };