import { TPaginationPayload } from "..";

type TSetSubsetPayload = {
  requested?: number;
  itemsPerPage?: number;
  offset?: number;
  total?: number;
};

const setSubset = (payload: TPaginationPayload) => {
  const { collection, options } = payload;
  const { pagination } = options;
  const {
    requested = 1,
    itemsPerPage = 10,
    offset = 0,
  }: TSetSubsetPayload = pagination;

  let pages;
  pages = [];

  const dataLength = collection.length;

  for (let i = 0; i < dataLength; i += itemsPerPage) {
    const chunk = collection.slice(i, i + itemsPerPage);
    pages.push(chunk);
  }

  if (offset > 0) {
    const affectedPageIndex = Math.ceil(offset / itemsPerPage) - 1;

    pages[affectedPageIndex] = [
      ...collection.slice(offset - 1, offset - 1 + itemsPerPage),
    ];
  }

  return pages[requested - 1];
};

export { setSubset };

export type { TSetSubsetPayload };
