const charactercount = (sentence) => {

    //const pArr = p.split('');
    //return pArr.length;
    
    var sum = 0

    for (i = 0; i < sentence.length; i++){
        
        sum += 1;
        // if(sentence[i] == '.') break;
    } return sum;
}

console.log(charactercount("I am Ugochukwu."));

const wordCount = (sentence) => {
    var word = '';
    var wordArr = [];
    for(i = 0; i < sentence.length; i++)
    {
        if(sentence[i] == ' ')
        {
            wordArr.push(word);
            word = '';
        }
        else word += sentence[i];

        // console.log(wordArr);

    }

    if(word != '') wordArr.push(word);

    // console.log(wordArr);
    return wordArr.length;

}
console.log(wordCount("I am Ugochukwu."));


const vowelCount = (sentence) => {

    var vowel = ['a', 'e', 'i', 'o', 'u']
    var vowelArr = []

    for (i = 0; i < sentence.length; i++) {
        //if (sentence[i] == 'a' || sentence[i] == 'e' || sentence[i] == 'i' || sentence[i] == 'o' || sentence[i] == 'u') 
        if(vowel.includes(sentence[i].toLowerCase())) vowelArr.push(sentence[i])
       
    }  //return vowelArr ; 
    return vowelArr.length;
}

console.log(vowelCount("I am Ugochukwu."));
