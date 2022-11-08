import { TPaginationPayload } from "../";
import { TSetSubsetPayload } from "./subset";
import { TUpdateOrderPayload } from "./order";

type TPaginationFormat = {
  request: {
    pagination: TSetSubsetPayload;
    order: TUpdateOrderPayload;
  };
  data: any[];
};

const setFormat = (payload: TPaginationPayload): TPaginationFormat => {
  const { collection, options } = payload || {};
  const { pagination, order } = options || {};
  const { requested = 1, itemsPerPage = 10, offset = 0 } = pagination || {};
  const { by = "id", isDesc = true } = order || {};

  return {
    request: {
      pagination: {
        requested: requested ? requested : 1,
        itemsPerPage: itemsPerPage ? itemsPerPage : 10,
        offset: offset ? offset : 0,
        total: Math.ceil(collection.length / itemsPerPage),
      },
      order: {
        by: by ? by : "id",
        isDesc: isDesc,
      },
    },
    data: collection,
  };
};

export { setFormat };

export type { TPaginationFormat };
