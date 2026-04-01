const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/gh/saarors/inject-JS@08f8cf6914959273316256aed0f1983a8089f029/source.js";

script.onload = () => console.log("Script loaded!");
script.onerror = () => console.log("Failed to load script");

document.head.appendChild(script);
