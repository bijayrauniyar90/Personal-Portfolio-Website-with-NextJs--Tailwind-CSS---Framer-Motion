# Personal Portfolio Website

This repository contains a fully responsive **Personal Portfolio Website** created using modern web development technologies. The website is designed to showcase projects, skills, and experience, making it an ideal portfolio for developers, designers, and freelancers.

## Overview

This project is built using the following technologies:
- **Next.js**: React-based framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for creating elegant and responsive designs.
- **Framer Motion**: Library for animations and interactions.

### Key Features
1. **Dynamic Home Page**:
   - Animated text and smooth transitions.
   - Profile section with a downloadable resume and contact button.

2. **About Section**:
   - Personal introduction with smooth scroll animations.
   - Display of skills using dynamic charts or icons.

3. **Projects Section**:
   - Featured project cards with hover effects.
   - Grid layout for additional projects.

4. **Articles Section**:
   - A list of articles or blogs, with hover effects and cover images.

5. **Dark Mode**:
   - Toggle functionality to switch between light and dark themes.

6. **Optimized for Performance**:
   - Lighthouse score of 100 for performance, accessibility, and SEO.
   - Lazy loading of images and assets.

## Project Structure

```
root
├── public/               # Static assets (images, icons, PDFs)
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Next.js pages and routes
│   ├── styles/           # Tailwind CSS and global styles
│   └── utils/            # Utility functions
├── .gitignore            # Files and folders ignored by Git
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and project metadata
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites
- **Node.js**: Install the latest LTS version from [Node.js Official Website](https://nodejs.org/).
- **Git**: Ensure Git is installed on your machine.
- A **GitHub Account** for version control and hosting.

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-nextjs.git
   cd portfolio-nextjs
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the project locally.

### Building for Production
To build the project for deployment:
```bash
npm run build
```

### Deploying
This project can be deployed to platforms like **Vercel**, **Netlify**, or **GitHub Pages**. For example, to deploy on Vercel:
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

## Using Git for Version Control

### Workflow in VS Code
1. Open the integrated terminal.
2. Check for changes:
   ```bash
   git status
   ```
3. Stage the changes:
   ```bash
   git add .
   ```
4. Commit the changes:
   ```bash
   git commit -m "Description of changes"
   ```
5. Push the changes to GitHub:
   ```bash
   git push origin main
   ```

## Customization

### Tailwind CSS Setup
1. Install Tailwind CSS:
   ```bash
   npm install tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```
2. Configure template paths:
   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: { extend: {} },
     plugins: [],
   };
   ```
3. Add directives to `styles/globals.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Framer Motion Usage
Integrate animations with Framer Motion:
```javascript
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated Content
</motion.div>
```

## Contribution Guidelines

We welcome contributions to improve this portfolio! Here's how you can help:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

### Acknowledgements
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

Feel free to explore the repository and adapt it to your needs. If you encounter any issues, please open an issue or contact me directly. Happy coding!