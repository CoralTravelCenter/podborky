/**
 * Универсальная функция поиска объекта в массиве по значению указанного ключа
 *
 * @param {Array<Object>} array - массив объектов
 * @param {string} key - имя ключа (свойства), по которому искать
 * @param {*} value - значение, которое нужно найти
 * @param {boolean} [strict=true] - строгая проверка (===) или нестрогая (==)
 * @returns {Object|null} - найденный объект или null, если не найден
 */
export function findObjectByValue(array, key, value, strict = true) {
  if (!Array.isArray(array) || !key) return null;

  for (const obj of array) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      if (strict ? obj[key] === value : obj[key] === value) {
        return obj;
      }
    }
  }
  return null;
}
