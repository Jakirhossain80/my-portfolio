export const siteConfig = {
  name: "Md. Jakir Hossain",
  title: "Md. Jakir Hossain | Portfolio",
  professionalTitle: "MERN Stack & Next.js Web Developer",
  location: "Dhaka, Bangladesh",
  description:
    "Professional portfolio of Md. Jakir Hossain, a MERN Stack and Next.js web developer based in Dhaka, Bangladesh.",
  hero: {
    valueProposition:
      "I build responsive, maintainable web applications with React, Next.js, TypeScript, and the MERN stack.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
  },
  about: {
    introduction:
      "I’m Md. Jakir Hossain, a MERN Stack & Next.js Web Developer based in Dhaka, Bangladesh. I’m building my professional path in web development through practical full-stack learning and project work.",
    details: [
      "Working across frontend and backend technologies has helped me understand how accessible interfaces, application logic, APIs, and data fit together to solve real product problems.",
      "Alongside development, my current background as Deputy Manager (Shipping) at Sunman Group reinforces the reliability and structured approach I bring to my work, while web development remains the focus of this portfolio.",
    ],
    strengths: [
      {
        title: "Problem-solving",
        description: "Break down requirements and work through technical problems with a practical focus.",
      },
      {
        title: "Reliability",
        description: "Communicate clearly, respect constraints, and follow work through carefully.",
      },
      {
        title: "Structured work",
        description: "Plan before implementation and keep code organized, maintainable, and reviewable.",
      },
    ],
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ],
  homepageNavigation: [
    { label: "About", href: "/#about", sectionId: "about" },
    { label: "Skills", href: "/#skills", sectionId: "skills" },
    { label: "Services", href: "/#services", sectionId: "services" },
    { label: "Featured", href: "/#featured-projects", sectionId: "featured-projects" },
    { label: "Experience", href: "/#experience", sectionId: "experience" },
    { label: "Process", href: "/#process", sectionId: "process" },
  ],
  contact: { label: "Contact", href: "/#contact", sectionId: "contact" },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Jakirhossain80" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jakir-hossain-dev" },
  ],
} as const;
