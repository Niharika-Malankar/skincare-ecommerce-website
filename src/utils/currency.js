export function toINR(priceUSD) {
  const rate = 83;
  return new Intl.NumberFormat("en-IN").format(priceUSD * rate);
}