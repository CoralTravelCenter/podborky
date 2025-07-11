/**
 * Фильтрует локации по запрашиваемым названиям отелей, убирая дубли
 */
export function filterUniqueMatchingHotels(responses, requestedNames) {
  if (!responses?.length || !requestedNames?.length) return [];

  const requestedSet = new Set(
    requestedNames.map(name => name.trim().toUpperCase()).filter(Boolean)
  );
  if (!requestedSet.size) return [];

  const uniqueMap = new Map();

  for (const response of responses) {
    for (const location of response?.result?.locations || []) {
      const normalizedName = location.name.trim().toUpperCase();
      if (requestedSet.has(normalizedName)) {
        uniqueMap.set(location.id, location);
      }
    }
  }

  return Array.from(uniqueMap.values());
}
