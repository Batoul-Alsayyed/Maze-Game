document.addEventListener("DOMContentLoaded",function(){
  let score = 0;
  // variable to indicate that the game started and set false by default 
  let start = false
  var Interval;

  var seconds = 00;
  var tens = 00;

  //array that will store seconds timer
  var seconds_timer = [] 
    //array that will store tens timer

  var tens_timer = [] 
  
  // right click listener for start button
  document.getElementById("start").addEventListener('contextmenu', (e) => {
    e.preventDefault();
      //reset timer 
      //saving seconds and tens values to save them 

      seconds_timer.push(seconds)
      tens_timer.push(tens)
      
      //saving last time stat
      last_score_seconds.innerHTML = seconds
      last_score_tens.innerHTML = tens

      //resetting best time stat(least)
      
      best_score_seconds.innerHTML = "00"
      best_score_tens.innerHTML = "00"

      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      OutputSeconds.innerHTML = seconds;
      OutputTens.innerHTML = tens;
  }, false);



  document.getElementById("start").onclick = function(){clicked()};
  
  function clicked(){
    start = true
    score = 0;
    document.getElementById("status").innerHTML = "The game started!";
    item = document.getElementsByClassName("boundary example");
    item[0].style.backgroundColor = 'white';
    item[0].innerHTML = "Score = "+score;

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
  };

  list = document.getElementsByClassName("boundary");

  list[0].onmouseover = function () {functiondiv0()}
  function functiondiv0(){
    if (start){
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';
    score -=10;
    item[0].innerHTML = "score = "+score;
  }
}
  list[1].onmouseover = function () {functiondiv1()}
  function functiondiv1(){
    if (start){
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;
  }
}
  list[2].onmouseover = function () {functiondiv2()}
  function functiondiv2(){
    if (start){
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;
  }
}
  list[3].onmouseover = function () {functiondiv3()}
  function functiondiv3(){
    if (start){
    document.getElementById("status").innerHTML = "You lost!";
    item = document.getElementsByClassName("boundary example");

    item[0].style.backgroundColor = 'red';

    score -= 10;
    item[0].innerHTML = "score = "+score;

  }
}
  list[4].onmouseover = function () {functiondiv4()}

  function functiondiv4(){
        if (start){
        document.getElementById("status").innerHTML = "You lost!";
        item = document.getElementsByClassName("boundary example");

        item[0].style.backgroundColor = 'red';

        score -= 10;
        item[0].innerHTML = "score = "+score;
      }
  }
  var end = document.getElementById("end");
  end.onmouseover = function (){won()}
  function won(){
    if (start){
      document.getElementById("status").innerHTML = "You won!";
      item = document.getElementsByClassName("boundary example");
      score +=5;
      item[0].innerHTML = "score = "+score;
      console.log(score);
      item[0].style.backgroundColor = 'yellow';
    

      //reset timer 
      //saving seconds and tens values to save them 

      seconds_timer.push(seconds)
      tens_timer.push(tens)
      
      //saving last time stat
      last_score_seconds.innerHTML = seconds
      last_score_tens.innerHTML = tens

      //adding best time stat(least)
      min_seconds = seconds_timer[0]
      min_tens = tens_timer[0]
      for (var i=0; i<seconds_timer.length; i++){
        if (seconds_timer[i]<min_seconds && tens_timer[i]<min_tens){
          min_seconds= seconds_timer;
          min_tens = tens_timer[i]
        }
      }
      best_score_seconds.innerHTML = min_seconds
      best_score_tens.innerHTML = min_tens

      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      OutputSeconds.innerHTML = seconds;
      OutputTens.innerHTML = tens;

      
    }
  }
  
  e1 = document.querySelector("p").innerText = 'Time stats: '
  document.querySelector("p").style.textAlign = 'center'


  const h1 = document.createElement("H1");
  const textNode = document.createTextNode("Live: ");
  h1.appendChild(textNode);
  document.body.appendChild(h1);

  const OutputSeconds  = document.createElement("H1");
  const textNode2 = document.createTextNode("00 ");
  OutputSeconds .appendChild(textNode2);
  document.body.appendChild(OutputSeconds );

  const OutputTens   = document.createElement("H1");
  const textNode3 = document.createTextNode("00 ");
  OutputTens.appendChild(textNode3);
  document.body.appendChild(OutputTens);

  //OutputTens.innerHTML+="hryyyyyyyyyyyyyyyyyy"
    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }
    }


  //Adding best time stat
  const best = document.createElement("H1");
  const best_text = document.createTextNode("Best: ");
  best.appendChild(best_text);
  document.body.appendChild(best);

  const best_score_seconds  = document.createElement("H1");
  const seconds_text = document.createTextNode("00 ");
  best_score_seconds .appendChild(seconds_text);
  document.body.appendChild(best_score_seconds );

  const best_score_tens   = document.createElement("H1");
  const tens_text = document.createTextNode("00 ");
  best_score_tens.appendChild(tens_text);
  document.body.appendChild(best_score_tens);

  //Adding LAst time stat

  const last = document.createElement("H1");
  const last_text = document.createTextNode("Last: ");
  last.appendChild(last_text);
  document.body.appendChild(last);

  const last_score_seconds  = document.createElement("H1");
  const seconds_textlast = document.createTextNode("00 ");
  last_score_seconds .appendChild(seconds_textlast);
  document.body.appendChild(last_score_seconds );

  const last_score_tens   = document.createElement("H1");
  const tens_textlast = document.createTextNode("00 ");
  last_score_tens.appendChild(tens_textlast);
  document.body.appendChild(last_score_tens);
  
  
});

  