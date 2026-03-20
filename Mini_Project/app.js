let events = JSON.parse(localStorage.getItem("events")) || [];

/* ================= LOGIN ================= */

function login(e){
e.preventDefault()

let email=document.getElementById("email").value
let password=document.getElementById("password").value

if(email==="admin@upgrad.com" && password==="12345"){
localStorage.setItem("login",true)
window.location="events.html"
}else{
alert("Invalid Credentials")
}
}

/* ================= CHECK LOGIN ================= */

function checkLogin(){
if(!localStorage.getItem("login")){
alert("Unauthorized Access")
window.location="login.html"
}
displayAdminEvents()
}

/* ================= LOGOUT ================= */

function logout(){
localStorage.removeItem("login")
window.location="login.html"
}

/* ================= ADD EVENT ================= */

document.getElementById("eventForm")?.addEventListener("submit",function(e){

e.preventDefault()

let event={
id:eventId.value,
name:eventName.value,
category:eventCategory.value,
date:eventDate.value,
time:eventTime.value,
url:eventUrl.value
}

events.push(event)

localStorage.setItem("events",JSON.stringify(events))

displayAdminEvents()
this.reset()

})

/* ================= DISPLAY EVENTS ================= */

function displayAdminEvents(list=events){

let container=document.getElementById("adminEvents")
if(!container) return

container.innerHTML=""

list.forEach((e,i)=>{

container.innerHTML+=`
<div class="col-md-4 mt-3">
<div class="card p-3 shadow">

<h5>${e.name}</h5>
<p><b>ID:</b> ${e.id}</p>
<p><b>Category:</b> ${e.category}</p>
<p><b>Date:</b> ${e.date}</p>

<a href="${e.url}" target="_blank" class="btn btn-success btn-sm">Join Event</a>

<button class="btn btn-danger mt-2" onclick="deleteEvent(${i})">Delete</button>

</div>
</div>
`

})
}

/* ================= DELETE ================= */

function deleteEvent(i){
events.splice(i,1)
localStorage.setItem("events",JSON.stringify(events))
displayAdminEvents()
}

/* ================= SEARCH ================= */

function searchEvent(){

let value=document.getElementById("search").value.toLowerCase()

let filtered=events.filter(e =>
e.id.toLowerCase().includes(value) ||
e.name.toLowerCase().includes(value) ||
e.category.toLowerCase().includes(value)
)

displayAdminEvents(filtered)
}

/* ================= REGISTER ================= */

function registerEvent(e){
e.preventDefault()
alert("You are successfully registered to this event!")
}

/* ================= CONTACT ================= */

function contactSubmit(e){
e.preventDefault()
alert("Message submitted successfully!")
}