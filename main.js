"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const deadline = "2023-10-10";

  function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date());
    let days = Math.floor(t / (60 * 60 * 1000 * 24));
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((t / (1000 * 60)) % 60);
    let seconds = Math.floor((t / 1000) % 60);

    return {
      total: "t",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
    };
  }
});
