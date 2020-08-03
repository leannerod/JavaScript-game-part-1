let wantToPlay = prompt('Would you like to play the game with the Almighty Grant?');
let playerName;
if (wantToPlay === 'yes'){
  playerName = prompt('What is your character name?');
} else {
  alert('Okay bye')
}

let userHealthPoints = 40;
let grantHealthPoints = 10;
let defeat = 0;
let win;
let battle = () => Math.floor(Math.random() * 2) + 1;

while(userHealthPoints > 0 && defeat < 3) {
  userHealthPoints = userHealthPoints - battle();
  console.log(playerName, "has", userHealthPoints, 'health points');
  grantHealthPoints = grantHealthPoints - battle();
  console.log('The Almighty Grant has', grantHealthPoints, 'health points');
  while(grantHealthPoints <= 0){
    defeat ++;
    console.log(playerName,'has won round', defeat);
    grantHealthPoints = 10;
    if(defeat === 3){
      console.log(playerName, 'has won the game!');
      break;
    } else if(userHealthPoints <= 0){
      console.log('The Almighty Grant has won the game!');
      break;
    }
  }
}