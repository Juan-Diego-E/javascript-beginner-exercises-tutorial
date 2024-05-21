// Your code here:
function song(){
    for(let b = 99; b >= 0; b--){
        if (b == 1) {
            console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        } else if (b == 0) {
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
        } else if (b== 2) {
            console.log(`${b} bottles of milk on the wall, ${b} bottles of milk. Take one down and pass it around, ${b-1} bottle of milk on the wall.`);
        } else {
            console.log(`${b} bottles of milk on the wall, ${b} bottles of milk. Take one down and pass it around, ${b-1} bottles of milk on the wall.`);
        }
    }
}

song();