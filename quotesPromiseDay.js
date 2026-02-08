const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const promiseDayQuotes = [
  `I promise to love you forever,
And stand by you through every pain and pleasure.`,
  `I promise to be your strength and guide,
And always walk by your side`,
  `I promise to love you more with each passing day,
And never let you go away.
Happy Promise Day, sweetheart!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from the configuration
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;
    
    
    
  })
  .catch(error => console.error('Error loading config:', error));

  const quotesNr = promiseDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = promiseDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });