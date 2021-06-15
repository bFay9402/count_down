let countDownDate = new Date("Oct 8, 2021 00:00:00");

let counter = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 *24));
  let hours = Math.floor(distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
  let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(distance % (1000 * 60) / 1000);

  document.querySelector('#timer').innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

  if(distance < 0) {
    clearInterval(counter);
    document.querySelector('#timer').innerHTML = 'THE WAIT IS OVER!!!!';
  }

}, 1000);