import axios from "axios";
let data = null
export async function _fetchProducts() {
    await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log(res);
            data = res.data
        })
        .catch((err) => {
            console.log(err);
        });

    return data;

}