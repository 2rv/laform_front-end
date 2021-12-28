import {
  getCountProps,
  getDiscountProps,
  getInfoProps,
  getLengthProps,
  getPriceProps,
  getVendorCodeProps,
  isCartProps,
} from './type';

export function getInfoUtil(props: getInfoProps) {
  const {
    id,
    type,
    options,
    colors,
    sizes,
    option,
    size,
    color,
    count,
    length,
    isCount,
    isLength,
    optionType,
  } = props;

  const data: any = {
    id: id,
    type: type,
    optionId: undefined,
    count: undefined,
    length: undefined,
  };

  if (optionType === 1) {
    data.optionId = options[option].optionId;
  }
  if (optionType === 2) {
    data.optionId = sizes[size].optionId;
  }
  if (optionType === 3) {
    data.optionId = colors[color].optionId;
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
    options,
    colors,
    sizes,
    option,
    size,
    color,
    id,
    optionId,
    productId,
    optionType,
  } = props;

  let optionsIsCheck = false;
  const isIdCheck = id === productId;
  if (optionType === 1) {
    if (option === -1) return false;
    optionsIsCheck = options[option].optionId === optionId;
  }
  if (optionType === 2) {
    if (size === -1) return false;
    optionsIsCheck = sizes[size].optionId === optionId;
  }
  if (optionType === 3) {
    if (color === -1) return false;
    optionsIsCheck = colors[color].optionId === optionId;
  }
  if (optionType > 0) {
    return optionsIsCheck && isIdCheck;
  }
  return isIdCheck;
}
export function getPriceUtil(props: getPriceProps): number {
  const {
    options,
    colors,
    sizes,
    option,
    size,
    color,
    count,
    length,
    price,
    isCount,
    isLength,
    optionType,
  } = props;
  if (optionType === 1) {
    if (option === -1) return 0;
    const oPrice = options[option].price || 0;
    if (isCount) return oPrice * count;
    if (isLength) return oPrice * length;
    return oPrice;
  } else if (optionType === 2) {
    if (size === -1) return 0;
    const sPrice = sizes[size].price || 0;
    if (isCount) return sPrice * count;
    if (isLength) return sPrice * length;
    return sPrice;
  } else if (optionType === 3) {
    if (color === -1) return 0;
    const cPrice = colors[color].price || 0;
    if (isCount) return cPrice * count;
    if (isLength) return cPrice * length;
    return cPrice;
  } else {
    if (isCount) return count * price;
    if (isLength) return length * price;
    return price;
  }
}
export function getDiscountUtil(props: getDiscountProps): number {
  const { options, colors, sizes, option, size, color, discount, optionType } =
    props;

  if (optionType === 1) {
    if (option === -1) return 0;
    return options[option].discount || 0;
  }
  if (optionType === 2) {
    if (size === -1) return 0;
    return sizes[size].discount || 0;
  }
  if (optionType === 3) {
    if (color === -1) return 0;
    return colors[color].discount || 0;
  }
  return discount;
}
export function getCountUtil(props: getCountProps): number {
  const { options, colors, sizes, option, size, color, count, optionType } =
    props;

  if (optionType === 1) {
    if (option === -1) return -1;
    return options[option].count || 0;
  }
  if (optionType === 2) {
    if (size === -1) return -1;
    return sizes[size].count || 0;
  }
  if (optionType === 3) {
    if (color === -1) return -1;
    return colors[color].count || 0;
  }
  return count;
}
export function getLengthUtil(props: getLengthProps): number {
  const { options, colors, sizes, option, size, color, length, optionType } =
    props;

  if (optionType === 1) {
    if (option === -1) return -1;
    return options[option].length || 0;
  }
  if (optionType === 2) {
    if (size === -1) return -1;
    return sizes[size].length || 0;
  }
  if (optionType === 3) {
    if (color === -1) return -1;
    return colors[color].length || 0;
  }
  return length;
}
export function getVendorCodeUtil(props: getVendorCodeProps): string {
  const {
    options,
    colors,
    sizes,
    option,
    size,
    color,
    vendorCode,
    optionType,
  } = props;

  if (optionType === 1) {
    if (option === -1) return '';
    return options[option].vendorCode;
  }
  if (optionType === 2) {
    if (size === -1) return '';
    return sizes[size].vendorCode;
  }
  if (optionType === 3) {
    if (color === -1) return '';
    return colors[color].vendorCode;
  }
  return vendorCode;
}
