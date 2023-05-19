/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    console.log("Window Loaded!");
    let b1 = document.getElementById("encrypt-it");
    let result = document.getElementById("result");  
    b1.addEventListener("click", handleClick);

    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    //change textarea to result
    let text = document.getElementById("input-text").value;
    result.value = text;

  }

  function handleClick() {
    console.log("Button Clicked");
    let text = document.getElementById("input-text").value;
    text = text.toLowerCase();
    let result = shiftCipher(text);
    document.getElementById("result").textContent = result;
    
  }
  
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();
