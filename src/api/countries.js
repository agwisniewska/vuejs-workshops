import axios from "axios";

export const fetchCountries = async region => {
  try {
    let response = await axios.get(
      `https://restcountries.eu/rest/v2/region/${region}`
    );

    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchCountry = async (country, type = "name") => {
  try {
    const url =
      type === "name"
        ? `https://restcountries.eu/rest/v2/name/${country}`
        : `https://restcountries.eu/rest/v2/alpha/${country}`;
    let response = await axios.get(url);
    return response.data[0];
  } catch (error) {
    return error;
  }
};
