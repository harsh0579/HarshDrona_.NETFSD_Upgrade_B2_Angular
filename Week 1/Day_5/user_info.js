var user = {
    name: "Rahul",
    age: 22,
    city: "Mumbai"
};

function displayUserInfo(userObj) {
    console.log("Name: " + userObj.name);
    console.log("Age: " + userObj.age);
    console.log("City: " + userObj.city);
}

// Directly call the function
displayUserInfo(user);