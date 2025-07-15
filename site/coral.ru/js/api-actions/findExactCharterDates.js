export function findFlightByExactDate(preferredDate, flights) {
  return flights.find(flight => flight.date === preferredDate) || null;
}
