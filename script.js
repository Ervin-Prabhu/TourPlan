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
    countdown.style = "border:none";
    document.getElementById("unwantedhr").style.display = "none";
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



var clothinglist = ["Casual Dress Pair x 4","Belt","Innerwear x 4", "Track pants/shorts x 4", "T-shirts x 4", "Sweater x 1", "HandGloves x 1","Beanie Cap x 1"]
clothinglist.forEach((item)=>{
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.setAttribute("type","checkbox");
  var brk = document.createElement("br");
  label.innerHTML = item;
  label.style = "margin-left:10px"

  document.getElementById("clothing").append(input,label,brk);
})

var footwearlist = ["Shoes x 1", "Socks x 2", "Flipflops x 1"]
footwearlist.forEach((item)=>{
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.setAttribute("type","checkbox");
  var brk = document.createElement("br");
  label.innerHTML = item;
  label.style = "margin-left:10px"

  document.getElementById("footwear").append(input,label,brk);
})

var electronicslist = ["Powerbank", "Charger", "Headphoes/Earphones", "Bluetooth Speaker"]
electronicslist.forEach((item)=>{
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.setAttribute("type","checkbox");
  var brk = document.createElement("br");
  label.innerHTML = item;
  label.style = "margin-left:10px"

  document.getElementById("electronics").append(input,label,brk);
})


var toiletries = ["Tooth brush", "Tooth Paste", "Tounge Cleaner", "Soap", "Shampoo", "Handwash", "Sanitizer", "Masks x 6", ]
toiletries.forEach((item)=>{
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.setAttribute("type","checkbox");
  var brk = document.createElement("br");
  label.innerHTML = item;
  label.style = "margin-left:10px"

  document.getElementById("toiletries").append(input,label,brk);
})

var linens = ["Blanket x 1", "Towels x 2", "Napkin x 1", "Handkerchief x 3"]
linens.forEach((item)=>{
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.setAttribute("type","checkbox");
  var brk = document.createElement("br");
  label.innerHTML = item;
  label.style = "margin-left:10px"

  document.getElementById("linens").append(input,label,brk);
})

var others = ["Aadhar card(mandatory)", "Water Bottels x 2", "Spoon x 1", "Fork x 1", "Cup x 1" ,"knief", "scissor", "Torch light", "Covers for wet clothes", "Shades", "Match box", "Mosquito replent"]
others.forEach((item)=>{
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.setAttribute("type","checkbox");
  var brk = document.createElement("br");
  label.innerHTML = item;
  label.style = "margin-left:10px"

  document.getElementById("others").append(input,label,brk);
})

var snacks = ["Instant Noodels cups", "chocolate bars", "biscuits"]
snacks.forEach((item)=>{
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.setAttribute("type","checkbox");
  var brk = document.createElement("br");
  label.innerHTML = item;
  label.style = "margin-left:10px"

  document.getElementById("snacks").append(input,label,brk);
})

var medicalkit = ["Paracetmol x 5", "Azithromycin x 5", "Antidiarrheal pills x sheet-1", "ORS packets x 4", " Pain relief spay", "ear swabs", "cotton", "Painkiller tabs x 5"]
medicalkit.forEach((item)=>{
  var label = document.createElement("label");
  var input = document.createElement("input");
  input.setAttribute("type","checkbox");
  var brk = document.createElement("br");
  label.innerHTML = item;
  label.style = "margin-left:10px"

  document.getElementById("medicalkit").append(input,label,brk);
})
