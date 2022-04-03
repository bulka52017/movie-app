import { IMockServiceData } from "../mockData/mockData";

export function fetchMovies(
  serviceData: IMockServiceData[],
  category: string,
  withError?: boolean
) {
  return new Promise<IMockServiceData[]>((resolve, reject) => {
    if (withError) reject("Error while fetching movies");
    const movies = serviceData.filter(
      (item) => item.category === category || item.category.includes(category)
    );

    return setTimeout(() => resolve(movies), 1000);
  });
}
