document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', getData);
  });
  
  function getData(ev) {
    //get some data from the random-data-api
    const type = 'banks'; // beers users credit_cards  addresses
    const url = new URL(`https://random-data-api.com/api/v2/${type}`);
    let params = new URLSearchParams();
    //size - number of records to return (default is 1)
    //response_type - json or xml (default is json)
    params.set('size', 10);
    params.set('response_type', 'json');
    url.search = params;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Bad things happened');
        return response.json();
      })
      .then(buildUserHTML)
      .catch(console.warn);
  }
  
  function buildBeerHTML(data) {
    console.log(data);
    let main = document.querySelector('main');
    main.innerHTML = data
      .map(({ name, style, id, alcohol }) => {
        return `<div class="card" data-ref="${id}">
        <span class="alcohol">${alcohol}</span>
        <h3>${name}</h3>
        <p>${style}</p>
      </div>`;
      })
      .join('');
  }
  
  function buildUserHTML(data) {
    console.log(data);
    let main = document.querySelector('main');
    //build the cards for the users
    main.innerHTML = data
      .map(({ first_name, email, id, avatar }) => {
        return `<div class="card" data-ref="${id}">
        <img src="${avatar}" alt="robohash api" />
        <h3>${first_name}</h3>
        <p>${email}</p>
      </div>`;
      })
      .join('');
  }