const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const roseDay = [
    `You are a Rose of My Dream,
    You are a Rose of My Heart,
    You are a Rose of My Smile,
    You are a Rose of My Life...
    HAPPY ROSE DAY!`,
    `Rose Day is not just about giving roses,
    It's another day for me to show my love for you.
    Take this rose as a gesture of my love,
    Wishing you a Happy Rose Day!`,
    `Of all the attractive flowers on this planet, a rose is undoubtedly the most beautiful one. And, so are you, my panda! Happy Rose Day!`
];

// Fetch configuration from config.json to set names.
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    debugger;
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;
    
  })
  .catch(error => console.error('Error loading config:', error));

const quotesNr = roseDay.length;

for (let i = 0; i < quotesNr; i++) {
  const link = document.createElement('a');
  const para = document.createElement("p");
  para.classList.add("quote");
  para.innerText = roseDay[i];
  link.appendChild(para);
  quotesDiv.appendChild(link);
}

// Add click listener to save the chosen quote to localStorage.
const quoteDivs = document.querySelectorAll(".quote");
quoteDivs.forEach(quote => {
  quote.addEventListener('click', function (e) {
    const chosenQuote = e.target.innerText;
    localStorage.setItem("chosenQuote", chosenQuote);
  });
});

