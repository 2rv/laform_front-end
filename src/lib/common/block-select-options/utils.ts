import {
  getCountProps,
  getDiscountProps,
  getInfoProps,
  getLengthProps,
  getPriceProps,
  getVendorCodeProps,
  isCartProps,
} from './type';

export function getCountUtil(props: getCountProps): number {
  const {
    options = [],
    colors = [],
    sizes = [],
    option,
    size,
    color,
    count,
  } = props;

  if (Boolean(options.length)) {
    if (option === '') return 0;
    return options[Number(option)].count || 0;
  }
  if (Boolean(sizes.length)) {
    if (size === '') return 0;
    return sizes[Number(size)].count || 0;
  }
  if (Boolean(colors.length)) {
    if (color === '') return 0;
    return colors[Number(color)].count || 0;
  }
  return count || 0;
}
export function getDiscountUtil(props: getDiscountProps): number {
  const {
    options = [],
    colors = [],
    sizes = [],
    option,
    size,
    color,
    discount,
  } = props;

  if (Boolean(options.length)) {
    if (option === '') return 0;
    return options[Number(option)].discount || 0;
  }
  if (Boolean(sizes.length)) {
    if (size === '') return 0;
    return sizes[Number(size)].discount || 0;
  }
  if (Boolean(colors.length)) {
    if (color === '') return 0;
    return colors[Number(color)].discount || 0;
  }
  return discount || 0;
}
export function getLengthUtil(props: getLengthProps): number {
  const {
    options = [],
    colors = [],
    sizes = [],
    option,
    size,
    color,
    length,
  } = props;

  if (Boolean(options.length)) {
    if (option === '') return 0;
    return options[Number(option)].length || 0;
  }
  if (Boolean(sizes.length)) {
    if (size === '') return 0;
    return sizes[Number(size)].length || 0;
  }
  if (Boolean(colors.length)) {
    if (color === '') return 0;
    return colors[Number(color)].length || 0;
  }
  return length || 0;
}
export function getPriceUtil(props: getPriceProps): number {
  const {
    options = [],
    colors = [],
    sizes = [],
    option,
    size,
    color,
    count,
    length,
    price = 0,
    isCount,
    isLength,
  } = props;
  if (Boolean(options.length)) {
    if (option === '') return 0;
    const oPrice = options[Number(option)].price || 0;
    if (isCount) return oPrice * Number(count);
    if (isLength) return oPrice * Number(length);
    return oPrice;
  }
  if (Boolean(sizes.length)) {
    if (size === '') return 0;
    const sPrice = sizes[Number(size)].price || 0;
    if (isCount) return sPrice * Number(count);
    if (isLength) return sPrice * Number(length);
    return sPrice;
  }
  if (Boolean(colors.length)) {
    if (color === '') return 0;
    const cPrice = colors[Number(color)].price || 0;
    if (isCount) return cPrice * Number(count);
    if (isLength) return cPrice * Number(length);
    return cPrice;
  }
  if (isCount) return Number(count) * price;
  if (isLength) return Number(length) * price;
  return price;
}
export function isCountUtil(props: getCountProps): boolean {
  const {
    options = [],
    colors = [],
    sizes = [],
    option,
    size,
    color,
    count,
  } = props;
  if (Boolean(options.length)) {
    if (option === '') return false;
    return Boolean(options[Number(option)].count);
  }
  if (Boolean(sizes.length)) {
    if (size === '') return false;
    return Boolean(sizes[Number(size)].count);
  }
  if (Boolean(colors.length)) {
    if (color === '') return false;
    return Boolean(colors[Number(color)].count);
  }
  return Boolean(count);
}
export function isLengthUtil(props: getLengthProps): boolean {
  const {
    options = [],
    colors = [],
    sizes = [],
    option,
    size,
    color,
    length,
  } = props;
  if (Boolean(options.length)) {
    if (option === '') return false;
    return Boolean(options[Number(option)].length);
  }
  if (Boolean(sizes.length)) {
    if (size === '') return false;
    return Boolean(sizes[Number(size)].length);
  }
  if (Boolean(colors.length)) {
    if (color === '') return false;
    return Boolean(colors[Number(color)].length);
  }
  return Boolean(length);
}

export function getInfoUtil(props: getInfoProps) {
  const {
    id,
    type,
    options = [],
    colors = [],
    sizes = [],
    option,
    size,
    color,
    count,
    length,
    isCount,
    isLength,
  } = props;

  const data: any = {
    id: id,
    type: type,
    optionId: undefined,
    count: undefined,
    length: undefined,
  };
  if (Boolean(options.length)) {
    data.optionId = options[Number(option)].optionId;
  }
  if (Boolean(sizes.length)) {
    data.optionId = sizes[Number(size)].optionId;
  }
  if (Boolean(colors.length)) {
    data.optionId = colors[Number(color)].optionId;
  }
  if (isCount) {
    data.count = count;
  }
  if (isLength) {
    data.length = length;
  }
  return data;
}
export function isCartUtil(props: isCartProps): boolean {
  const {
    options = [],
    colors = [],
    sizes = [],
    option,
    size,
    color,
    id,
    optionId,
    productId,
  } = props;
  let optionsIsCheck = false;
  const isIdCheck = id === productId;
  if (Boolean(options.length)) {
    optionsIsCheck = options[Number(option)].optionId === optionId;
  }
  if (Boolean(sizes.length)) {
    optionsIsCheck = sizes[Number(size)].optionId === optionId;
  }
  if (Boolean(colors.length)) {
    optionsIsCheck = colors[Number(color)].optionId === optionId;
  }
  if (
    Boolean(options.length) ||
    Boolean(sizes.length) ||
    Boolean(colors.length)
  ) {
    return Boolean(optionsIsCheck && isIdCheck);
  }
  return Boolean(isIdCheck);
}
export function getVendorCodeUtil(props: getVendorCodeProps): string {
  const {
    options = [],
    colors = [],
    sizes = [],
    option,
    size,
    color,
    vendorCode,
  } = props;

  if (Boolean(options.length)) {
    if (option === '') return '';
    return options[Number(option)].vendorCode;
  }
  if (Boolean(sizes.length)) {
    if (size === '') return '';
    return sizes[Number(size)].vendorCode;
  }
  if (Boolean(colors.length)) {
    if (color === '') return '';
    return colors[Number(color)].vendorCode;
  }
  return vendorCode || '';
}
