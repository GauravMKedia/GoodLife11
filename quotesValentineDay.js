const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const roseDay = [
  `You are my forever Valentine,
  The one who makes my heart shine.`,
  `You are the reason I believe in love,
  You are my blessing from above.
  Will you be mine this Valentine's Day?`,
  `You are my dream come true,
  My forever Valentine, only you.
  Happy Valentine's Day, Panda!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;
    
    
  })
  .catch(error => console.error('Error loading config:', error));

  const quotesNr = roseDay.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=valentine');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = roseDay[i];
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