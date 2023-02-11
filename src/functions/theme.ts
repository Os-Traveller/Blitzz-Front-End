export function getTheme() {
  const theme = localStorage.getItem("theme") || "light";
  return theme;
}

export function setTheme(theme: string = "light" || "dark", setTheme: Function) {
  // toggling theme
  if (theme === "light") {
    setTheme("dark");
    document.querySelector("html")?.classList.add("dark");
  } else {
    setTheme("light");
    document.querySelector("html")?.classList.remove("dark");
  }

  // saving theme to localStorage
  localStorage.setItem("theme", theme);
}
