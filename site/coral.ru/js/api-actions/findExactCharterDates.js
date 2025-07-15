export function findFlightByExactDate(preferredDate, flights) {
  console.log(preferredDate, flights)
  return flights.find(flight => flight.date === preferredDate) || null;
}
