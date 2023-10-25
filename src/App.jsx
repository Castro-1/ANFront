import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Layout from "./components/Layout";
import SOR from "./pages/parte2/sor";
import Newton from "./pages/parte1/newton";
import Jacobi from "./pages/parte2/jacobi";
import Spline from "./pages/parte3/spline";
import Newton2 from "./pages/parte3/newton";
import Secante from "./pages/parte1/secante";
import Lagrange from "./pages/parte3/lagrange";
import Biseccion from "./pages/parte1/biseccion";
import PuntoFijo from "./pages/parte1/punto-fijo";
import ReglaFalsa from "./pages/parte1/regla-falsa";
import Vandermonde from "./pages/parte3/vandermonde";
import GaussSeidel from "./pages/parte2/gauss-seidel";
import RaicesMultiples from "./pages/parte1/raices-multiples";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* parte 1 */}
        <Route path="parte1/newton" element={<Newton />} />
        <Route path="parte1/secante" element={<Secante />} />
        <Route path="parte1/biseccion" element={<Biseccion />} />
        <Route path="parte1/punto-fijo" element={<PuntoFijo />} />
        <Route path="parte1/regla-falsa" element={<ReglaFalsa />} />
        <Route path="parte1/raices-multiples" element={<RaicesMultiples />} />
        {/* parte 2 */}
        <Route path="parte2/gauss-seidel" element={<GaussSeidel />} />
        <Route path="parte2/jacobi" element={<Jacobi />} />
        <Route path="parte2/sor" element={<SOR />} />
        {/* parte 3 */}
        <Route path="parte3/lagrange" element={<Lagrange />} />
        <Route path="parte3/newton" element={<Newton2 />} />
        <Route path="parte3/spline" element={<Spline />} />
        <Route path="parte3/vandermonde" element={<Vandermonde />} />
      </Route>

      {/* other routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
