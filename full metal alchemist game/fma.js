// user chose their character

var characters= {
 "pride" : {
  name: "Pride",
  points: 120,
  attack: 25,
},

  "lust" : {
  name: "Lust",
  points: 100,
  attack: 20,
},

  "gluttony" : {
  name: "Gluttony",
  points: 80,
  attack: 15,
},

"greed" : {
  name: "Greed",
  points: 60,
  attack: 10,
}
}


// $("#pridePts").html(pride.points)
// $("#lustPts").html(lust.points)
// $("#gluttonyPts").html(gluttony.points)
// $("#greedPts").html(greed.points)

$(".characters").on("click", function() {
  $(this).appendTo("#hero")
})
