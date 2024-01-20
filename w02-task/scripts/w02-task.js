/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Alex Myers';
// Declare and instantiate a variable for the current year
let current_Year = new Date().getFullYear();

// Declare and instantiate a variable for the profile picture file path
let profilePicture = "images/IMG_3871.JPG";

/* Step 3 - Element Variables */

// Use document.getElementById() to get the element with id "name"
const nameElement = document.getElementById("name");

// Check Your Understanding: Use document.getElementById() to get the element with id "food"
const foodElement = document.getElementById("food");

// Use document.querySelector() to get the element with id "year"
const yearElement = document.querySelector("#year");

// Check Your Understanding: Use any viable method to get the profile image element
const imageElement = document.getElementById("profileImage");

/* Step 4 - Adding Content */

// Assuming fullName and currentYear are variables with values
const fullName = "Alex Myers";
const currentYear = 2024;
const profilePicturePath = "w02-task/images/IMG_3871.JPG";

// Assign the nameElement's innerHTML property with fullName surrounded by <strong> tags
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Check Your Understanding: Use the textContent property to set the value of the element to currentYear
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element
imageElement.setAttribute("src", profilePicturePath);

// Check Your Understanding: Use the setAttribute method to set the alt property of the image element with a template literal
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
// Step 1: Declare an array variable to hold your favorite foods.
let favoriteFoods = ["Pizza", "Burgers", "Ice Cream"];

// Step 2: Modify the HTML element with the id of food to display your favorite foods array.
foodElement.innerHTML = favoriteFoods.join("<br>");

// Step 3: Declare and instantiate a variable to hold another single favorite food item.
let newFavoriteFood = "Sushi";

// Step 4: Add the value stored in this new variable to your favorite food array.
favoriteFoods.push(newFavoriteFood);

// Step 5: Append the array output showing the modified array, using a line break.
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

// Step 6: Remove the first element in the favorite food array.
favoriteFoods.shift();

// Step 7: Append the array output showing the modified array after removing the first element.
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

// Step 8: Remove the last element in the favorite food array.
favoriteFoods.pop();

// Step 9: Append the array output with this final modified favorite foods array.
foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

