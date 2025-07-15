import {doRequestToServer, PACKAGE_ENDPOINTS} from "../api";
import {filterUniqueMatchingHotels} from "./filterUniqueMatchingHotels";


/**
 * Получает arrival локации для PackageTour на основе названий отелей
 * с финальной фильтрацией по запрашиваемым именам
 *
 * @param {string} hotelName
 * @returns {Promise<Array>}
 */
export async function fetchPackageArrivalLocations(hotelName) {
  const response = await doRequestToServer(
    PACKAGE_ENDPOINTS.LIST_ARRIVAL_LOCATIONS,
    {
      departureLocations: [{
        id: '2671-5',
        name: 'Москва',
        type: 5,
        friendlyUrl: 'moskva'
      }],
      text: hotelName
    },
    "POST"
  )

  const filtered = filterUniqueMatchingHotels(response, hotelName);
  return {
    id: filtered[0].id,
    name: filtered[0].name,
    friendlyUrl: filtered[0].friendlyUrl,
    type: filtered[0].type,
    parent: filtered[0].parent,
    children: filtered[0].children || [],
  };
}
