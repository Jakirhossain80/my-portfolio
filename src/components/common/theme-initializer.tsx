const themeInitializer = `
  try {
    var theme = localStorage.getItem("portfolio-theme");
    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  } catch (error) {
    document.documentElement.removeAttribute("data-theme");
  }
`;

export function ThemeInitializer() {
  return <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />;
}
