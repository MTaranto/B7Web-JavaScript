let html = '';

let c = 0;

while(c<=10) {
  html += "Número: "+c+"<br>"
  c++
}
for(let b=1; b<=10;b++) {
  html += "Número: "+b+"<br>";
}
document.getElementById("demo").innerHTML = html;