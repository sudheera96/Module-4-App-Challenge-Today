
function add(x, y) {
    x = document.getElementById(x).value;
    y = document.getElementById(y).value;
   
    var add = 0;
    add = Number(x) + Number(y) ;
    alert("SUM is: " + add);
document.getElementById('sum').innerHTML="SUM is:" +add;


}





