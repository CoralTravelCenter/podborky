import {doRequestToServer, PACKAGE_ENDPOINTS} from "../api";

export function fetchPackageAvailableNights(arrivalLocation, availableDate) {
  const body = {
    flightType: 2,
    beginDates: [
      availableDate
    ],
    calculateAvailableNightRanges: true,
    departureLocations: [{
      id: "2671-5",
      name: "Москва",
      type: 5,
      friendlyUrl: "moskva"
    }],
    arrivalLocations: [arrivalLocation]
  };

  return doRequestToServer(
    PACKAGE_ENDPOINTS.LIST_AVAILABLE_NIGHTS,
    body,
    "POST"
  );
}
