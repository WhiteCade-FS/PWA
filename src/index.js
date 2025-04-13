// Imports your SCSS stylesheet
import './styles/index.scss';
import carData from './data/car-dataset.json';

import bgImage from './assets/car-finder-bg.jpg';

document.body.style.backgroundImage = `url(${bgImage})`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundAttachment = 'fixed';

//const yearSelect = document.getElementById('year');
const makeSelect = document.getElementById('make');
const modelSelect = document.getElementById('model');

document.addEventListener('DOMContentLoaded', () => {
  const yearSelect = document.getElementById('year');
  

  const years = [...new Set(carData.map(car => car.year))].sort().reverse();

  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  yearSelect.addEventListener('change', () => {
    const selectedYear = yearSelect.value;

    makeSelect.disabled = false;
    makeSelect.innerHTML = '<option value="">Vehicle Make</option>';
    modelSelect.innerHTML = '<option value="">Vehicle Model</option>';
    modelSelect.disabled = true;

    const makes = [...new Set(carData
      .filter(car => String(car.year) === selectedYear)
      .map(car => car.Manufacturer.charAt(0).toUpperCase() + car.Manufacturer.slice(1).toLowerCase()))].sort();

    makes.forEach(make => {
      const option = document.createElement('option');
      option.value = make;
      option.textContent = make;
      makeSelect.appendChild(option);
    });
  });

  makeSelect.addEventListener('change', () => {
  const selectedYear = yearSelect.value;
  const selectedMake = makeSelect.value;

  modelSelect.disabled = false;
  modelSelect.innerHTML = '<option value="">Vehicle Model</option>';

  const models = [...new Set(carData
    .filter(car =>
      String(car.year) === selectedYear &&
      car.Manufacturer.toLowerCase() === selectedMake.toLowerCase()
    )    
    .map(car => car.model)
  )].sort();

 

  models.forEach(model => {
    const option = document.createElement('option');
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });
});

  modelSelect.addEventListener('change', () => {
  const selectedYear = yearSelect.value;
  const selectedMake = makeSelect.value;
  const selectedModel = modelSelect.value;

  const foundCar = carData.find(car =>
    String(car.year) === selectedYear &&
    car.Manufacturer.toLowerCase() === selectedMake.toLowerCase() &&
    car.model === selectedModel
  );

  console.log('Car Found:', foundCar);
});



});

