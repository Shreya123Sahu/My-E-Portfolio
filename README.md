**E-Portfolio Project**
This project is an E-Portfolio built using EJS templating, CSS, JavaScript, and Express.js for the backend. It showcases my skills, projects, and information as a software developer.

**Table of Contents**
Features
Installation
Usage
Folder Structure
Dependencies

**Features**
Dynamic Routing: Implemented using Express.js to handle routes for home, about, projects pages.
Templating: Utilizes EJS (Embedded JavaScript) for rendering HTML templates.
Responsive Design: Designed with CSS for responsiveness across different devices.
Project Showcase: Displays projects with details on a dedicated page.
Static Assets: Serves static CSS and JavaScript files using Express middleware.


**Navigate through pages:**

Home: Visit http://localhost:8080/home to see the home page.
About: Visit http://localhost:8080/about to see the about page.
Projects: Visit http://localhost:8080/projects to see the projects page.
Explore the E-Portfolio:

Customize the content and design in portfolio/home.ejs, portfolio/about.ejs, and portfolio/projects.ejs according to your preferences.

**Folder Structure
graphql
Copy code**
e-portfolio/
│
├── app.js            # Express server setup
├── package.json      # NPM dependencies and scripts
├── public/           # Static assets (CSS, JS)
│   └── styles.css    # Stylesheet
│   └── script.js     # JavaScript file
└── views/            # EJS templates
    ├── portfolio/
    │   ├── home.ejs      # Home page template
    │   ├── about.ejs     # About page template
    │   ├── projects.ejs  # Projects page template
    │   └── error.ejs     # Error page template
    └── includes/
        ├── head.ejs      # Common head section for templates
        ├── nav.ejs       # Navigation bar template
        └── footer.ejs    # Footer template
**Dependencies**
Express: Fast, unopinionated, minimalist web framework for Node.js.
EJS: Embedded JavaScript templating.
Other npm packages: Any other npm packages you've installed for specific functionalities.

Thanks for visiting :)
