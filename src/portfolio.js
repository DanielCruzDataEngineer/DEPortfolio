/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Daniel Cruz",
  title: "Hi , guys !I'm Daniel",
  subTitle: emoji(
    "I have extensive experience designing and building efficient and scalable data pipelines using technologies such as Apache Spark, Hadoop and AWS services. I specialize in turning raw data into meaningful insights that drive better decision making through ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) processes." 
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DanielCruzDataEngineer",
  linkedin: "https://www.linkedin.com/in/danielcruzbianalytics/",
  gmail: "danielcruz.alu.lmb@gmail.com",
  medium: "https://medium.com/@danielcruz.alu.lmb",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Dedicated data engineer looking to strengthen every hard and soft skill needed to become better.  ",
  skills: [
    emoji(
      "⚡ Develop highly interactive and fast data pipelines with elt and etl techniques in  the cloud "
    ),
    emoji("⚡ Progressive Task automation with python"),
    emoji(
      "⚡ Integration of third party ELT services such as Postgres / Teradata / AWS / Digital Ocean(Infra)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
   
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-kickstarter"
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Hive Engine",
      fontAwesomeClassname: "fab fa-hive"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Uniamerica Descomplica",
      logo: require("./assets/images/uniamericaLogo.png"),
      subHeader: "Analise e Desenvolvimento de Sistemas",
      duration: "Abril 2022 - Agosto 2024",
      desc: "",
      descBullets: [
      
      ]
    }
  ]
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "Power of Data",
      companylogo: require("./assets/images/powerofdataLogo.jpg"),
      date: "June 2022 – Present",
      desc: "I work with different data engineering tools, always looking for high work rate proactivity, optimizing costs and data availability.      ",
      descBullets: [
        "Python",
        "SQL",
        "Automações",
        "ELT",
        "Transcription of variable books",
        "Leadership Tasks",
        "Data Democratization",
        "Optimizing Data Pipelines"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ELT in Big Data", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Pipelines",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud computing",
      progressPercentage: "100%"
    },
    {
      Stack: "Data processing ",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO IMPROVE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/itauLogo.png"),
      projectName: "ITAU IARA-LOOM",
      projectDesc: "A python lib created by Itau bank, that I help to use with data solutions and pipelines automations.",
      footerLink: [
        {
          name: "",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Zorro API",
      projectDesc: "API that I improve some features with cryptos data , webscrapping automation and Streamlit and GCP features. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://appengine-eklgvfh7yq-rj.a.run.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+55 8599419-9015",
  email_address: "danielcruz.alu.lmb@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  workExperiences,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
