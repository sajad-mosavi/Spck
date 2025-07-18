const countryInput = document.getElementById('country')
const cityInput =document.getElementById('city')
countryInput.addEventListener('change',soon)

const cityObj = {
    iran:['shiraz','tehran'],
    irag:['kofe','karbala'],
    us:['shikago','newyork'],
    germany:['1','2']
}

function soon() {
    console.log (countryInput.value);
    cityInput.innerHTML =''
  cityObj[countryInput.value].forEach(function (city) {
      cityInput.innerHTML += `<option value='${city}'>
        ${city}
    </option>`
    console.log (cityInput.value)
  })  
      
}
