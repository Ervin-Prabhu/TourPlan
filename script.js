var countdown = document.getElementById("countdown");
var countDownDate = new Date("Jan 4, 2022 21:00:00").getTime();
// var countDownDate = new Date("Jan 1, 2022 14:06:50").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  countdown.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    countdown.innerHTML = " ";
    document.getElementById("countdowndiv").style = "display:none"
    countdown.style = "border:none"
  }
}, 1000);

function showticket(id,btnid)
{
  console.log(id,btnid)
  console.log(document.getElementById(id).style.display)
  if(document.getElementById(id).style.display === "none")
  {
    document.getElementById(id).style.display = "block"
    document.getElementById(id).style= "vertical-align:middle"
    document.getElementById(btnid).innerHTML = "Hide Ticket"
  }
  else
  {
    document.getElementById(id).style.display = "none"
    document.getElementById(btnid).innerHTML = "Show Ticket"
  }
}



var checklist = ["Casual Dresses x 4", "Sweater x 1", "HandGloves x 1","Beanie Cap x 1"]
checklist.forEach((item)=>{
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.setAttribute("type","checkbox");
  var brk = document.createElement("br");
  label.innerHTML = item;
  label.style = "margin-left:10px"

  document.getElementById("check").append(input,label,brk);
})