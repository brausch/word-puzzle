$(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();
    var sentence = $("#sentence").val();
      $(".output").show();
    for (var index = 0; index < sentence.length; index += 1) {
      if(sentence[index] === "a" || sentence[index] === "e" || sentence[index] === "i" || sentence[index] === "o" || sentence[index] === "u"){
        $(".output").append("-");
      } else {
        $(".output").append(sentence[index]);}
    }
  });
});
