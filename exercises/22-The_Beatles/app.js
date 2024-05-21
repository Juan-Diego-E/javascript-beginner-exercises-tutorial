function sing() {
    let itBe = "";
    for(let i = 0; i < 11; i++){
        if(i === 4) itBe += 'there will be an answer, ';
        else if(i === 10) itBe += 'whisper words of wisdom, let it be';
        else itBe += 'let it be, ';
    }
    return itBe
}

//Your code above ^^^

console.log(sing());