var squares= document.querySelectorAll("td");
//
// function winnerX()
// {
//     if ();
//     {
//
//     }
//
// }
// function winnerO()
// {
//     if ();
//     {
//
//     }
//
// }








var theButton3 = document.getElementById("button3");
theButton3.addEventListener("click", clearBoard);// that when clicked sets value of the first two buttons back at 0

//
// function resetFunction()
//
// {
//     a = 0;
//     // document.getElementById("RESET").innerHTML = a;
//     clearBoard();
// }

function clearBoard()
{
for  (i=0;i<squares.length;i++)
  {
    squares[i].innerText="";
    }
}