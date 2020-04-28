//business logic
function factorial(factorialValue){
  var result = 1;
  for(var i = 1; i <= factorialValue; i++){
    result = result * i;
  }
  return result;
}


$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var factorialValue = parseInt($("input").val());
    var result = factorial(factorialValue);
    $("#result").text(result);
  });
});