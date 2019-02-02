//user chose their character

var userCharacters = $.makeArray($(".characters"));
// var yourCharacter = [];



$(userCharacters).on("click", function() {
  yrCharacter();
  defendCharacter();
})

function yrCharacter() {
  userCharacters.splice($(this), 1)
  $(this).appendTo("#hero");
  console.log("userCharacters_YR " + userCharacters)
  // console.log("your character: " + yourCharacter);
   //
}

function defendCharacter(){
  userCharacters.splice($(this), 1)
  $(this).appendTo("#defender");
  console.log("userCharacters_Defend " + userCharacters)
}

// //
// //   if (userCharacters.length == 4) {
//     selectHero();
// //   }
// //     if (userCharacters.length < 4) {
// //      selectDefender();
// // }
//
//   // $(userCharacters).appendTo("#enemy")
//
//
//
//
// function selectHero() {
//   $(userCharacters).click(function() {
//     // if (userCharacters.length == 4) {
//
//     //removes character from array
//     // userCharacters = userCharacters.splice($.inArray($(this), userCharacters), 1);
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
// // //user chose their defender
// // function selectDefender() {
// // $(userCharacters).on("click",function() {
// //   $(this).appendTo("#defender")
// //   userCharacters = userCharacters.splice($.inArray($(this),userCharacters), 1);
// //   console.log("defender!")
// //   return userCharacters;
// // })
// // }
//
// //the other the two characters become avilable for attack
//
// //attack button subtract points from your character and Defender
//
// //winner is selected
