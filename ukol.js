var z = prompt("Zadejte 10 pro převod z desítkové soustavy do dvojkové a šestnáckové, 2 pro převod z dvojkové soustavy do desítkové a šestnáctkové, nebo 16 pro převod z šestnáctkové soustavy do dvojkové a desítkové. ");
var h = ""; //pomocnik

 if(z == 10);{
    var n = prompt("Zadejte číslo pro převod z desítkové soustavy do dvojkové a šestnáctkové."); //zakladni cislo
    var d = 2; //delitel
    var m = n; //pamet zakladniho cisla
    while (n > 0) {
        
        if(n % d == 1 ){
            h = "1" + h;
        } else {
            h = "0" + h;
        }

        n = Math.floor(n/d);
    }
console.log(m);   
console.log(h);
n = m;
d = 16;
h = "";
    var s = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    while (n>0) {
        h = s[n%d] + h;
        n /= d;
        n = Math.floor(n);
    }
    console.log(h);


 } else if(z == 2) {
    var n = prompt("Zadejte číslo pro převod z dvojkové soustavy do desítkové a šestnáctkové.")
    var d = 2;
    var m = n;
    h = 1;
    l = n.length - 1


 }
