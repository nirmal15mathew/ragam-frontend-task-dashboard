let data = JSON.parse(`[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]`);

document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({
    period: "daily",
    work: data[0],
    play: data[1],
    study: data[2],
    exercise: data[3],
    social: data[4],
    self_care: data[5],
    data: data,

    setDaily() {
      this.period = "daily";
    },
    setWeekly() {
      this.period = "weekly";
    },
    setMonthly() {
      this.period = "monthly";
    },
    toggleTheme() {
      console.log("toggleing")
      if (localStorage.theme == "dark") {
        this.setLight()
      }
      else if (localStorage.theme == "light") {
        this.setAuto()
      }
      else {
        this.setDark()
      }
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

    },
    setDark() {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
    },
    setLight() {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
    },
    setAuto() {
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem("theme");
    },
  }));
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);
