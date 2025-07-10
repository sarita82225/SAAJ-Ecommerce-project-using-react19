# SAAJ-Ecommerce-project-using-react19
I am creating small Ecommerce project with all functionalities and payment using react19, tailwind, node js and mongoDB (MERN)
###

 Create a mern project  (steps to follow)
1. create a project using npx create-react-app my-project
2. cd my-project
3. npm install -D tailwindcss@3
4. npx tailwindcss init
5. Add the paths to all of your template files in your tailwind.config.js file.
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
##
6. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;

7. Run your build process with npm run start.
