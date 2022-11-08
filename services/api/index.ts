// import { fetchOwnApi } from "./modules/own";
import { fetchSpacexApi, TApiServiceModulePayload } from "./modules/spacex";

interface TApiServicePayload extends TApiServiceModulePayload {
  module: "own" | "spacex";
}

const useApiService = async (payload: TApiServicePayload) => {
  const { module = "spacex" } = payload;

  const drivers = {
    // own: await fetchOwnApi({ ...payload }),
    spacex: await fetchSpacexApi({ ...payload }),
  };

  const result = await drivers[module];

  return result;
};

export { useApiService };

export type { TApiServicePayload };
