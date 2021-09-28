// Getting the input and showing the output through this variables
let userInput = document.querySelector('#userInput');
let translateBtn = document.querySelector('#trasnslate-btn');
let showOutput = document.querySelector('#userOutput');

// Adding a event listener to a given button
translateBtn.addEventListener('click',() =>{
    // Making a base url to fetch data 
    var baseURL = `https://api.funtranslations.com/translate/emoji.json?text=${userInput.value}`;    
    // To get translated text we use api fetch method 

    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        var translatedText = data.contents.translated;
        showOutput.innerHTML = translatedText;
    })
    .catch(error => {
        alert("Something wrong with server! try again after some time.")    
        console.log(error.message)
    })
})