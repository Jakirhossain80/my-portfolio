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
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ],
  homepageNavigation: [] as readonly { label: string; href: string; sectionId: string }[],
  contact: { label: "Contact", href: "/#contact", sectionId: "contact" },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Jakirhossain80" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jakir-hossain-dev" },
  ],
} as const;
