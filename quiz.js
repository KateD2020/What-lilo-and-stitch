$(document).ready(function(){
  $('#question-1').show();
})

var characters = {
  "Lilo": 0,
  "Stitch": 0,
  "Nina": 0,
  "David": 0,
  "Jumba": 0,
  "Pleakley": 0,
  "Gantu": 0,
  "Bubbles": 0,
  "Pudge": 0
}



var characterList = ["Lilo", "Stitch", "Nina", "David", "Jumba", "Pleakley", "Gantu", "Bubbles", "Pudge"]

$('.answer-button').on('click', function(e) {
  var parentId = $(this).parent().attr('id')
  var questionNumber = parentId.split('-')[1];

  console.log(characters);
  var loc = $(this).attr('data-character').split(',');
  for (let i = 0; i < loc.length; i++){
    characters[loc[i]] +=1;
  }

  if (questionNumber < 5){
    $('#question-' + questionNumber).hide();
    $('#question-' + (parseInt(questionNumber) + 1)).show();
  } else {
    $('#question-5').hide();
    $('#final-row').show();
    var maxPoints = 0;
    for(let i = 0; i < characterList.length; i++){
      var points = characters[characterList[i]];
      if(points > maxPoints){
        maxPoints = points;
      }
    }
    var winners = [];
    for (const c in characters){
      if (characters[c] == maxPoints){
      winners.push(c);
    }
  }

   if (winners.length == 1){
     $('#final-character').text(winners[0]);
     $('#winner-' + winners[0]).show();
   } else {
      var randomWinner = Math.floor(Math.random() * winners.length)
      $('#final-character').text(winners[randomWinner]);
      $('#winner-' + winners[randomWinner]).show();
   }



  }
})
