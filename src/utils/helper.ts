export function thousandSeprator(digit: number) {
  return digit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
