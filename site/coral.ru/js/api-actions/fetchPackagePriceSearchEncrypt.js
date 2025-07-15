import {doRequestToServer, PACKAGE_ENDPOINTS} from "../api";

export async function fetchPackagePriceSearchEncrypt(arrivalLocation, targetDate, targetNights) {
  
  const body = {
    searchSource: 0,
    searchCriterias: {
      flightType: 2,
      reservationType: 1,
      beginDates: [targetDate],
      datePickerMode: 0,
      nights: [{value: targetNights}],
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
      arrivalLocations: [arrivalLocation],
      paging: {
        pageNumber: 1,
        pageSize: 20,
        sortType: 0
      },
      imageSizes: [4],
      categories: [],
      additionalFilters: [],
    },
  };
  return doRequestToServer(
    PACKAGE_ENDPOINTS.PRICE_SEARCH_LIST,
    body,
    "POST"
  );
}
