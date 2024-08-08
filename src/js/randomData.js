document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.data-button').forEach(button => {
      button.addEventListener('click', (ev) => {
          const type = ev.target.getAttribute('data-name');
          getData(type);
      });
  });
});

function getData(type) {
  const url = new URL(`https://random-data-api.com/api/v2/${type}`);
  let params = new URLSearchParams();
  params.set('size', 10);
  params.set('response_type', 'json');
  url.search = params;

  fetch(url)
      .then((response) => {
          if (!response.ok) throw new Error('Failed to fetch data');
          return response.json();
      })
      .then(data => {
          if (type === 'users') buildUserHTML(data);
          else if (type === 'addresses') buildAddressesHTML(data);
          else if (type === 'banks') buildBanksHTML(data);
          else if (type === 'appliances') buildAppliancesHTML(data);
          else if (type === 'beers') buildBeerHTML(data);
          else if (type === 'blood_types') buildBloodTypesHTML(data);
          else if (type === 'credit_cards') buildCreditCardsHTML(data);
      })
      .catch(console.warn);
}

function buildBanksHTML(data) {
  let main = document.querySelector('main');
  main.innerHTML = data
      .map(({ bank_name, swift_bic, id }) => {
          return `<div class="card" data-ref="${id}">
              <h3>${bank_name}</h3>
              <p>${swift_bic}</p>
          </div>`;
      })
      .join('');
}

function buildBeerHTML(data) {
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
  let main = document.querySelector('main');
  main.innerHTML = data
      .map(({ first_name, email, id, avatar }) => {
          return `<div class="card" data-ref="${id}">
              <img src="${avatar}" alt="Avatar" />
              <h3>${first_name}</h3>
              <p>${email}</p>
          </div>`;
      })
      .join('');
}

function buildAddressesHTML(data) {
  let main = document.querySelector('main');
  main.innerHTML = data
      .map(({ city, street_address, id }) => {
          return `<div class="card" data-ref="${id}">
              <h3>${city}</h3>
              <p>${street_address}</p>
          </div>`;
      })
      .join('');
}

function buildAppliancesHTML(data) {
  let main = document.querySelector('main');
  main.innerHTML = data
      .map(({brand, equipment, id }) => {
          return `<div class="card" data-ref="${id}">
              <h3>${brand}</h3>
              <p>${equipment}</p>
          </div>`;
      })
      .join('');
}

function buildBloodTypesHTML(data) {
  let main = document.querySelector('main');
  main.innerHTML = data
      .map(({type, group, id }) => {
          return `<div class="card" data-ref="${id}">
              <h3>${type}</h3>
              <p>${group}</p>
          </div>`;
      })
      .join('');
}

function buildCreditCardsHTML(data) {
  let main = document.querySelector('main');
  main.innerHTML = data
      .map(({ credit_card_expiry_date, credit_card_type, id }) => {
          return `<div class="card" data-ref="${id}">
              <h3>${credit_card_expiry_date}</h3>
              <p>${credit_card_type}</p>
          </div>`;
      })
      .join('');
}
