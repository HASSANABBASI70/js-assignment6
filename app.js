// // 1. 

// var firstName = prompt("Enter first name:");
// var lastName = prompt("Enter last name:");

// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName);

// // 2. 

// var mobile = prompt("Enter your favorite mobile phone model:");
// document.write("Length of input: " + mobile.length);

// // 3. 

// var word = "Pakistani";
// document.write("Index of n: " + word.indexOf("n"));

// // 4.

// var text = "Hello World";
// document.write("Last index of l: " + text.lastIndexOf("l"));

// // 5. 

// var word = "Pakistani";
// document.write("Character at index 3: " + word.charAt(3));

// // 6. 

// var firstName = prompt("Enter first name:");
// var lastName = prompt("Enter last name:");

// var fullName = firstName.concat(" ", lastName);
// alert("Hello " + fullName);

// // 7.

// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write(newCity);

// // 8. 

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write(newMessage);

// // 9.

// var str = "472";
// var num = Number(str);

// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);

// // 10.

// var userInput = prompt("Enter text:");
// document.write(userInput.toUpperCase());

// // 11. 
// var userInput = prompt("Enter text:");
// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write(titleCase);

// // 12. 

// var num = 35.36;
// var str = num.toString().replace(".", "");
// document.write(str);

// // 13. 

// var username = prompt("Enter username:");

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);
//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         alert("Invalid username. Please enter a valid username.");
//         break;
//     }
// }

// // 14.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Enter item to search:").toLowerCase();

// if (A.includes(searchItem)) {
//     alert(searchItem + " is available in the list.");
// } else {
//     alert(searchItem + " is not available in the list.");
// }

// // 15.
// var password = prompt("Enter password:");

// if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
// } 
// else if (!isNaN(password.charAt(0))) {
//     alert("Password should not start with a number.");
// } 
// else {
//     var hasAlpha = false;
//     var hasNum = false;

//     for (var i = 0; i < password.length; i++) {
//         var code = password.charCodeAt(i);
//         if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//             hasAlpha = true;
//         }
//         if (code >= 48 && code <= 57) {
//             hasNum = true;
//         }
//     }

//     if (hasAlpha && hasNum) {
//         alert("Password is valid.");
//     } else {
//         alert("Password must contain alphabets and numbers.");
//     }
// }