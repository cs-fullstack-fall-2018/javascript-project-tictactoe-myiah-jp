var bigToe = document.getElementsByClassName('toe');
var player_one = 1;

for(var i =0; i<bigToe.length; i++) {
    bigToe[i].addEventListener('click', clickedSquare);
}



function clickedSquare()
{
    if (player_one === 1) {

        // bigToe[i].addEventListener('click', function () {
        if (  this.innerHTML === "") {
            this.innerHTML = "X";
            this.setAttribute('disabled', 'disabled');
            player_one = 2;
            checkWinner()
        }
        }
        // );

    else
    {

    if (player_one === 2) {
        if (this.innerHTML === "") {
            this.innerHTML = "O";
            this.setAttribute('disabled', 'disabled');
            player_one = 1;
            checkWinner();
        }
    }
        //);
    }
}



//This allows a player to insert an 'x' or 'o'
// function playerOneSet() {
//
//     if (player_one === 1) {
//         c1.addEventListener('click', x);
//         c2.addEventListener('click', x);
//         c3.addEventListener('click', x);
//         c4.addEventListener('click', x);
//         c5.addEventListener('click', x);
//         c6.addEventListener('click', x);
//         c7.addEventListener('click', x);
//         c8.addEventListener('click', x);
//         c9.addEventListener('click', x);
//     }
//     else if (player_one === 2) {
//         c1.addEventListener('click', o);
//         c2.addEventListener('click', o);
//         c3.addEventListener('click', o);
//         c4.addEventListener('click', o);
//         c5.addEventListener('click', o);
//         c6.addEventListener('click', o);
//         c7.addEventListener('click', o);
//         c8.addEventListener('click', o);
//         c9.addEventListener('click', o);
//     }
//
// }
//
//
//
// playerOneSet();
function checkWinner() {
    console.log('Checking for winner');
    if(bigToe[0].innerText==bigToe[1].innerText &&bigToe[1].innerText ==bigToe[2].innerText && bigToe[2].innerText==="X")
    {
        alert("X wins");
    }

}
