
let signalColor = "yellow";

switch (signalColor.toLowerCase()) {

    case "red":
        console.log("Signal: RED");
        console.log("Instruction: Stop");
        break;

    case "yellow":
        console.log("Signal: YELLOW");
        console.log("Instruction: Get Ready");
        break;

    case "green":
        console.log("Signal: GREEN");
        console.log("Instruction: Go");
        break;

    default:
        console.log("Invalid signal color! Please enter red, yellow, or green.");
}