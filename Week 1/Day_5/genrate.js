
document.getElementById("btn").addEventListener("click", function() {
    
  
    var name = document.getElementById("username").value;
    
    
    generateGreeting(name);
});

function generateGreeting(name) {

    var message = "Hello, " + name + "! Welcome to our website.";

    document.getElementById("greetMsg").innerHTML = message;
}