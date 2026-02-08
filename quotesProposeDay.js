const quotesDiv = document.querySelector(".quotes");
const fpNameEl = document.querySelector("#fpname");
const spNameEl = document.querySelector("#spname");

const proposeQuotes = [
  `Our love story is my favorite. Will you make it official and be my forever?`,
  `I'm not a genie, but I can make your dreams come true. Will you be my wish?`,
  `You're the answer to my prayers. Will you make my dreams come true by being mine?`,
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;
    
    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
  })
  .catch(error => console.error('Error loading config:', error));

  const quotesNr = proposeQuotes.length;
    
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = proposeQuotes[i];
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

