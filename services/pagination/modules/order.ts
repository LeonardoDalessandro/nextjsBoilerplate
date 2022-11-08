import { TPaginationPayload } from "..";

type TUpdateOrderPayload = {
  by?: string;
  isDesc?: boolean;
};

const updateOrder = (payload: TPaginationPayload) => {
  const { collection, options } = payload;
  const { order } = options;
  const { by = "id", isDesc = true }: TUpdateOrderPayload = order;

  let items, unsetItems;
  items = [];
  unsetItems = [];

  for (const element of collection) {
    const elementAttributeValue = element[by];

    if (elementAttributeValue === undefined || elementAttributeValue === null) {
      unsetItems.push(element);
    } else {
      items.push(element);
    }
  }

  if (isDesc) {
    const newList = items.sort((val, nextVal) => {
      if (val[by] < nextVal[by]) return -1;
      if (val[by] > nextVal[by]) return 1;

      return 0;
    });

    return [...newList, ...unsetItems];
  } else {
    const newList = items.sort((val, nextVal) => {
      if (val[by] < nextVal[by]) return 1;
      if (val[by] > nextVal[by]) return -1;

      return 0;
    });

    return [...newList, ...unsetItems];
  }
};

export { updateOrder };

export type { TUpdateOrderPayload };
