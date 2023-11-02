import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <div>
        <h3>Parte 1</h3>
        <Button onClick={() => navigate("parte1/biseccion")}>Biseccion</Button>
        <Button onClick={() => navigate("parte1/newton")}>Newton</Button>
        <Button onClick={() => navigate("parte1/punto-fijo")}>
          Punto Fijo
        </Button>
        <Button onClick={() => navigate("parte1/raices-multiples")}>
          Raices Multiples
        </Button>
        <Button onClick={() => navigate("parte1/regla-falsa")}>
          Regla Falsa
        </Button>
        <Button onClick={() => navigate("parte1/secante")}>Secante</Button>
      </div>
      <div>
        <h3>Parte 2</h3>
        <Button onClick={() => navigate("parte2/gauss-seidel")}>
          Gauss Seidel
        </Button>
        <Button onClick={() => navigate("parte2/jacobi")}>Jacobi</Button>
        <Button onClick={() => navigate("parte2/sor")}>SOR</Button>
      </div>
      <div>
        <h3>Parte 2</h3>
        <Button onClick={() => navigate("parte3/lagrange")}>Lagrange</Button>
        <Button onClick={() => navigate("parte3/newton")}>Newton</Button>
        <Button onClick={() => navigate("parte3/vandermonde")}>
          Vandermonde
        </Button>
        <Button onClick={() => navigate("parte3/spline")}>Spline</Button>
      </div>
    </div>
  );
}
