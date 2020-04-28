//business logic
function factorial(factorialValue){
  var result = 1;
  for(var i = 1; i <= factorialValue; i++){
    result = result * i;
  }
  return result;
}

function factorialRecursion(factorialValue){
  if (factorialValue === 1){
    return 1;
  }
  return factorialValue * factorialRecursion(factorialValue - 1);
}


$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var factorialValue = parseInt($("input").val());
    var result = factorial(factorialValue);
    var result2 = factorialRecursion(factorialValue);
    $("#result").text(result);
    $("#result2").text(result);
  });
});