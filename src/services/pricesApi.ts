interface PriceProps {
    region: string;
    name: string;
    origin: string;
    destiny: string;
    price: number;
};

interface PricesProps extends Array<PriceProps>{};

const prices: PricesProps = [
    { region: 'origin011Destiny016', name: '011 para 016', origin: '011', destiny: '016', price: 1.90  },
    { region: 'origin016Destiny011', name: '016 para 011', origin: '016', destiny: '011', price: 2.90  },
    { region: 'origin011Destiny017', name: '011 para 017', origin: '011', destiny: '017', price: 1.70  },
    { region: 'origin017Destiny011', name: '017 para 011', origin: '017', destiny: '011', price: 2.70  },
    { region: 'origin011Destiny018', name: '011 para 018', origin: '011', destiny: '018', price: 0.90  },
    { region: 'origin018Destiny011', name: '018 para 011', origin: '018', destiny: '011', price: 1.90  },
];

export default prices;
