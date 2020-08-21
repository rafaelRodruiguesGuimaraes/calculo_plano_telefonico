export default class CalculatedPrice {
  comFaleMais(time: number, planLimit: number | undefined, price: number | undefined) {
    const calculatedTime = time - Number(planLimit);
    let calculatedPrice = calculatedTime * Number(price);

    if(calculatedPrice <= 0) {
        calculatedPrice = 0;
    }

    return Number(calculatedPrice).toFixed(2);
  }

  semFaleMais(time: number, price: number | undefined) {
    let calculatedPrice = time * Number(price);

    if(calculatedPrice <= 0) {
        calculatedPrice = 0;
    }

    return Number(calculatedPrice).toFixed(2);
  }
}
