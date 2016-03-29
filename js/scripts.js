$(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();
    var sentence = $("#sentence").val();
    var noVowels = ""
      $(".output").show();
    for (var index = 0; index < sentence.length; index += 1) {
      if(sentence[index].toLowerCase() === "a" || sentence[index].toLowerCase() === "e" || sentence[index].toLowerCase() === "i" || sentence[index].toLowerCase() === "o" || sentence[index].toLowerCase() === "u"){
        noVowels = noVowels + "-";
      } else {
        noVowels = noVowels + sentence[index] ;
    }
    $(".output").text(noVowels);
  }
  });
});
