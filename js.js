    
function hidecontainer1() {
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "none";
}
window.onload = hidecontainer1;

let words = []
function getInput() {   
    document.getElementById("container1").style.display = "block";
    document.getElementById("container").style.display = "none";
  for (let i = 0; i < 3; i++) {
  let userInput = prompt("Enter the word");
    words.push(userInput)
}

for (let j = 0; j < words.length; j++) {
       wordsList = "<li>" + words[j] + "</li>";
       document.getElementById("wordsList").innerHTML += wordsList;
  }
}




function switchLetters() {

    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "block";
    
        let arraySwapped = words.map(n => swapLetters(n));

            function swapLetters(anyWord){

            const iterator = anyWord;
          
            const str = iterator;
            const l = str.length;
            const firstChar = str.substring(0, 1);
            const lastChar = str.substring(l-1, l);

           function replaceLast(find, replace, string) {
            const lastIndex = string.lastIndexOf(find);
            
            if (lastIndex === -1) {
                return string;
            }
            
            const beginString = string.substring(0, lastIndex);
            const endString = string.substring(lastIndex + find.length);
            
            return beginString + replace + endString;
        }




        const tempNewWord1 = iterator.replace(firstChar, "*");
        const tempNewWord2 = replaceLast(lastChar, firstChar, tempNewWord1);
        const tempNewWord3= tempNewWord2.replace("*", tempNewWord1.substring(l-1, l));
          return tempNewWord3;

        }

    for (let j = 0; j < arraySwapped.length; j++) {
       swapLetterList = "<li>" + arraySwapped[j] + "</li>";
       document.getElementById("wordsListSwapped").innerHTML += swapLetterList;
    }

}


