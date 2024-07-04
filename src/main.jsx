import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
axios.defaults.baseURL =
  "https://6671155ae083e62ee439f74b.mockapi.io/api/v1/todos";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
