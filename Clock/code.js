function showTime(){
  let date =new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  let time = hour + ":" + minute + ":" + "" + second;
  document.getElementById("Display").innerText = time;
  setTimeout(showTime,1000);  
}
showTime();