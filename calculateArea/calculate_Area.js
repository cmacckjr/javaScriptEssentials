let length; // variable for length inputed by user
let width; // variable for width inputed by user

// Function that calculates the area information inputed by user
function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    // parseFloat() function converts the string value retrieved from 
    // input field to a floating-point number. Conversion ensures that
    // the input, typically text entered by the user, is treated as a
    // number that can be used in mathematical operations

    let area = length * width;
    return document.getElementById("result").innterText = "The area of the rectangle is: ${area}";
    // .innerText is used to modify the text content within the html element
}