const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/gh/saarors/inject-JS@main/source.js";

script.onload = () => console.log("Script loaded!");
script.onerror = () => console.log("Failed to load script");

document.head.appendChild(script);
