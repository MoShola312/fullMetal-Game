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

var urCharacter;
var urEnemy;



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

$("#reset").hide();
// var userCharacters = $.makeArray($(".characters"));

$(".characters").on("click", function() {
  // $(this).appendTo("#hero");

  if($("#hero .characters").length==0){
    yourCharacter($(this));
    characterName = $(this).children("p").first().text();
console.log("charactrN " + characterName)
    removeCharacterFromArray(characterName);

    // console.log(characters);
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

function yourCharacter(n) {
  $(n).appendTo("#hero");
  // urEnemy = $(userCharacters).slice($.inArray($(this), userCharacters), 1);
}

function removeCharacterFromArray(n){
  var character_index = characters.findIndex(x => x.name == n);
  fightingChar = characters.splice(character_index, 1);
}
function removeDefenderFromArray(n){
  var character_index = characters.findIndex(x => x.name == n);
  fightingDefender = characters.splice(character_index, 1);
}

$("body").on("click", "#enemy .characters", function(){
  if($("#defender .characters").length==0){
    yourEnemies($(this));
    var defenderName = $(this).children("p").first().text();
    console.log("defender " + defenderName)
    removeDefenderFromArray(defenderName);
  }
});


function yourEnemies(n){
    $(n).appendTo("#defender");
}

function attackGame(){
  fightingDefender[0].points -= fightingChar[0].attack
  fightingChar[0].points -= fightingDefender[0].enemyAttackBack
  $("#gameOver").html("You attacked " + fightingDefender[0].name + " for " + fightingChar[0].attack + " damage." + "<br>"
                      +fightingDefender[0].name + " attacked you back for " + fightingDefender[0].enemyAttackBack + " damage.")
fightingChar[0].attack += 10;
$("#" + fightingDefender[0].name.toLowerCase()+ "Pts").html(fightingDefender[0].points)
$("#" + fightingChar[0].name.toLowerCase()+ "Pts").html(fightingChar[0].points)

  console.log("My Char" + fightingChar[0].points)
  console.log("My Enemy" + fightingDefender[0].points)
  if(fightingChar[0].points < 0){
    alert("Lose")
  }
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

})

// $("#reset").on("click", function(){
//   reset();
//
// })
function gameOver(){
  if($("#enemy .characters").length == 0){
    $("#gameOver").text("You Won!!! GAME OVER")
    $("#attack").hide();
    // $("#reset").show();
  }
}

// function reset(){
//   var characters= [
//    {
//     name: "Pride",
//     points: 120,
//     attack: 8,
//     image: "pride.png",
//     enemyAttackBack: 15
//   },
//
//      {
//     name: "Lust",
//     points: 100,
//     attack: 14,
//     image: "lust.png",
//     enemyAttackBack:5
//   },
//
//      {
//     name: "Gluttony",
//     points: 150,
//     attack: 8,
//     image: "gluttony.png",
//     enemyAttackBack: 20
//   },
//
//    {
//     name: "Greed",
//     points: 180,
//     attack: 7,
//     image: "greed.png",
//     enemyAttackBack: 25
//   }
//   ]
//
//   var urCharacter;
//   var urEnemy;
//
//
//
//   $("#pridePts").html(characters[0].points)
//   $("#prideName").html(characters[0].name)
//   $("#prideImage").attr("src", characters[0].image)
//   $("#lustPts").html(characters[1].points)
//   $("#lustName").html(characters[1].name)
//   $("#lustImage").attr("src", characters[1].image)
//
//
//   $("#gluttonyPts").html(characters[2].points)
//   $("#gluttonyName").html(characters[2].name)
//   $("#gluttonyImage").attr("src", characters[2].image)
//
//   $("#greedImage").attr("src", characters[3].image)
//   $("#greedName").html(characters[3].name)
//   $("#greedPts").html(characters[3].points)
// }
// $(userCharacters).on("click", function() {
//   $(this).appendTo("#hero")

// var yourCharacter = [];
// var userCharacters = $.makeArray($(".characters"));
//
// $(userCharacters).on("click", function() {
//   yrCharacter($(this));
//   defendCharacter($(this))
// })
//
// function yrCharacter(character) {
//   character.appendTo("#hero");
//   console.log("userCharacters_YR " + userCharacters)
//   // console.log("your character: " + yourCharacter);
//    //
// }
//
// function defendCharacter(character){
//   character.appendTo("#defender");
//   console.log("userCharacters_Defend " + userCharacters)
// }


//this works
// $(userCharacters).on("click", function() {
//   $(this).appendTo("#hero")
// });

//



//   if (userCharacters.length == 4) {
    // selectHero();
//   }
//     if (userCharacters.length < 4) {
//      selectDefender();
// }

  // $(userCharacters).appendTo("#enemy")




// function selectHero() {
//   $(userCharacters).click(function() {
    // if (userCharacters.length == 4) {

    //removes character from array
    // userCharacters = userCharacters.splice($.inArray($(this), userCharacters), 1);
//     yourCharacter = $(userCharacters).slice($.inArray($(this), userCharacters), 1);
//     $(this).appendTo("#hero")
//
//     console.log("user characters: " + userCharacters);
//     // }
//    if (yourCharacter.length == 1){
//       $(this).appendTo("#defender")
//
// }
//
//
//
//
//
// // return yourCharacter;
//
//
// })
// }
//
//
// //user chose their defender
// function selectDefender() {
// $(userCharacters).on("click",function() {
//   $(this).appendTo("#defender")
//   userCharacters = userCharacters.splice($.inArray($(this),userCharacters), 1);
//   console.log("defender!")
//   return userCharacters;
// })
// }

// the other the two characters become avilable for attack
//
// attack button subtract points from your character and Defender
//
// winner is selected
