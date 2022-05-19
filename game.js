document.addEventListener("DOMContentLoaded",function(){

  document.getElementById("start").onclick = function(){clicked()};
  
  function clicked(){
    //reset the score to start
    var score = 0;
    item = document.getElementsByClassName("boundary example");
    item[0].innerHTML = "Score = "+score;
    
  }
    
});

  