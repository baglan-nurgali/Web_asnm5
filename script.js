const userProfile = {
    name: "John Doe",
    birthYear: 2000,
    isDeveloper: true,
    hobbies: ["coding", "reading", "gaming"],
};

const currentYear = 2026;
const age = currentYear - userProfile.birthYear;
const ageMonths = age * 12;

console.log("User's age in years:", age);
console.log("User's age in months:", ageMonths);
console.log("User's hobbies count:", userProfile.hobbies.length);


//event listener for a button click
const button = document.getElementById("submitBtn");
button.addEventListener("click", function() {
  userProfile.name = document.getElementById("nameInput").value;
  userProfile.birthYear = Number(document.getElementById("birthYearInput").value);
});

//task 5
addTaskBtn.addEventListener('click', function() {
    if(document.getElementById("taskInput").value !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = document.getElementById("taskInput").value;
        document.getElementById("taskList").append(newTask);
        document.getElementById("taskInput").value = "";
    }
    else {alert("Please enter a task before adding.");}
});

removeTaskBtn.addEventListener('click', function() {
    if(document.getElementById("taskList").lastElementChild) {
        document.getElementById("taskList").lastElementChild.remove();
    }
    else {alert("No tasks to remove.");}
});
