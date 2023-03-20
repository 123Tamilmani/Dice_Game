// Pig Game

const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
const Currentsc1 = document.querySelector('.currentscore1');
const Currentsc2 = document.querySelector('.currentscore2');
const diceface =  document.querySelector('.diceface');
const btnroll = document.querySelector('.roll');
const btnreset = document.querySelector('.reset');
const btnhold = document.querySelector('.hold');

const scores = [0, 0];
let Currentsc = 0;
let activeplayer = 1;
let playing = true;
//Intial Value

const switchplayer = function()
{
   document.getElementById(`cs${activeplayer}`).textContent = 0;
   Currentsc = 0;
   activeplayer = activeplayer === 1?2:1;
   player1.classList.toggle('playeractive');
   player2.classList.toggle('playeractive');
};

score1.textContent = 0;
score2.textContent = 0;

//Dice Functionality
 btnroll.addEventListener('click', function()
 {
   if(playing)
   {
      const dice = Math.trunc(Math.random()*6)+1;
      diceface.classList.remove('hidden');

      diceface.src = `dice-${dice}.png`;

      if(dice!=1)
      {
         Currentsc += dice;
         document.getElementById(`cs${activeplayer}`).textContent = Currentsc;
      }
      else
      {
       switchplayer();
      }
   }
 });

 btnhold.addEventListener('click', function()
 {
   if(playing)
   {
      scores[activeplayer-1] += Currentsc;
      document.getElementById(`sc${activeplayer}`).textContent = scores[activeplayer-1];

      if(scores[activeplayer-1]>=100)
      {
         playing = false;
         document.querySelector(`.player${activeplayer}`).classList.add('playerwinner');
         // document.querySelector(`.player${activeplayer}`).classList.add('name');
         document.querySelector(`.player${activeplayer}`).classList.remove('playeractive');
         document.getElementById(`n${activeplayer}`).textContent = `PLAYER ${activeplayer} Winner`;
      }
      else
      {
         switchplayer();
      }
   }
 });

 btnreset.addEventListener('click', function()
 {
   document.querySelector(`.player${activeplayer}`).classList.remove('playerwinner');
   document.getElementById(`n${activeplayer}`).textContent = `PLAYER ${activeplayer}`;
   document.querySelector('.score1').textContent = 0;
   document.querySelector('.currentscore1').textContent = 0;
   document.querySelector('.score2').textContent = 0;
   document.querySelector('.currentscore2').textContent = 0;
   document.querySelector('.diceface').classList.add('hidden');
   activeplayer = 1;
   document.querySelector(`.player${activeplayer}`).classList.add('playeractive');
   playing = true;
    Currentsc = 0;
    scores[0] = 0;
    scores[1] = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    for(let i = 0;i<scores.length;i++)
    {
        console.log(scores[i]);
    }
    Currentsc1.textContent = 0;
    Currentsc2.textContent = 0;
 });