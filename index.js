const apiUrlAll = 'https://restcountries.com/v2/all';
const apiUrlSearch = 'https://restcountries.com/v2/name/';
const countryInfoElement = document.getElementById('countryCont');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

async function loadAllCountries() {
  fetch(apiUrlAll)
    .then((response) => response.json())
    .then((data) => {
      countryInfoElement.innerHTML = '';
      data.forEach((country) => {
        const name = country.name;
        const capital = country.capital;
        const population = country.population;
        const area = country.area;
        const region = country.region;
        const flag = country.flags.png;

        countryInfoElement.innerHTML += `
          <div class="boxDescription">
            <img src="${flag}" alt="${name}" />
            <p class="titleInfo">Nombre: "${name}"</p>
            <p class="descriptionInfo">Capital: "${capital}"</p>
            <p class="descriptionInfo">Población: "${population}"</p>
            <p class="descriptionInfo">Área: "${area} km²"</p>
            <p class="descriptionInfo">Región: "${region}"</p>
          </div>
        `;
      });
    })
    .catch((error) => console.error('Error al cargar países:', error));
}

loadAllCountries()

searchButton.addEventListener('click', () => {
  const searchText = searchInput.value.trim();
  if (searchText) {
    fetch(apiUrlSearch + encodeURIComponent(searchText))
      .then((response) => response.json())
      .then((data) => {
        countryInfoElement.innerHTML = '';
        data.forEach((country) => {
          const name = country.name;
          const capital = country.capital;
          const population = country.population;
          const area = country.area;
          const region = country.region;
          const flag = country.flags.png;

          countryInfoElement.innerHTML += `
            <div class="boxDescription">
              <img src="${flag}" alt="${name}" />
              <p class="titleInfo">NOMBRE: "${name}"</p>
              <p class="descriptionInfo">CAPITAL: "${capital}"</p>
              <p class="descriptionInfo">POBLACIÓN: "${population}"</p>
              <p class="descriptionInfo">ÁREA: "${area} km²"</p>
              <p class="descriptionInfo">REGIÓN: "${region}"</p>
            </div>
          `;
        });
      })
      .catch((error) => console.error('Error al buscar información:', error));
  }
});

