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
  }
})
