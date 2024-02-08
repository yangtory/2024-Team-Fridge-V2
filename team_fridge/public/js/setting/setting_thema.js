document.addEventListener("DOMContentLoaded", () => {
  const $checkbox = document.querySelector(".button.check");

  const isUserColorTheme = localStorage.getItem("color-theme");
  const isOsColorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const getUserTheme = () => (isUserColorTheme ? isUserColorTheme : isOsColorTheme);

  const setUserTheme = (theme) => {
    localStorage.setItem("color-theme", theme);
    document.documentElement.setAttribute("color-theme", theme);
    if (theme === "dark") {
      $checkbox.checked = true;
    } else {
      $checkbox.checked = false;
    }
  };

  window.onload = function () {
    const userTheme = getUserTheme();
    setUserTheme(userTheme);
  };

  $checkbox.addEventListener("click", (e) => {
    const theme = e.target.checked ? "dark" : "light";
    setUserTheme(theme);
  });
});
