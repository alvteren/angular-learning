import toQueryParams from './toQueryParams';

describe('toQueryParams вариант конвертации массива commas', () => {
  it('массив в параметрах', () => {
    const params = {
      param1: 1,
      param2: '2',
      param3: [1, 2, 3],
      param4: ['1', '2', '3'],
    };

    expect(toQueryParams(params, 'commas')).toBe(
      'param1=1&param2=2&param3=1%2C2%2C3&param4=1%2C2%2C3'
    );
  });

  it('объект в параметрах', () => {
    const params = {
      param1: 1,
      param2: '2',
      param3: {
        prop1: 1,
        prop2: 2,
        prop3: 3,
      },
    };

    expect(toQueryParams(params, 'commas')).toBe(
      'param1=1&param2=2&param3=1%2C2%2C3'
    );
  });

  it('пустой объект в параметрах', () => {
    const params = {};

    expect(toQueryParams(params, 'commas')).toBe('');
  });
});

describe('toQueryParams вариант конвертации массива array', () => {
  it('массив в параметрах', () => {
    const params = {
      param1: 1,
      param2: '2',
      param3: [1, 2, 3],
    };

    expect(toQueryParams(params, 'array')).toBe(
      'param1=1&param2=2&param3[]=1&param3[]=2&param3[]=3'
    );
  });

  it('булевые параметры, false должен быть в сгенерированной строке, null и undefined должны отсутствовать', () => {
    const params = {
      param1: true,
      param2: false,
      param3: null,
      param4: undefined,
    };

    expect(toQueryParams(params, 'array')).toBe('param1=true&param2=false');
  });

  it('объект в параметрах', () => {
    const params = {
      param1: 1,
      param2: '2',
      param3: {
        prop1: 1,
        prop2: 2,
        prop3: 3,
      },
    };

    expect(toQueryParams(params, 'array')).toBe(
      'param1=1&param2=2&param3[]=1&param3[]=2&param3[]=3'
    );
  });
});

describe('toQueryParams вариант конвертации массива double', () => {
  it('массив в параметрах', () => {
    const params = {
      param1: 1,
      param2: '2',
      param3: [1, 2, 3],
    };

    expect(toQueryParams(params, 'double')).toBe(
      'param1=1&param2=2&param3=1&param3=2&param3=3'
    );
  });

  it('объект в параметрах', () => {
    const params = {
      param1: 1,
      param2: '2',
      param3: {
        prop1: 1,
        prop2: 2,
        prop3: 3,
      },
    };

    expect(toQueryParams(params, 'double')).toBe(
      'param1=1&param2=2&param3=1&param3=2&param3=3'
    );
  });
});
