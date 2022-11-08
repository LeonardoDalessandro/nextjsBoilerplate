import { setFormat } from "./modules/format";
import { TUpdateOrderPayload, updateOrder } from "./modules/order";
import { setSubset, TSetSubsetPayload } from "./modules/subset";

type TPaginationPayload = {
  collection: any[];
  options?: {
    pagination?: TSetSubsetPayload;
    order?: TUpdateOrderPayload;
  };
};

const usePaginationService = (payload: TPaginationPayload) => {
  const { collection, options } = payload || {};
  const { pagination, order } = options || {};

  let newSet;
  newSet = [...collection];

  if (order) {
    newSet = [...updateOrder({ options, collection: newSet })];
  }

  if (pagination) {
    newSet = [...setSubset({ options, collection: newSet })];
  }

  const result = setFormat({ options, collection: newSet });

  return result;
};

export { usePaginationService };

export type { TPaginationPayload };
