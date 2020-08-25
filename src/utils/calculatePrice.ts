export function comFaleMais(time: number, planLimit: number | undefined, price: number | undefined) {
    const calculatedTime = time - Number(planLimit);

    const calculatedPrice = calculatedTime * Number(price);
    const percent = (calculatedPrice * 10) / 100;

    let total = calculatedPrice + percent;

    if(total <= 0) {
        total = 0;
    }

    return total;
  }

  export function semFaleMais(time: number, price: number) {
    let calculatedPrice = time * price;

    if(calculatedPrice <= 0) {
        calculatedPrice = 0;
    }

    return calculatedPrice;
  }
