import {doRequestToServer, PACKAGE_ENDPOINTS} from "../api";

/**
 * Выполняет запрос к API PackageTour для получения доступных дат
 *
 * @param arrivalLocations - Локации прибытия, полученные ранее
 * @returns Promise с ответом от API (список доступных дат)
 * @throws Error если API вернул ошибку
 */

export async function fetchPackageAvailableDates(arrivalLocations) {
  if (!arrivalLocations.length) {
    throw new Error("Arrival locations array cannot be empty");
  }

  const body = {
    departureLocations: [{
      id: "2671-5", // либо получай из конфига/контекста
      name: "Москва",
      type: 5,
      friendlyUrl: "moskva"
    }],
    arrivalLocations
  };

  return await doRequestToServer(
    PACKAGE_ENDPOINTS.LIST_AVAILABLE_DATES,
    body,
    "POST"
  );
}
