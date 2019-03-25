import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./components/product_list";
import SolicitudList from "./components/solicitud_list";

ReactDOM.render(<ProductList/>, document.getElementById("product_list"));
ReactDOM.render(<SolicitudList/>, document.getElementById("solicitudes"));
