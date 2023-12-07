/**
 * Плюрализация
 * Возвращает вариант с учётом правил множественного числа под указанную локаль
 * @param value {Number} Число, под которое выбирается вариант формы.
 * @param variants {Object<String>} Варианты форм множественного числа.
 * @example plural(5, {one: 'товар', few: 'товара', many: 'товаров'})
 * @param [locale] {String} Локаль (код языка)
 * @returns {String}
 */
export function plural(value, variants = {}, locale = 'ru-RU') {
  // Получаем фурму кодовой строкой: 'zero', 'one', 'two', 'few', 'many', 'other'
  // В русском языке 3 формы: 'one', 'few', 'many', и 'other' для дробных
  // В английском 2 формы: 'one', 'other'
  const key = new Intl.PluralRules(locale).select(value);
  // Возвращаем вариант по ключу, если он есть
  return variants[key] || '';
}

/**
 * Генератор чисел с шагом 1
 * @returns {Function}
 */
export function codeGenerator(start = 0) {
  return () => ++start;
}

/**
 * Форматирование разрядов числа
 * @param value {Number}
 * @param options {Object}
 * @returns {String}
 */
export function numberFormat(value, locale = 'ru-RU', options = {}) {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function pagesListGenerator(current, max) {
  if (!current || !max) return [];
  let currentPage = 0;
  let pages = {};

  if (current < 3) {
    pages = [1, 2, 3, '...', max];
    currentPage = current
  } else if (current === 3) {
    pages = [1, 2, 3, 4, '...', max];
    currentPage = 3
  } else if (current > 3 && current < max - 2) {
    pages = [1, '...', current - 1, current, current + 1, '...', max];
    currentPage = 4
  } else if (current === max - 2) {
    pages = [1, '...', current - 1, current, current + 1, max];
    currentPage = 4
  } else {
    pages = [1, '...', max - 2, max - 1, max];
    currentPage = 5 - (max - current)
  }
  currentPage -= 1;

  return { pages, currentPage }
}
