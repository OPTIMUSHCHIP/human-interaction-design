const datetimeText = document.querySelector(".datetime-text");

const getDateTime = () => {
  let DATETIME = "";
  const date = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Augt",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hour = formatTime(date.getHours());
  const minute = formatTime(date.getMinutes());
  const second = formatTime(date.getSeconds());

  DATETIME = `${day} ${month} ${year} at ${hour}:${minute}:${second}`;

  return DATETIME;
};

const formatTime = (time) => {
  if (time <= 9) {
    return `0${time}`;
  }
  return time;
};

// Run timer
setInterval(() => {
  const DATETIME_TEXT = getDateTime();
  datetimeText.textContent = DATETIME_TEXT;
}, 1000);

// Start skiing timer
const startCounterBtn = document.querySelector(".start-counter");
// startCounterBtn.onclick = handleStartTimer;

const handleStartTimer = () => {
  let TIMER = setInterval(clock, 1000);
  var msec = 00;
  var sec = 00;
  var min = 00;

  function clock() {
    msec += 1;
    if (msec == 60) {
      sec += 1;
      msec = 00;
      if (sec == 60) {
        sec = 00;
        min += 1;
        if (sec % 2 == 0) {
          alert("Pair");
        }
      }
    }
    TIMER = `${min}:${sec}:${msec}`;
  }

  return TIMER;
};

console.log(handleStartTimer());