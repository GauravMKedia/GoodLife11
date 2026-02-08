document.addEventListener('DOMContentLoaded', function () {
  // Set the chosen quote from local storage.
  const chosenQuote = document.querySelector("#chosenQuote");
  const storageQuote = localStorage.getItem("chosenQuote");
  chosenQuote.innerText = storageQuote;

  // Fetch configuration and set names.
  fetch('config.json')
    .then(response => response.json())
    .then(config => {
      const spNameStored = config.spName;
      const fpNameStored = config.fpName;
    
      const spNameWritten = document.querySelector("#spName");
      const fpNameWritten = document.querySelector("#fpName");
      
      spNameWritten.innerText = spNameStored.toLowerCase();
      fpNameWritten.innerText = fpNameStored.toLowerCase();
    })
    .catch(error => console.error('Error loading config:', error));
});
