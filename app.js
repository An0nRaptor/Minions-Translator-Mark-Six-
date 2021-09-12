var url = "https://api.funtranslations.com/translate/minion.json";

var inputTextValue = document.querySelector("#textbox_input");
var translatorBtn = document.querySelector("#translate_btn");
var outputValue = document.querySelector("#textbox_output");

translatorBtn.addEventListener("click", ClickHandler);

function ClickHandler() {
  var inputText = inputTextValue.value;

  var finalValue = buildFinalURL(inputText);

  console.log("final", finalValue);

  fetch(finalValue)

    .then((response) => response.json())

    .then((json) => {

      var translatedText = json.contents.translated;
      outputValue.innerText = translatedText;
      console.log("Translated Text ", translatedText);
   
    })
    .catch((error) => {
      var errorText = "Some error occured in the server.\nPlease try again";
      alert(errorText);
      console.log("Error Occured:\n" + error);
    });
}

function buildFinalURL(input) {
  var encodedurl = encodeURI(input);
  console.log("encodedurl", encodedurl);
  return `${url}?text=${encodedurl}`;
}
