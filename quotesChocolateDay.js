const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const chocolateDayQuotes = [
  `You are the sweetest part of my life, just like chocolate.`,
  `चॉकलेट की तरह मीठी हो तुम,
  चॉकलेट की तरह प्यारी हो तुम,
  चॉकलेट डे पर यही दुआ है,
  तुम हमेशा खुश रहो और मुस्कुराती रहो!
  हैप्पी चॉकलेट डे!`,
  `Do I have your permission to send to chocolate to your heart? Happy Chocolate Day, my love!`,
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

  })
  .catch(error => console.error('Error loading config:', error));

  // Build quote links from chocolateDayQuotes.
    const quotesNr = chocolateDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = chocolateDayQuotes[i];
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