export default class CalculatedPrice {
  comFaleMais(time: number, planLimit: number, price: number) {
    const calculatedTime = time - planLimit;
    const calculatedPrice = calculatedTime * price;

    return calculatedPrice;
  }

  semFaleMais(time: number, price: number) {
    const calculatedPrice = time * price;

    return calculatedPrice;
  }
}
