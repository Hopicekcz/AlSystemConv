var z = prompt("Zadejte 2 pro převod z desítkové soustavy do dvojkové, nebo 16 pro převod z desítkové soustavy do šestnáctkové.");
var d = 2; //delitel
var h = ""; //pomocnik

if(z=="2"){
 var n = prompt("Zadejte číslo pro převod z desítkové soustavy do dvojkové."); //zakladni cislo
    while (n > 0) {
        
        if(n % d == 1 ){
            h = "1" + h;
        } else {
            h = "0" + h;
        }

        n = Math.floor(n/d);
    }   
console.log(h);
}

if(z=="16"){

}



