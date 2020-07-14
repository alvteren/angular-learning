import { Params } from "@angular/router";
import { TypesArrayConverting } from "./toQueryParams.model";

const convertArray = (
  key: string,
  value: any[],
  typeArray: TypesArrayConverting
) => {
  switch (typeArray) {
    case 'commas':
      return `${key}=${encodeURIComponent(value.join(','))}`;
    case 'array':
      return value.map(v => `${key}[]=${encodeURIComponent(v)}`).join('&');
    case 'double':
      return value.map(v => `${key}=${encodeURIComponent(v)}`).join('&');
  }
};

/**
 * Вспомогательная функция для конвертации объекта без вложенных объектов в GET-параметры
 * значения параметров должны быть числа, строки, массивы элементами которого числа, строки.
 * То же самое про объект. Объект превращается в массив
 * Массив конвертируется в строку разделенную запятыми brands = [1,2,3] -> brands=1,2,3
 * @param typeArray - тип конвертации массива
 *  'commas' - в строку разделенную запятыми brands = [1,2,3] -> brands=1,2,3,
 *  'array' - brands = [1,2,3] -> brands[]=1&brands[]=2brands[]=3
 *  'double' - brands = [1,2,3] -> brands=1&brands=2&brands=3
 */
export const toQueryParams = (
  params: Params,
  typeArray: TypesArrayConverting = 'array'
): string => {
  const computedParams: Params = Object.keys(params).reduce(
    (res, key: string) => {
      const param = params[key];
      const value =
        typeof param === 'object' && param !== null
          ? Object.values(param)
          : param;
      // чтобы булевые параметры со значение false попадали в сгенерированную строку
      return !value && value !== false && value !== 0
        ? res
        : { ...res, [key]: value };
    },
    {}
  );

  return Object.keys(computedParams)
    .map(key => {
      const value = computedParams[key];
      return Array.isArray(value) && value.length
        ? convertArray(key, value, typeArray)
        : `${key}=${encodeURIComponent(value)}`;
    })
    .join('&');
};
