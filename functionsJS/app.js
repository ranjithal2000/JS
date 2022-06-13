const startGameBtn = document.getElementById('start-game-btn');
const ROCK ='ROCK';
const PAPER ='PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
gameIsRunning = false;
const getPlayerChoice =  () =>
{
   const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
   if( 
       selection !== ROCK &&
       selection !== PAPER &&
       selection !== SCISSORS
     ){
         alert(`Invalid Choice! we chose ${DEFAULT_USER_CHOICE} for you`);
         return DEFAULT_USER_CHOICE;
     }
     return selection;
};

const getComputerChoice =  () =>
{
    const randomValue = Math.random();
    if (randomValue < 0.34)
    {
        return ROCK;
    } else if (randomValue < 0.67)
    {
        return PAPER;
    } else 
    {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) =>
{
    if(cChoice == pChoice)
    {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
        ){
            return RESULT_PLAYER_WINS;
        } else
        {
            return RESULT_COMPUTER_WINS;
        }

};
startGameBtn.addEventListener('click',  () =>
{
    if(gameIsRunning)
    {
        return;
    }
    gameIsRunning = true;
    console.log('Game started...');
    const PlayerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, PlayerChoice);
    console.log(winner);
    let message;
    if(winner == RESULT_DRAW)
    {
        message = alert(`you picked ${PlayerChoice}, , computer picked ${computerChoice} and hence it is a draw !` );
    }else if (winner == RESULT_PLAYER_WINS)
    {
        message = alert(`you picked ${PlayerChoice}, , computer picked ${computerChoice} and hence the player wins !` );
    } else 
    {
        message = alert(`you picked ${PlayerChoice}, , computer picked ${computerChoice} and hence the computer wins !` );
    }
    alert(message);
    gameIsRunning = false;
});

//not relater to game
// const sumUp = (resultHandler, ...numbers) =>
// {
//     const checkNum = (number) =>
//     {
//         return isNaN (number) ? 0 : number;
//     };
//    let sum =0;
//    for(const num of numbers)
//    {
//        sum += checkNum(num);
//    }
//    resultHandler(sum);
// };
// const showResult = (result) =>
// {
//     alert('the result after adding numbers is: ' + result)
// }
// sumUp(showResult,5,6,7,8);
// sumUp(showResult,5,6,8,-2);