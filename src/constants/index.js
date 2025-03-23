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
  git,
  figma,
  docker,
  gcp,
  c_sharp,
  xd,
  after_effects,
  premiere_pro,
  photoshop,
  donet_core,
  mysql,
  angular,
  azure,
  laravel_portfolio,
  vendron_cloud,
  vendron_go,
  threejs,
  flutter,
  silkron,
  alliance_healthcare_group,
  vendron_op,
  laravel,
  swift,
  icare_portal,
  icare_mobile
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
    id: "projects",
    title: "Projects",
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
    stack: [
      {
        name: "Angular",
        icon: angular,
      },
      {
        name: "Laravel",
        icon: laravel,
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
        name: "Three JS",
        icon: threejs,
      },
    ]
  },
  {
    title: "Mobile App Developer",
    icon: flutter,
    stack: [
      {
        name: "Flutter",
        icon: flutter,
      },
      {
        name: "Swift",
        icon: swift,
      },
    ]
  },
  {
    title: "Backend Developer",
    icon: backend,
    stack: [
      {
        name: "C#",
        icon: c_sharp,
      },
      {
        name: ".NET Core",
        icon: donet_core,
      },
      {
        name: "MySQL",
        icon: mysql,
      },

    ]
  },
];

const technologies = [
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Adobe XD",
    icon: xd,
  },
  {
    name: "Adobe After Effects",
    icon: after_effects,
  },
  {
    name: "Adobe Premiere Pro",
    icon: premiere_pro,
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Google Cloud Platform",
    icon: gcp,
  },
];

const experiences = [
  {
    title: "Industrial Trainee",
    company_name: "Silkron Technologies Sdn Bhd",
    icon: silkron,
    iconBg: "#383E56",
    date: "Jan 2021 - June 2021 (6 months)",
    points: [
      "Design, develop and maintain web-based application with MySQL, JS and Yii2 PHP Framework",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Silkron Technologies Sdn Bhd",
    icon: silkron,
    iconBg: "#383E56",
    date: "June 2021 - Jan 2023 (1 year 7 months)",
    points: [
      "Develop, maintain and deploy WeChat Mini Program.",
      "Train AI models using YOLOv5 object detection algorithm on Google Cloud Platform and image labeling with PaddleSeg.",
      "Developed and integrated RESTful APIs for WeChat Mini Programs and mobile applications.",
      "Designed, developed, and maintained mobile applications using the Flutter framework.",
      "Managed codebase version control using Git and SVN.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Silkron Technologies Sdn Bhd",
    icon: silkron,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2024 (1 year)",
    points: [
      "Lead and manage team of 4 (Domestic & overseas) by providing mentorship and guidance.",
      "Develop and maintain various custom white label mobile application.",
      "CI/CD with GitHub action.",
      "Publish and maintain mobile application on Google play and Apple app store.",
      "Assign task and evaluate man-days for team.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Alliance Healthcare Group",
    icon: alliance_healthcare_group,
    iconBg: "#ffffff",
    date: "Jan 2024 - Present (1 year 4 months)",
    points: [
      "Develop and maintain APIs for mobile apps and web portals using the .NET Core framework with CQRS + Mediator pattern.",
      "Build and enhance various white label web applications with Angular and TypeScript",
      "Develop and maintain various white label mobile applications using Flutter"
    ],
  },
];

const projects = [
  {
    name: "Laravel Portfolio",
    description:
      "Personal portfolio built with Laravel and Tailwind, containerized with Docker, and hosted on GCP.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "GCP",
        color: "pink-text-gradient",
      },
    ],
    image: laravel_portfolio,
    source_code_link: "https://github.com/chihong33/port-folio-laravel",
    app_store_link: "",
    play_store_link: "",
    website_link: "",
  },
  {
    name: "Smart Vending Cloud - Vendron Cloud",
    description:
      "Vendron Cloud is a cloud-based smart vending management service that can be accessed from anywhere on any compatible device including PC, smartphones, tablets, and so on to remotely manage and monitor your clusters of smart vending machines, smart lockers, smart coffee vending machines, smart vending fridges and self-service food ordering payment kiosks in disperse locations.",
    tags: [
      {
        name: "Yii2",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: vendron_cloud,
    source_code_link: "",
    app_store_link: "",
    play_store_link: "",
    website_link: "https://vendron.com/v2/site/login",
  },
  {
    name: "Vendron Go",
    description:
      "Vendron GO is a mobile application that allows users to remotely view products inside vending machines, make purchases, and reserve products in vending machines. It also supports multiple payment methods to satisfy various end users from different country.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: vendron_go,
    source_code_link: "",
    app_store_link: "https://apps.apple.com/us/app/vendron-go/id1220755182",
    play_store_link: "https://play.google.com/store/apps/details?id=com.silkron.vendrongo&pcampaignid=web_share",
    website_link: "",
  },
  {
    name: "Vendron OP",
    description:
      "Vendron OP is a mobile application designed for operators to efficiently manage their machines remotely anywhere, anytime. Its core features include viewing sales reports, monitoring machine status, remote machine management, and restocking capabilities.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: vendron_op,
    source_code_link: "",
    app_store_link: "https://apps.apple.com/us/app/vendron-operator/id1463470727",
    play_store_link: "https://play.google.com/store/apps/details?id=com.silkron.vendronoperator&pcampaignid=web_share",
    website_link: "",
  },
  {
    name: "ICare Member Portal",
    description:
      "iCare member portal gives you quick access to enjoy your health benefits. Core features including locate nearest panel clinics through Clinic Locator, retrieve your e-Card, submit Claims , fix a Specialist Appointment, request for Letter of Guarantee.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
    ],
    image: icare_portal,
    source_code_link: "",
    app_store_link: "",
    play_store_link: "",
    website_link: "https://member.alliancehealthcare.com.sg/",
  },
  {
    name: "ICare Mobile App",
    description:
      "iCare Mobile app gives you quick access to enjoy your health benefits. Core features including locate nearest panel clinics through Clinic Locator, retrieve your e-Card, submit Claims , fix a Specialist Appointment, request for Letter of Guarantee, video-consult a doctor through HeyAlly. ",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
    ],
    image: icare_mobile,
    source_code_link: "",
    app_store_link: "https://apps.apple.com/sg/app/icare-2-0/id6670236051",
    play_store_link: "https://play.google.com/store/apps/details?id=com.ahg.heyally.main&pcampaignid=web_share",
    website_link: "",
  },
];

export { services, technologies, experiences, projects };
