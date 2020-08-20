export default class CalculatedPrice {
  comFaleMais(time: number, planLimit: number | undefined, price: number | undefined) {
    const calculatedTime = time - Number(planLimit);
    const calculatedPrice = calculatedTime * Number(price);

    return calculatedPrice;
  }

  semFaleMais(time: number, price: number | undefined) {
    const calculatedPrice = time * Number(price);

    return calculatedPrice;
  }
}
