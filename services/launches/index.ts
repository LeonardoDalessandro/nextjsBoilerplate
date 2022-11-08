import { useApiService } from "../api";
import { usePaginationService } from "../pagination";

type TLaunch = {
  name: string;
  date: Object;
  success: boolean;
};

const setLeanList = (payload: { list: any[] }): TLaunch[] => {
  const { list = [] } = payload;

  return list.map((item) => ({
    id: item.id,
    name: item.name,
    date: item.date_utc,
    success: item.success,
  }));
};

const getLaunches = async () => {
  const result = await useApiService({
    module: "spacex",
    model: "launch",
    action: "getList",
  });

  if (!result && result.length > 0) return [];

  const firstPage = usePaginationService({
    collection: [...result],
    options: {
      pagination: {
        requested: 1,
        itemsPerPage: 10,
      },
    },
  });

  const leanList = setLeanList({ list: firstPage.data });

  return leanList;
};

export { getLaunches };
