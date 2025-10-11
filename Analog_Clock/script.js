const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  // get the sytem actual date
  const now = new Date();
  // get the system actual hour
  const hour = now.getHours();
  // get the system actual minute
  const mins = now.getMinutes();
  // get the system actual second
  const seconds = now.getSeconds();
  
  // convert the seconds into clock degrees
  const secondsDegrees = (seconds / 60) * 360 + 90;
  // make the clock hand rotate
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // convert the minutes into clock degrees
  const minsDegrees = (mins / 60) * 360 + 90;
  // make the clock hand rotate
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  //convert the hour into clock degrees
  const hourDegrees = (hour / 12) * 360 + 90;
  // make the clock hand rotate
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); // make the clock update its hands once per second (1,000 milliseconds)
