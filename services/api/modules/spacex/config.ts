export const getConfig = () => ({
  baseURL: "https://api.spacexdata.com/v5",
  headers: {
    "Content-Type": "application/json",
  },
  endpoints: {
    launch: "/launches",
  },
});
