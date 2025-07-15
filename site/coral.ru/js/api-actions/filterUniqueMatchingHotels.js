/**
 * Фильтрует локации по запрашиваемым названиям отелей, убирая дубли
 */
export function filterUniqueMatchingHotels(response, requestedName) {
  if (!response?.result?.locations?.length || !requestedName?.trim()) return [];

  const normalizedRequested = requestedName.trim().toUpperCase();

  const uniqueMap = new Map();

  for (const location of response.result.locations) {
    const normalizedName = location?.name?.trim().toUpperCase();
    if (normalizedName === normalizedRequested) {
      uniqueMap.set(location.id, location);
    }
  }

  return Array.from(uniqueMap.values());
}
