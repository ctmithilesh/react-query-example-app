import { useQuery } from "react-query";
import { _fetchProducts } from "../lib/apis/fetchProducts";

const DataComponent = () => {
  const query = useQuery("products", _fetchProducts);
  console.log(query);

  if (query.status === "loading") {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (query.status === "success") {
    return (
      <>
        <h3>Products </h3>
        {query.data.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </>
    );
  }
};

export default DataComponent;
