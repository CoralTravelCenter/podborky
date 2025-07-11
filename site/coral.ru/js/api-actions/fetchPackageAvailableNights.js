import {doRequestToServer, PACKAGE_ENDPOINTS} from "../api";

export function fetchPackageAvailableNights(arrivalLocations, availableDatesResponse) {
  if (!arrivalLocations.length) {
    throw new Error("Arrival locations array cannot be empty");
  }

  const body = {
    flightType: availableDatesResponse.flightType,
    beginDates: [availableDatesResponse.date],
    calculateAvailableNightRanges: true,
    departureLocations: [{
      id: "2671-5",
      name: "Москва",
      type: 5,
      friendlyUrl: "moskva"
    }],
    arrivalLocations
  };

  return doRequestToServer(
    PACKAGE_ENDPOINTS.LIST_AVAILABLE_NIGHTS,
    body,
    "POST"
  );
}
