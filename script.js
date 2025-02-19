document.addEventListener("DOMContentLoaded", function () {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Function to get a cookie value
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  // Load saved preferences from cookies
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", `${savedFontSize}px`);
    fontSizeInput.value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    fontColorInput.value = savedFontColor;
  }

  // Handle form submission
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form refresh

    const selectedFontSize = fontSizeInput.value;
    const selectedFontColor = fontColorInput.value;

    // Save to cookies (expires in 365 days)
    document.cookie = `fontsize=${selectedFontSize}; path=/; max-age=${365 * 24 * 60 * 60}`;
    document.cookie = `fontcolor=${selectedFontColor}; path=/; max-age=${365 * 24 * 60 * 60}`;

    // Apply changes
    document.documentElement.style.setProperty("--fontsize", `${selectedFontSize}px`);
    document.documentElement.style.setProperty("--fontcolor", selectedFontColor);
  });
});
