async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export default fetchProducts;
