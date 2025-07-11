import {doRequestToServer, PACKAGE_ENDPOINTS} from "../api";
import {DEFAULT_DEPARTURE, DEFAULT_DEPARTURE_FRIENDLY, DEFAULT_DEPARTURE_ID} from "../data";
import {filterUniqueMatchingHotels} from "./filterUniqueMatchingHotels";

/**
 * Преобразует данные локации в стандартизированный формат
 */
function mapLocation(item) {
  return {
    id: item.id,
    name: item.name,
    friendlyUrl: item.friendlyUrl,
    type: item.type,
    parent: item.parent,
    children: item.children || [],
  };
}

/**
 * Получает arrival локации для PackageTour на основе названий отелей
 * с финальной фильтрацией по запрашиваемым именам
 *
 * @param {string[]} hotelNames
 * @returns {Promise<Array>}
 */
export async function fetchPackageArrivalLocations(hotelNames) {
  if (!hotelNames.length) {
    throw new Error("Hotel names array cannot be empty");
  }


  const requests = hotelNames.map(name => {
      return doRequestToServer(
        PACKAGE_ENDPOINTS.LIST_ARRIVAL_LOCATIONS,
        {
          departureLocations: [{
            id: DEFAULT_DEPARTURE_ID,
            name: DEFAULT_DEPARTURE,
            type: 5,
            friendlyUrl: DEFAULT_DEPARTURE_FRIENDLY
          }],
          text: name
        },
        "POST"
      )
    }
  );

  const responses = await Promise.all(requests);

  // фильтруем строго по нужным названиям отелей и убираем дубли
  const filtered = filterUniqueMatchingHotels(responses, hotelNames);

  // и приводим к финальному виду
  return filtered.map(mapLocation);
}
