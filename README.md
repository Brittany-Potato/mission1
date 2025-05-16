# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Mission One
# ~~~~~~~~~~~
Mission:

Create a prootype solution in a cloudbase application to identify the types of cehicles based on images users upload.

Setup steps taken:
1. Created a new folder and made a react app in it called 'mission 1'
    npm create vite@latest
2. Clearing all unnecessary code from the appropriate files.
3. Installed React-router-dom
    npm i react-router-dom
4. Used links from the Turners website to make the Navbar links functional.


To-Do list:
1. Frontend: Interface that allows users to upload photos of their vehicle
2. Backend/API: Recieves the images and send them to an AI model for prediction
3. AI Model: Custom vision model hosted through Azure:
    Chat GPT proved to be a valuble resource leading me through the steps to making my vehicle classification model.
    First I created 3 tags including:
    1. Sedan 121 images
    2. SUV 121 images
    3. Truck 121 images
4. Cloud storage for storing the images
5. Logging/Monitoring: Tracks useage and model performance