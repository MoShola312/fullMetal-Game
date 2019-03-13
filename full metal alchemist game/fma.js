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


var userCharacters = $.makeArray($(".characters"));

$(".characters").on("click", function() {
  // $(this).appendTo("#hero");

  if($("#hero .characters").length==0){
    yourCharacter($(this));
    var characterName = $(this).children("p").first().text();

    var character_index = characters.findIndex(x => x.name == characterName);
    characters.splice(character_index, 1);
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
  console.log(n)
// for (key in characters){
//   if (n == characters[key])
// }
//   urCharacter = $(characters).splice($(n), 1);
//   console.log(urCharacter)
urEnemy = $(userCharacters).slice($.inArray($(this), userCharacters), 1);
}

$("body").on("click", "#enemy .characters", function(){
  yourEnemies($(this));
});


function yourEnemies(n){
  if($("#defender .characters").length==0){
    $(n).appendTo("#defender");
  }
}




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
