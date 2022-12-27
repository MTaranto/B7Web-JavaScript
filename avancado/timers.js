let timer;
let d = new Date(0);
let ml = 31;



function reset () {
  location.reload();
} 
function start() {
  timer = setInterval(showTime, 31);
}
function pause() {
  clearInterval(timer);
}
function showTime () {
  ml += 31;
  d.setHours(0,0,0,ml)
  let m = d.getMinutes();
  let s = d.getSeconds();
  let ms = d.getMilliseconds();
  let clock = ('0'+m).slice(-2)+':'+('0'+s).slice(-2)+':'+('0'+ms).slice(-2);
  document.querySelector('.timer').innerHTML = clock;
}

