export type Product = {
    name: string;
    image: string;
    discountPrice: number;
    price: number;
    tags: string[];
    description: string;
    sale: boolean;
}
export const products: Product [] = [{
    name: "Chocolate Cake",
    description: `Nulla justo turpis, maximus in cursus vitae, aliquam tincidunt leo. Curabitur dignissim lobortis
    Tristique senectus et netus et malesuada
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas`,
    image: "/item.jpg",
    price: 1.8,
    discountPrice: 0.90,
    tags: ['Berries', 'Farm', 'Production', 'Fresh'],
    sale: true
},
{
    name: "Chocolate Cake",
    description: `Nulla justo turpis, maximus in cursus vitae, aliquam tincidunt leo. Curabitur dignissim lobortis
    Tristique senectus et netus et malesuada
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas`,
    image: "/item.jpg",
    price: 1.8,
    discountPrice: 0.90,
    tags: ['Berries', 'Farm', 'Production', 'Fresh'],
    sale: false
},
{
    name: "Chocolate Cake",
    description: `Nulla justo turpis, maximus in cursus vitae, aliquam tincidunt leo. Curabitur dignissim lobortis
    Tristique senectus et netus et malesuada
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas`,
    image: "/item.jpg",
    price: 2.8,
    discountPrice: 1.90,
    tags: ['Berries', 'Farm', 'Production', 'Fresh'],
    sale: true
},
{
    name: "Chocolate Cake",
    description: `Nulla justo turpis, maximus in cursus vitae, aliquam tincidunt leo. Curabitur dignissim lobortis
    Tristique senectus et netus et malesuada
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas`,
    image: "/item.jpg",
    price: 1.9,
    discountPrice: 1.9,
    tags: ['Berries', 'Farm', 'Production', 'Fresh'],
    sale: false
}
];