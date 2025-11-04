// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";

// Experience Section Logo's
import lumbiniTechnologiesLogo from "./assets/company_logo/Lumbini_Technologies.jpeg";
import uptoSkillsLogo from "./assets/company_logo/UptoSkills.webp";
import whiteCloudsMediaLogo from "./assets/company_logo/WhiteCloudsMedia.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";

export const SkillsInfo = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: whiteCloudsMediaLogo,
    role: "Web and App Developer Intern",
    company: "WhiteCloudsMedia Pvt Ltd – Onsite",
    date: "Jun 2025",
    desc: [
      "Developed a cross-platform School Management App using React Native (Expo) and TypeScript, integrated with Supabase (PostgreSQL) for real-time data synchronization",
      "Implemented role-based access control for Admin, Teachers, and Students with full CRUD operations, attendance management, and secure authentication",
      "Designed and built app modules including Home, Timetable, Tasks, Notes, Exams, Events, and Student Directory with responsive UI styling using Git & GitHub for version control and Tailwind CSS",
    ],
    skills: [
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
    ],
  },
  {
    id: 1,
    img: uptoSkillsLogo,
    role: "Artificial Intelligence Intern",
    company: "UptoSkills– Remote",
    date: "Jan 2025 - Apr 2025",
    desc: [
      "Developed an AI-driven personalized learning platform that uses NLP for interactive tutoring, along with adaptive video lectures, notes, and quizzes tailored to student needs",
      "Implemented an AI chatbot with speech Recognition, enabling voice-based interactions and enhancing the learning experience",
      "Incorporated progress tracking and AI-generated certificates, providing a structured learning path and personalized achievements for users",
    ],
    skills: ["Python", "NLP", "AI", "Machine Learning"],
  },
  {
    id: 2,
    img: lumbiniTechnologiesLogo,
    role: "Web Developer Intern",
    company: "Lumbini Technologies Pvt Ltd – Remote",
    date: "Oct 2024 - Nov 2024",
    desc: [
      "Developed and deployed the official company website using HTML, CSS, Bootstrap, and JavaScript, ensuring a responsive and user-friendly design across devices",
      "Collaborated with cross-functional team to align the website's UI with branding guidelines and business objectives",
      "Enhanced website performance and navigation structure, resulting in a smooth user experience and improved accessibility",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export const education = [
  {
    id: 0,
    img: bsaLogo,
    school: "Jain University, Bangalore, Karnataka",
    date: "2022 - 2026",
    grade: "90%",
    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE).",
    degree: "B.Tech – Computer Science and Engineering",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "Narayana Junior College, Nellore, Andhra Pradesh",
    date: "2021 - 2022",
    grade: "93.8%",
    desc: "I completed my Intermediate (MPC) – Higher Secondary Education from Narayana Junior College, Nellore.",
    degree: "Intermediate( MPC ) – Higher Secondary Education",
  },
  {
    id: 2,
    img: glaLogo,
    school: "Narayana High School, Nellore, Andhra Pradesh",
    date: "2019 - 2020",
    grade: "98.5%",
    desc: "I completed my 10th Standard – Secondary Education from Narayana High School, Nellore, under the SSC board.",
    degree: "10th Standard – Secondary Education",
  },
];

export const projects = [
  {
    id: 0,
    title: "HIJBLR Church Website & Admin Panel Development",
    description: [
      "Developed the complete frontend UI and admin panel using React.js and Tailwind CSS for pages like Home, About, Sermons, Ministries, Blog, Partnership, and Connect",
      "Built a custom admin dashboard to manage sermons, events, blogs, gallery, banners, and forms, with all content stored securely in Supabase (PostgreSQL)",
      "Implemented responsive UI, seamless user experience, YouTube API integration for sermons/shorts, PDF-based sermon notes, and form handling via JotForm"
    ],
    image: githubdetLogo,
    tags: ["React", "Tailwind CSS", "Git", "GitHub", "Supabase", "PostgreSQL"],
    github: "https://github.com/abhilash-hijblr/hijblr-app",
    webapp: "https://hijblr.com/home",
  },
  {
    id: 1,
    title: "PeerUp – University Club Management System",
    description: [
      "Developed a university club management full-stack web application featuring Home, Login, Signup, Student Dashboard, Admin Dashboard, Club Listings, Club Profile, Event Listings, Event Details, Join Requests, and Notifications pages to enhance campus engagement",
      "Designed and implemented key UI components, including login/signup pages, dashboards, club/event listings, and navigation",
      "Ensured responsiveness and dynamic content rendering using state management and routing",
      "Structured and developed MongoDB schemas for users, clubs, events, and notifications with optimized queries using Mongoose",
    ],
    image: githubdetLogo,
    tags: ["Angular", "JavaScript", "HTML", "CSS", "MongoDB", "Git"],
    github:
      "https://github.com/VChaitanyaKumar/PeerUp_Student_University_Clubs",
    webapp: "#",
  },
  {
    id: 2,
    title: "Real-Time Driver Fatigue Detection to Enhance Road Safety",
    description: [
      "Developed a real-time drowsiness detection system to classify driver states - awake, drowsy, or sleeping - by analyzing facial landmarks and monitoring eye movement patterns",
      "Implemented the Eye Aspect Ratio (EAR) algorithm to track blinking frequency and eye closure duration, achieving 91% accuracy across bright, dim, and low-light environments",
      "Integrated a proactive alert mechanism to notify drivers of fatigue and validated the system on real-time video input",
      "Authored a research paper presented at AdComSys 2025, an international conference organized by the University of Engineering and Management, Kolkata, in association with Springer",
    ],
    image: csprepLogo,
    tags: ["Python", "OpenCV", "Dlib", "Computer Vision"],
    github:
      "https://github.com/VChaitanyaKumar/Real_Time_Driver_Fatigue_Detection_to_Enhance_Road_Safety",
    webapp: "#",
  },
  {
    id: 3,
    title: "Crop And Fertiliser Recommendation System Using ML",
    description: [
      "Built a smart agricultural assistant using machine learning to recommend the best crop and fertilizer based on environmental and soil conditions",
      "Utilized publicly available Kaggle datasets covering features such as NPK values, pH, humidity, temperature, moisture, and rainfall",
      "Achieved 98.48% accuracy in crop prediction using a Decision Tree Classifier and 100% accuracy in fertilizer recommendation via rule-based logic",
      "Applied data preprocessing, EDA, and visualization (Matplotlib, Seaborn) for insights and model optimization with clean notebook-based user interface",
    ],
    image: movierecLogo,
    tags: [
      "Python",
      "Machine Learning",
      "Decision Tree",
      "Matplotlib",
      "Seaborn",
    ],
    github:
      "https://github.com/VChaitanyaKumar/Crop_And_Fertiliser_Recommendation_System_Using_ML",
    webapp: "#",
  },
  {
    id: 4,
    title: "Cluster Based False Aggregate Detection System (CBFADS) in WSN",
    description: [
      "Implemented a hierarchical Wireless Sensor Network (WSN) model with energy-based dynamic cluster head selection and data aggregation to optimize network performance",
      "Developed an Intrusion Detection System (IDS) at the base station to detect and isolate false data aggregates, improving accuracy and reliability",
      "Evaluated system performance in NS2 based on Throughput, Delay, Accuracy, and Energy Efficiency",
      "Achieved superior results compared to LEACH, HEED, PEGASIS, and TEEN protocols",
    ],
    image: githubdetLogo,
    tags: ["NS2", "TCL", "Shell Scripting", "WSN", "Network Security"],
    github:
      "https://github.com/VChaitanyaKumar/Cluster-Based-False-Aggregate-Detection-System-in-Wireless-Sensor-Networks-",
    webapp: "#",
  },
  {
    id: 5,
    title: "Ocular Disease Recognition Using Deep Learning",
    description: [
      "Implemented transfer learning using the InceptionV3 model to classify retina images into multiple eye disease categories such as Cataract, Glaucoma, and Normal",
      "Performed data preprocessing and augmentation to enhance model generalization and prevent overfitting on the medical image dataset",
      "Achieved ~95% classification accuracy, demonstrating effective detection of eye diseases through deep learning techniques",
    ],
    image: csprepLogo,
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "InceptionV3"],
    github:
      "https://github.com/VChaitanyaKumar/Ocular_Disease_Recoginition_Using_DeepLearning",
    webapp: "#",
  },
  {
    id: 6,
    title: "Intrusion Detection using Multi-Classification Techniques",
    description: [
      "Implemented and compared multiple machine learning classifiers (Decision Tree, Random Forest, XGBoost, LightGBM, SVM, etc.) to detect network intrusions using the Kyoto_2015_May_day14 dataset",
      "Performed data preprocessing including handling missing values, label encoding, and feature standardization to enhance model performance and accuracy",
      "Achieved up to 100% accuracy across top-performing models and conducted detailed comparative analysis using confusion matrices and classification reports",
    ],
    image: movierecLogo,
    tags: ["Python", "XGBoost", "LightGBM", "Scikit-learn", "Network Security"],
    github:
      "https://github.com/VChaitanyaKumar/Kyoto2015_May14_MultiClassifier_ID_Using_MLS",
    webapp: "#",
  },
  {
    id: 7,
    title: "Forest Fire Detection using Deep Learning",
    description: [
      "Built and trained a Convolutional Neural Network to classify images into 'fire' and 'no fire' classes using image preprocessing, augmentation (ImageDataGenerator), and binary cross-entropy loss with the Adam optimizer",
      "Collected a wildfire dataset (Kaggle), resized images to 150×150, normalized pixels, created train/validation/test splits, and trained the model while monitoring accuracy and loss curves",
      "Evaluated model performance using accuracy and loss plots, confusion matrix and sample predictions with extensions for real-time deployment",
    ],
    image: githubdetLogo,
    tags: ["Python", "TensorFlow", "Keras", "CNN", "Image Classification"],
    github:
      "https://github.com/VChaitanyaKumar/Forest_Fire_Detection_Using_Deep_Learning",
    webapp: "#",
  },
];
