import { IMockServiceData } from "../mockData/mockData";

// this implementation is only for presentation
// assuming that the API will be provided later in the future I would consider some mapping functions
// I.E. for Netflix I would create function mapNetflixResponseApi(), which will map their response to schema required in presentational components,
export function fetchServiceCategory(serviceData: IMockServiceData[]) {
  return new Promise<string[]>((resolve) => {
    const categories = serviceData
      .map((item) =>
        typeof item.category === "string" ? [item.category] : [...item.category]
      )
      .flat(1);
    return setTimeout(() => resolve(categories), 1000);
  });
}
