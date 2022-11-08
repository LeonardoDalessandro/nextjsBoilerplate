import axios from "axios";
import { TApiServicePayload } from "../..";

import { getConfig } from "./config";

const config = getConfig();

const API = axios.create({
  baseURL: config.baseURL,
  headers: config.headers,
});

type TApiServiceModulePayload = {
  data?: any;
  action: "getItem" | "getList" | "post" | "put" | "delete";
  model: "movie" | "launch";
};

const fetchSpacexApi = async (payload: TApiServiceModulePayload) => {
  const { model, action } = payload;
  const endpoint = config.endpoints[model];

  const fetchApi = {
    getList: await API.get(endpoint),
  };

  try {
    const result = await fetchApi[action];

    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchSpacexApi };

export type { TApiServiceModulePayload };
