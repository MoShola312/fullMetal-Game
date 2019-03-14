// user chose their character

var characters= [
 {
  name: "Pride",
  points: 120,
  attack: 8,
  image: "pride.png",
  enemyAttackBack: 15
},

   {
  name: "Lust",
  points: 100,
  attack: 14,
  image: "lust.png",
  enemyAttackBack:5
},

   {
  name: "Gluttony",
  points: 150,
  attack: 8,
  image: "gluttony.png",
  enemyAttackBack: 20
},

 {
  name: "Greed",
  points: 180,
  attack: 7,
  image: "greed.png",
  enemyAttackBack: 25
}
]

//build the characters divs
$("#pridePts").html(characters[0].points)
$("#prideName").html(characters[0].name)
$("#prideImage").attr("src", characters[0].image)

// $(".Lust").html("<p>" + characters[1].points + "</p>")
// $(".Lust").html(characters[1].name)
// $(".Lust").append("<p>" + characters[1].name + "</p>")
// $(".Lust").append("<img src='"+ characters[1].image + "'>")
$("#lustPts").html(characters[1].points)
$("#lustName").html(characters[1].name)
$("#lustImage").attr("src", characters[1].image)


$("#gluttonyPts").html(characters[2].points)
$("#gluttonyName").html(characters[2].name)
$("#gluttonyImage").attr("src", characters[2].image)

$("#greedImage").attr("src", characters[3].image)
$("#greedName").html(characters[3].name)
$("#greedPts").html(characters[3].points)

//hides the reset button
$("#reset").hide();

$(".characters").on("click", function() {
//checks if there is character selected
//Appends a character when one is selected
  if($("#hero .characters").length==0){
    yourCharacter($(this));
    //gets the name of the character selected
    characterName = $(this).children("p").first().text();
    console.log("charactrN " + characterName)
    removeCharacterFromArray(characterName);

    // console.log(characters);
    //gets the rest of characters from the object array
    //adds them to enemy section
    for(key in characters){
      if(characters[key].name == "Pride"){
        $("#prideName").parent().appendTo("#enemy");
      } else if (characters[key].name== "Lust") {
        $("#lustName").parent().appendTo("#enemy");
      } else if (characters[key].name== "Gluttony") {
        $("#gluttonyName").parent().appendTo("#enemy");
      } else if (characters[key].name== "Greed") {
        $("#greedName").parent().appendTo("#enemy");
      }
    }
  }
})

//appends your character the your character section
function yourCharacter(n) {
  $(n).appendTo("#hero");
  // urEnemy = $(userCharacters).slice($.inArray($(this), userCharacters), 1);
}

//removes your character from the object array
//adds your character to your fighting varible
function removeCharacterFromArray(n){
  var character_index = characters.findIndex(x => x.name == n);
  fightingChar = characters.splice(character_index, 1);
}

//removes your enemy from the object array
//adds your enemy to your fighting varible
function removeDefenderFromArray(n){
  var character_index = characters.findIndex(x => x.name == n);
  fightingDefender = characters.splice(character_index, 1);
}

//checks to see if defender section is empty
//lets you choose your next opponent from enemies available section
//removes choosen opponent from enemies available section
$("body").on("click", "#enemy .characters", function(){
  if($("#defender .characters").length==0){
    yourEnemies($(this));
    var defenderName = $(this).children("p").first().text();
    console.log("defender " + defenderName)
    removeDefenderFromArray(defenderName);
  }
});

//adds your enemy to the defender section
function yourEnemies(n){
    $(n).appendTo("#defender");
}

function attackGame(){
  //substracts defender's points when your character attacks
  fightingDefender[0].points -= fightingChar[0].attack
  //substracts your character's points when defenders  attacks
  fightingChar[0].points -= fightingDefender[0].enemyAttackBack

  //displays score on screen
  $("#gameOver").html("You attacked " + fightingDefender[0].name + " for " + fightingChar[0].attack + " damage." + "<br>"
                      +fightingDefender[0].name + " attacked you back for " + fightingDefender[0].enemyAttackBack + " damage.")
//increases your attack power
fightingChar[0].attack += 10;
//displays defender's and your characters remaining points
$("#" + fightingDefender[0].name.toLowerCase()+ "Pts").html(fightingDefender[0].points)
$("#" + fightingChar[0].name.toLowerCase()+ "Pts").html(fightingChar[0].points)

  console.log("My Char" + fightingChar[0].points)
  console.log("My Enemy" + fightingDefender[0].points)

  //decides loser
  //hides attack button and displays reset button
  if(fightingChar[0].points < 0){
    $("#gameOver").text("You LOSE!!");
    $("#reset").show();
    $("#attack").hide();
  }
  //if user wins, it removes the defender
  if (fightingDefender[0].points < 0){
    $("#gameOver").html("You have defeated " + fightingDefender[0].name + ", you can choose to fight another enemy.")
    $("#defender .characters").remove();
    gameOver();
  }
  // if($("#defender .characters").length==0){
  //   $("#gameOver").html("No enemy here")
  // }
}

$("#attack").on("click", function(){
  attackGame();

});

//resets game
$("#reset").on("click", function(){
  location.reload();
});

//checks to see if the user has won the game
//hides attack button and replace it with reset button
function gameOver(){
  if($("#enemy .characters").length == 0 && fightingChar[0].points > fightingDefender[0].points){
    $("#gameOver").text("You Won!!! GAME OVER")
    $("#attack").hide();
    $("#reset").show();
  }
};
