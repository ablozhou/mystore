export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {
        id: 1,
        name: 'iPhone 13 pro max',
        price: 1599,
        description: 'A large phone with one of the best screens'
    },
    {
        id: 2,
        name: 'iPhone 13 pro',
        price: 1499,
        description: 'A great phone with one of the best cameras'
    },
    {
        id: 3,
        name: 'iPhone 6',
        price: 600,
        description: ''
    }
];
  