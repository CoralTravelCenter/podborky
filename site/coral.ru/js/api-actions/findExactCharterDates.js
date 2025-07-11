export function findExactCharterDates(preferredDates, flights) {
  return preferredDates.reduce((acc, date) => {
    const exactCharter = flights.find(
      flight => flight.date === date && flight.flightType === 2
    );
    if (exactCharter) acc.push(exactCharter.date);
    return acc;
  }, [])
}
