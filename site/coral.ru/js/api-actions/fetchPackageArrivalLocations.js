import {doRequestToServer, PACKAGE_ENDPOINTS} from "../api";
import {filterUniqueMatchingHotels} from "./filterUniqueMatchingHotels";

function mapCountryLocation(item) {
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
 * @param {string[]} hotelsNames
 * @returns {Promise<Array>}
 */
export async function fetchPackageArrivalLocations(hotelsNames) {
  const processedLocations= [];

  const responses = await Promise.all(hotelsNames.map(el => {
    return doRequestToServer(
      PACKAGE_ENDPOINTS.LIST_ARRIVAL_LOCATIONS,
      {
        departureLocations: [{
          id: '2671-5',
          name: 'Москва',
          type: 5,
          friendlyUrl: 'moskva'
        }],
        text: el
      },
      "POST"
    )
  }))

  const uniqHotels = filterUniqueMatchingHotels(responses, hotelsNames)
  return uniqHotels.map(el => mapCountryLocation(el))
}
