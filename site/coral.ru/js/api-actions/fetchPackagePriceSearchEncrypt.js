import {doRequestToServer, PACKAGE_ENDPOINTS} from "../api";

export async function fetchPackagePriceSearchEncrypt(arrivalLocations, targetFlightDate, targetNights) {
  console.log(targetFlightDate)
  console.log(targetNights.value)
  const body = {
    searchSource: 0,
    searchCriterias: {
      flightType: 2,
      reservationType: 1,
      beginDates: [targetFlightDate.date],
      datePickerMode: 0,
      nights: [{value: targetNights.value}],
      roomCriterias: [
        {
          passengers: [
            {age: 20, passengerType: 0},
            {age: 20, passengerType: 0}
          ]
        }
      ],
      departureLocations: [
        {
          id: "2671-5",
          name: "Москва",
          type: 5,
          friendlyUrl: "moskva"
        }
      ],
      arrivalLocations: arrivalLocations,
      paging: {
        pageNumber: 1,
        pageSize: 20,
        sortType: 0
      },
      imageSizes: [0],
      categories: [],
      additionalFilters: [],
      advancedParameters: {
        selectedFlightNight: targetNights.value,
        selectedNight: targetNights.value,
        selectedBeginDate: targetFlightDate.date,
        departureLocation: {
          id: "2671-5",
          name: "Москва",
          type: 5,
          friendlyUrl: "moskva"
        }
      }
    },
  };

  return await doRequestToServer(
    PACKAGE_ENDPOINTS.PRICE_SEARCH_LIST,
    body,
    "POST"
  );
}
