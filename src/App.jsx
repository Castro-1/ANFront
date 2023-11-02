import { Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import SOR from "./pages/Part2/SOR";
import Newton from "./pages/Part1/Newton";
import Jacobi from "./pages/Part2/Jacobi";
import Spline from "./pages/Part3/Spline";
import Newton2 from "./pages/Part3/Newton";
import Secant from "./pages/Part1/Secant";
import Lagrange from "./pages/Part3/Lagrange";
import Bisection from "./pages/Part1/Bisection";
import FixedPoint from "./pages/Part1/FixedPoint";
import FasleRule from "./pages/Part1/FalseRule";
import Vandermonde from "./pages/Part3/Vandermonde";
import GaussSeidel from "./pages/Part2/GaussSeidel";
import MultipleRoots from "./pages/Part1/MultipleRoots";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* parte 1 */}
        <Route path="parte1/newton" element={<Newton />} />
        <Route path="parte1/secante" element={<Secant />} />
        <Route path="parte1/biseccion" element={<Bisection />} />
        <Route path="parte1/punto-fijo" element={<FixedPoint />} />
        <Route path="parte1/regla-falsa" element={<FasleRule />} />
        <Route path="parte1/raices-multiples" element={<MultipleRoots />} />
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
