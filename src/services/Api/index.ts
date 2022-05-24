import axios from "axios";
import qs from "qs";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});
