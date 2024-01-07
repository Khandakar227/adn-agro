export type ProductFull = {
    name: string;
    summary: string;
    description: string;
    unit: string;
    perUnit: string;
    stock: number;
    price: number;
    discountPrice: number;
    category: string[];
    tags: string[];
    sku: string;
    images: string[];
    sale: boolean;
}

const tomatoSeeds: ProductFull = {
    name: "Organic Tomato Seeds",
    summary: "High-quality seeds for juicy and flavorful tomatoes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse provident enim non in autem, nostrum commodi aliquid facilis sequi nesciunt suscipit mollitia rem! Nostrum laboriosam quibusdam reiciendis itaque quia!",
    description: "These organic tomato seeds are carefully selected for optimal growth and delicious taste. Ideal for home gardens and farms. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe esse provident enim non in autem, nostrum commodi aliquid facilis sequi nesciunt suscipit mollitia rem! Nostrum laboriosam quibusdam reiciendis itaque quia!",
    unit: "packet",
    perUnit: "100 seeds",
    stock: 500,
    price: 9.99,
    discountPrice: 7.99,
    category: ["Seeds", "Organic"],
    tags: ["Tomato", "Gardening", "Organic Farming"],
    sku: "ORG-TMTO-SEED-001",
    images: ["/item.jpg", "/item.jpg","/item.jpg", "/item.jpg"],
    sale: true
};

const mango:ProductFull = {
    name: "Mangoes",
    summary: "Delicious and juicy organic mangoes",
    description: "Indulge in the natural sweetness and richness of our organic mangoes. Grown with care, these mangoes are a perfect treat for any fruit lover.",
    unit: "box",
    perUnit: "10 pieces",
    stock: 200,
    price: 24.99,
    discountPrice: 21.99,
    category: ["Fruits", "Organic"],
    tags: ["Mango", "Organic Farming", "Fresh Produce"],
    sku: "ORG-MANGO-BOX-001",
    images: ["/item.jpg", "/item.jpg","/item.jpg", "/item.jpg"],
    sale: true
}

export const products = [tomatoSeeds, mango];