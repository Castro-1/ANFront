import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Title, Subtitle } from "../components/Title";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Title>Home</Title>
      <div>
        <Subtitle>Parte 1</Subtitle>
        <Button onClick={() => navigate("parte1/biseccion")}>Biseccion</Button>
        <Button onClick={() => navigate("parte1/newton")}>
          Newton-Raphson
        </Button>
        <Button onClick={() => navigate("parte1/punto-fijo")}>
          Punto Fijo
        </Button>
        <Button onClick={() => navigate("parte1/raices-multiples")}>
          Raíces Múltiples
        </Button>
        <Button onClick={() => navigate("parte1/regla-falsa")}>
          Regla Falsa
        </Button>
        <Button onClick={() => navigate("parte1/secante")}>Secante</Button>
      </div>
      <div>
        <Subtitle>Parte 2</Subtitle>
        <Button onClick={() => navigate("parte2/gauss-seidel")}>
          Gauss-Seidel
        </Button>
        <Button onClick={() => navigate("parte2/jacobi")}>Jacobi</Button>
        <Button onClick={() => navigate("parte2/sor")}>SOR</Button>
      </div>
      <div>
        <Subtitle>Parte 3</Subtitle>
        <Button onClick={() => navigate("parte3/lagrange")}>Lagrange</Button>
        <Button onClick={() => navigate("parte3/newton")}>Newton</Button>
        <Button onClick={() => navigate("parte3/vandermonde")}>
          Vandermonde
        </Button>
        <Button onClick={() => navigate("parte3/spline")}>Spline</Button>
        <Button onClick={() => navigate("parte3/spline3")}>
          Spline Cúbico
        </Button>
      </div>
    </div>
  );
}
