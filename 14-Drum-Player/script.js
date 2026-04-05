function playSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const pad = audio.parentElement;
  const soundName = pad.id;
  document.getElementById("display").innerText = soundName;

  pad.classList.add("hit");
  setTimeout(() => pad.classList.remove("hit"), 120);
}

document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", function () {
    const key = this.innerText.trim();
    playSound(key);
  });
});

document.addEventListener("keydown", function (e) {
  const key = e.key.toUpperCase();
  playSound(key);
});

const themes = [
  {
    bgStart: "#0f2027",
    bgMid: "#203a43",
    bgEnd: "#2c5364",
    padColors: [
      "#ff6b6b",
      "#ff8e3c",
      "#f9c74f",
      "#90be6d",
      "#43aa8b",
      "#4d9de0",
      "#5e60ce",
      "#8e7dff",
      "#d264b6",
    ],
  },
  {
    bgStart: "#240b36",
    bgMid: "#3e1f47",
    bgEnd: "#c31432",
    padColors: [
      "#ff595e",
      "#ff924c",
      "#ffca3a",
      "#8ac926",
      "#52b788",
      "#1982c4",
      "#4267ac",
      "#7b2cbf",
      "#ff4d6d",
    ],
  },
  {
    bgStart: "#0b132b",
    bgMid: "#1c2541",
    bgEnd: "#3a506b",
    padColors: [
      "#ef476f",
      "#f78c6b",
      "#ffd166",
      "#06d6a0",
      "#00bbf9",
      "#118ab2",
      "#5a189a",
      "#9d4edd",
      "#c77dff",
    ],
  },
  {
    bgStart: "#1f4037",
    bgMid: "#2f6f5e",
    bgEnd: "#99f2c8",
    padColors: [
      "#d7263d",
      "#f46036",
      "#f6ae2d",
      "#4cb944",
      "#2e86ab",
      "#33658a",
      "#2f4858",
      "#7f4f24",
      "#6a4c93",
    ],
  },
];

let themeIndex = 0;

function applyTheme(theme) {
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty("--bg-start", theme.bgStart);
  rootStyle.setProperty("--bg-mid", theme.bgMid);
  rootStyle.setProperty("--bg-end", theme.bgEnd);

  theme.padColors.forEach((color, index) => {
    rootStyle.setProperty(`--pad-${index + 1}`, color);
  });
}

document.body.addEventListener("click", function (e) {
  if (e.target.closest("#drum-machine")) return;
  themeIndex = (themeIndex + 1) % themes.length;
  applyTheme(themes[themeIndex]);
  document.getElementById("display").innerText = "Theme switched";
});
