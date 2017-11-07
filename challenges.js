
var scores, roundScore, activePlayer, gamePlaying, lastDice;
init();

/*if we don't want the function out here, we can place it as the second parameter in the addEventListener function below as an anonymous (no named function )
function btn() {
    //Do something here
}
btn();*/

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
         //1. Random number generator
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        //3. Update the round score IF the number isn't 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        /*if (dice === 6 && lastDice === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        } 
        
        lastDice = dice;
        */
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
   if (gamePlaying) {
       // 1. Add Current score to global score
    scores[activePlayer] += roundScore;
    
    // 2. Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
       
    var input = document.querySelector('.final-score').value;
    var winningScore
    // Undefined, 0, null or "" are COERCED to false
    if (input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }
       
    // 3. Check if player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        // 4. Next Player
        nextPlayer();
    }
   }
});

function nextPlayer() {
//Next Player's turn
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init); 

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//querySelector allows us to select things in css
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'


/* 3 Challenges
Change the game to follow these rules:

1. A player loses his entire score when he rolls two sixes in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change predefined score of 100. (Hint: you can read that value with the .value property in Javascript)
3. Add another dice to the game, so that there are two die now. The player loses his current score when one of them is a 1. (Hint: You will need CSS to position the second dice so take a look at the CSS code for the first one.)
*/
















