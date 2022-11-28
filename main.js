const banglaShomoy = {
  hour: 'numeric', 
  minute: 'numeric',
  second: 'numeric',
  timezone: 'BST',
  timeZoneName: 'short',
  // weekday: 'long'
}

function tick() {
  let showTime = '';
  const date = new Date();
  let time = new Intl.DateTimeFormat('bn-BD', banglaShomoy).formatToParts(date);
  let test = new Intl.DateTimeFormat('bn-BD');
  if (time[0].value.length == 1) {
    showTime = '০' + time[0].value + ':' + '' + time[2].value + ':' + time[4].value;
  } else {
    showTime = time[0].value + ':' + '' + time[2].value + ':' + time[4].value;
  }
  const p = document.querySelector('.para');
  p.innerHTML = showTime;
}

setInterval(tick, 1000);

let resultMin = -1;
let result = 0;
let minuteNow = 0;
let hourNow = 0;
let secondBtn = 0;
let resultMinute = 0;
let resultHour = 0;

function ago() {
  const date = new Date();
  let hourThen = date.getHours()+1;
  let minuteThen = date.getMinutes()-2;
  let secondCurr = date.getSeconds();
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', function() {
    getHour();
  });
  let result = hourThen - hourNow;
  if (hourNow === hourThen) {
    resultMin = minuteThen - minuteNow;
  } else if (minuteNow < minuteThen) {
    resultMin = minuteThen - minuteNow;
  } else if (minuteNow > minuteThen) {
    resultMin = (minuteThen + 60) - minuteNow;
    result--;
  }
  console.log('current' + secondCurr);
  console.log('now' + secondBtn);
  if (secondBtn == secondCurr) {
    resultMinute++;
    if (resultMinute == 60) {
      resultMinute = 0;
      resultHour++;
    }
  }
  // console.log('sdsfsdfsdfs');
  console.log('--------Now' + minuteNow);
  console.log('--------Then' + minuteThen);
  console.log('--------res' + resultMin);
  const timeDiff = document.querySelector('.display');
  timeDiff.innerHTML = `Clicked ${resultHour} hours, ${resultMinute} min ago.`;
}

setInterval(ago, 1000);

function getHour() {
  console.log('entered event');
  const dateNow = new Date();
  hourNow = dateNow.getHours();
  minuteNow = dateNow.getMinutes();
  secondBtn = dateNow.getSeconds();
  resultMinute = -1;
}