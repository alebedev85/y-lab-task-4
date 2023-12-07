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

export function pagesListGenerator(currentPageIndex, totalPages) {
  if (!currentPageIndex || !totalPages) return [];
  let currentPage;
  let pages;

  if (currentPageIndex < 3) {
    pages = [1, 2, 3, '...', totalPages];
    currentPage = currentPageIndex
  } else if (currentPageIndex === 3) {
    pages = [1, 2, 3, 4, '...', totalPages];
    currentPage = 3
  } else if (currentPageIndex > 3 && currentPageIndex < totalPages - 2) {
    pages = [1, '...', currentPageIndex - 1, currentPageIndex, currentPageIndex + 1, '...', totalPages];
    currentPage = 4
  } else if (currentPageIndex === totalPages - 2) {
    pages = [1, '...', currentPageIndex - 1, currentPageIndex, currentPageIndex + 1, totalPages];
    currentPage = 4
  } else {
    pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
    currentPage = 5 - (totalPages - currentPageIndex)
  }
  currentPage -= 1;

  return { pages, currentPage }
}
