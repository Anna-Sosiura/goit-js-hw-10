import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_LGPzLNmcfsIn0lJSb4741HxK6tV5zDOjt6YiVMAivR46ccn3ITJooEWMlPGqPozE";

axios.defaults.baseURL = 'https://api.thecatapi.com/';

export async function fetchBreeds() {
      const { data } = await axios('v1/breeds');
      return data;
  };

  export async function fetchCatByBreed(breedId) {
    
      const { data } = await axios(`v1/images/search?breed_ids=${breedId}`);
      return data;
  };



