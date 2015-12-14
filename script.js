// credit to 'Anatoliy' from StackExchange
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// generate a circle or a rectangle
function getRandomShape() {
  if(Math.random() < 0.5){
    return '100px';
  }
  return '0px';
}


var clickedTime, createdTime, reactionTime, cumulativeTime, avgTime, numTries, bestTime;

// make a randomly positioned and colored box/circle appear
function makeBox() {
  setTimeout(function(){
      document.getElementById('box').style.borderRadius=getRandomShape();
      document.getElementById('box').style.backgroundColor=getRandomColor();
      document.getElementById('box').style.top = (Math.random()*300)+"px";
      document.getElementById('box').style.left = (Math.random()*500)+"px";
      document.getElementById('box').style.display="block";
      createdTime = Date.now();
  }, 5000*Math.random() )
}

// update statistics and make the box go into hiding
document.getElementById('box').onclick=function(){
    numTries++;
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime)/1000;
    if(numTries == 1){
      bestTime = reactionTime;
    }else{
      if(reactionTime < bestTime){
        bestTime = reactionTime;
      }
    }
    cumulativeTime += reactionTime;
    avgTime = cumulativeTime/numTries;
    document.getElementById('time').innerHTML = reactionTime;
    document.getElementById('avg').innerHTML = avgTime;
    document.getElementById('best').innerHTML = bestTime;
    this.style.display="none";
    makeBox();
}
cumulativeTime = 0;
numTries = 0;
makeBox();
