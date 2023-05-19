

// increases the fontSize to 24pt
function increaseFontSize(){
    alert("Hello, world!");
    document.getElementById("input-text1").style.fontSize = "24pt";
}

// Handler that triggers when user clicks a radio button
function handleChange(){
    alert("A Radio Button has been clicked!");
}

// fancifies the text in the fieldset box
function fancyShmancyHandler(){
    const fancyShmancyElem =  document.getElementById("input-text1");
    fancyShmancyElem.style.textDecoration = "underline";
    fancyShmancyElem.style.color = "blue";
    fancyShmancyElem.style.fontWeight = "bold";
}

// Normalizes the text in the fieldset box
function boringBettyHandler(){
    const boringBettyElem =  document.getElementById("input-text1");
    boringBettyElem.style.textDecoration = "none";
    boringBettyElem.style.color = "black";
    boringBettyElem.style.fontWeight = "normal";
}


// appends "-moo" to the end of the string in the fieldset box
function mooActions() {
    const text = document.getElementById("input-text1");
    const words = text.value.split(" ");
    const lastWord = words.pop();
    const modifiedText = `${words.join(" ")} ${lastWord}-Moo`;
    text.value = modifiedText.toUpperCase();  
  }
  