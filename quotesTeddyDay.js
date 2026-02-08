const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const teddyDayQuotes = [
  `You are my cuddly teddy bear,
Who fills my life with love and care`,
  `Just like a Panda, you are soft and warm,
You bring comfort to my heart and calm every storm`,
  `You are my Panda, my forever friend,
With you, my happiness will never end.
Happy Teddy Day, darling!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    
  })
  .catch(error => console.error('Error loading config:', error));

  const quotesCount = teddyDayQuotes.length;

    for (let i = 0; i < quotesCount; i++) {
      const link = document.createElement('a');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = teddyDayQuotes[i];
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