import axios from "axios";
import SlimSelect from 'slim-select';
import "slim-select/dist/slimselect.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.headers.common["x-api-key"] = "live_LGPzLNmcfsIn0lJSb4741HxK6tV5zDOjt6YiVMAivR46ccn3ITJooEWMlPGqPozE";
import {
  fetchBreeds,
  fetchCatByBreed,
  } from './cat-api.js';

  const refs={
    breedSelect:document.querySelector('.breed-select'),
    loader:document.querySelector('.loading'),
    error:document.querySelector('.error'),
    catInfo:document.querySelector('.cat-info'),
  }
  refs.error.classList.add('is-hidden');
  refs.breedSelect.classList.add('is-hidden');
  
  const breedsArray=[];
  fetchBreeds().then(data=>{data.forEach(element => {breedsArray.push({
    text:element.name, value:element.id})});
    refs.breedSelect.classList.remove('is-hidden');
    refs.loader.classList.replace('loading','is-hidden');
    new SlimSelect({
      select: refs.breedSelect,
      data: breedsArray,
      events: {
        afterChange: (element) => {
          const breedId=element[0].value;
          refs.loader.classList.add('is-hidden');
          refs.loader.classList.replace('is-hidden','loading');
          refs.catInfo.classList.add('is-hidden');
        fetchCatByBreed(breedId)
        
      .then(data=>{
        refs.loader.classList.replace('is-hidden','loading');
      refs.catInfo.innerHTML=`<div><h2>${data[0].breeds[0].name}</h2><img src="${data[0].url}" alt="${data[0].breeds[0].name}" width="700"/>
      <p>${data[0].breeds[0].temperament}</p>
      <p class="description">${data[0].breeds[0].description}</p>
      </div>`;
      
      refs.catInfo.classList.remove('is-hidden');
      refs.loader.classList.replace('loading','is-hidden');
    })
      .catch (onError) 
      }
        }
    });
  
      function onError(){
        refs.loader.classList.replace('loading','is-hidden');
        refs.breedSelect.classList.remove('is-hidden');
        refs.catInfo.classList.add('is-hidden');
        Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
      }})
    
  