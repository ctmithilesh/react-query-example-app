import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ProductPage from "./pages/ProductPage";
import AddName from "./components/AddName";
import AddEmail from "./components/AddEmail";
import AddPhone from "./components/AddPhone";
import FinalFormData from "./components/FinalFormData";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 5, // 5 minutes cache time
        staleTime: 1000 * 60 * 1, //  5 minute
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route exact path="/" element={<ProductPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/add-customer" element={<AddName />} />
        <Route exact path="/add-email" element={<AddEmail />} />
        <Route exact path="/add-phone" element={<AddPhone />} />
        <Route exact path="/confirm-details" element={<FinalFormData />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
