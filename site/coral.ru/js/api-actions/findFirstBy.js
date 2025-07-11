/**
 * Находит первый объект в массиве, где поле key строго равно value
 *
 * @param {Array} items - массив объектов
 * @param {string} key - имя поля для поиска
 * @param {*} value - значение для сравнения
 * @returns {object|undefined} - найденный объект или undefined
 */
export function findFirstBy(items, key, value) {
  if (!Array.isArray(items)) {
    throw new Error("Некорректные параметры");
  }

  return items.find(item => item[key] === value);
}
