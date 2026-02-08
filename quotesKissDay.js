const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const kissDayQuotes = [
  `Kiss is my language of love, and your lips are my favorite words.`,
  `A kiss from you is all I need,
To feel loved and freed`,
  `Will you let me kiss on your forehead,
and keep you safe forever.
Happy Kiss Day, my love!`,
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    
    
  })
  .catch(error => console.error('Error loading config:', error));

  // Build quote links from kissDayQuotes
    const quotesNr = kissDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = kissDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    // Add click listener on each quote to save the chosen quote to localStorage.
    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });