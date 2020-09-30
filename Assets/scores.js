// figure out get scores to local storage
// pushing scores to empty array 
// set high scores to descending order
// loop through each score in order list (show initials)
// display document.getElementById. (fridge magnet)

// clear function 
// window local storage 

//.splice()

var goBack = document.getElementById("goBack");
var clear = document.getElementById("clear");
var highscoresEl = document.getElementById("highscores");

var people = [];
var highScoreObj = new Object ();

// getting key from Local Storage
for (let i = 0; i < localStorage.length; i++) {
    people[i] = localStorage.key(i);
};


// getting score from Local Storage
for (let i = 0; i < people.length; i++) {
    highScoreObj[people[i]] = localStorage.getItem(people[i]);

}

console.log(highScoreObj);

// Display scores on the page
for (let key in highScoreObj) {
    var liEl = document.createElement("li");
    liEl.textContent = "\xa0" + key +  ":" + "\xa0\xa0" + highScoreObj[key];
    liEl.style.fontSize = "larger";
    highscoresEl.appendChild(liEl);
};

// Add click function to go back button
goBack.addEventListener("click", function(){
    window.location.href = "../index.html";    
});

// Add click function to "clear high scores" button
clear.addEventListener("click", function(){
    localStorage.clear();
    highscoresEl.innerHTML = "";
})

