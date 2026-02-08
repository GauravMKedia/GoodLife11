// First, fetch the configuration data.
const hugDayQuotes = [
      `A hug is a way to say, "I care,"
A hug is a way to show, "I'm there."`,
      `A hug from you is all I need,
To feel loved and freed.`,
      `A hug from you take all my pain away,
It make me feel I am never alone.
Happy Hug Day, my Baby!`
    ];
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Use the configuration values
    const fpNameEl = document.querySelector("#fpname");
    const spNameEl = document.querySelector("#spname");
    
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;

    
  })
  .catch(error => {
    console.error('Error loading config:', error);
  });

  const quotesDiv = document.querySelector(".quotes");

    
    
    const quotesNr = hugDayQuotes.length;

    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = hugDayQuotes[i];
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