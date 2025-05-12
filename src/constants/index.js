import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/kertwangi.png";  
 // Replace with your actual image paths
import studentAssessmentImage from "../assets/projects/studentAssessmentImage.png";
import warehouseTelesandiImage from "../assets/projects/warehouseTelesandiImage.png";
import warehouseTasmImage from "../assets/projects/warehouseTasmImage.png";

export const HERO_CONTENT = `I am a Software Engineer with expertise in building robust and scalable web applications. Over the past year, I have worked with a variety of technologies, including React for the front-end and Node.js, Golang, Laravel, MySQL, PostgreSQL, and MongoDB for the back-end. I am enthusiastic about using my skills to create high-quality applications.`;

export const ABOUT_TEXT = `I am a highly motivated and aspiring software engineer with a strong foundation in backend development. My passion for building robust and scalable applications led me to pursue a career in this field. My backend experience, gained through a valuable at internship centers around technologies like Node.js, Golang, Laravel, MySQL, PostgreSQL, and MongoDB. During this internship, I was responsible for developing and maintaining APIs, which solidified my understanding of server-side logic, database management, and API design principles. I am eager to expand my skillset into full-stack development, am a quick learner, and thrive in collaborative environments. Outside of coding, I enjoy exploring new technologies and working on personal projects.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Present",
    role: "Backend Engginer",
    company: "Dattabot",
    type: "Internship",
    location: "Indonesia (Remote)",
    description: [
      "Developed and maintained APIs for their 'Desa Raya' web product.", 
      // Anda bisa menambahkan detail lain jika ada, misalnya:
      "Implemented API endpoints for user authentication, product management, and order processing.",
      "Improved API performance by optimizing database queries and caching strategies.",
      "Collaborated with frontend developers to ensure seamless integration of APIs."
    ],
    technologies: ["Node.js", "MariaDB", "TypeScript", "REST APIs"]
  },
  {
    year: "February 2024 - Jul 2024", // Tetap menggunakan format "Start - End"
    role: "Backend Engineer",
    company: "Ruangguru",
    type: "Independent Study",
    location: "Jakarta, ID",
    description: [
      "Integrated third-party APIs and strengthened security through JWT authentication, enhancing user data security by 40%.",
      "Designed REST APIs using the Gin framework to provide efficient backend services, reducing API response time by 30%.",
      "Refined and optimized backend business logic, boosting application performance by 35%.",
      "Increased unit testing efficiency by adding automated tests, reducing bugs by 25%.",
    ],
    technologies: ["Go (Gin Framework)", "JWT", "REST APIs", "Unit Testing"],
  },
  {
    year: "June 2020 - July 2020",
    role: "Backend Engineer",
    company: "SYNTAX COMUNITY",
    type: "Volunteer",
    location: "Bekasi, ID",
    description: [
      "Developed the backend for a student admission site using Laravel, used by over 500 prospective students.",
      "Collaborated with the frontend team to ensure seamless integration, accelerating project completion time by 20%.",
      "Secured the site by implementing best security practices and updating security measures as needed, reducing security incidents by 50%.",
      "Addressed bugs and enhanced features based on user feedback, decreasing bug response time by 30%.",
    ],
    technologies: ["Laravel", "PHP", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "desakertawangi.com",
    image: project5,
    description:
      "DesaKertawangi.com is a comprehensive village website designed to enhance community engagement and streamline administrative processes. Built with Laravel, it offers features such as news updates, event management, and a directory of village services. The platform empowers residents with easy access to information and fosters transparency in local governance.",
    technologies: ["Laravel", "PHP", "MySQL", "PhpMyAdmin","Tailwind CSS"],
    timePeriod: "Januari 2025 - Februari 2025",
  },
  {
    title: "Sales System Application",
    image: project1,
    description:
      "The Sales System Application, powered by Laravel, streamlines sales management with tools for Inventory, orders, CRM, and analytics. Leveraging Laravel's robust features and MVC architecture.",
    technologies: ["Laravel", "PHP", "MySQL", "PhpMyAdmin"],
    timePeriod: "Sep 2023 - Dec 2023",
  },
  {
    title: "Student Assessment Application",
    image: studentAssessmentImage,
    description:
      "In a Laravel-powered Student Assessment system, educators easily manage assignments and grade students while ensuring data security. The intuitive interface fosters clear communication and timely feedback, creating a collaborative learning environment for academic success.",
    technologies: ["Laravel", "PHP", "MySQL", "PhpMyAdmin", "HTML5", "CSS"],
    timePeriod: "Sep 2023 - Dec 2023",
  },
  {
    title: "Warehouse Application",
    image: warehouseTelesandiImage,
    description:
      "The WareHouse Application, built on the Laravel framework, revolutionizes warehouse management with its comprehensive suite of features. Leveraging Laravel's robust MVC architecture, it provides tools for inventory tracking, order fulfillment, and stock management. With its intuitive interface, real-time updates, and stringent security measures, it streamlines operations, boosts productivity, and ensures efficient inventory control.",
    technologies: ["Laravel"],
    timePeriod: "Nov 2020 - Dec 2020",
    associatedWith: "SMK Telekomunikasi Telesandi",
  },
  {
    title: "Warehouse Application PT TASM",
    image: warehouseTasmImage,
    description:
      "The Warehouse Application, crafted with PHP native, is a versatile tool for efficient warehouse management. It streamlines operations with features for inventory tracking, order processing, stock management and logistics coordination. With a lightweight design and intuitive interface, it empowers businesses to enhance productivity and maintain seamless control over warehouse operations.",
    technologies: ["PHP", "MySQL", "PhpMyAdmin", "PHP Applications", "MySQLi"],
    timePeriod: "Aug 2020 - Sep 2020",
    associatedWith: "TEKUN ASAS SUMBER MAKMUR. PT",
  },
];

export const CONTACT = {
  address: "Bekasi, West Java",
 
  email: "muhammadzaidaan16@gmail.com",
};
