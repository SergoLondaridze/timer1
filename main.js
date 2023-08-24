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
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(endtime) {
    const timer = document.querySelector(".container");
    const days = timer.querySelector(".day");
    const hour = timer.querySelector(".hour");
    const minutes = timer.querySelector(".minutes");
    const seconds = timer.querySelector(".second");
    let timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hour.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(deadline);
});
