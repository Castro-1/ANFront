import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <div>
        <h3>Parte 1</h3>
        <button onClick={() => navigate("parte1/biseccion")}>Biseccion</button>
        <button onClick={() => navigate("parte1/newton")}>Newton</button>
        <button onClick={() => navigate("parte1/punto-fijo")}>
          Punto Fijo
        </button>
        <button onClick={() => navigate("parte1/raices-multiples")}>
          Raices Multiples
        </button>
        <button onClick={() => navigate("parte1/regla-falsa")}>
          Regla Falsa
        </button>
        <button onClick={() => navigate("parte1/secante")}>Secante</button>
      </div>
      <div>
        <h3>Parte 2</h3>
        <button onClick={() => navigate("parte2/gauss-seidel")}>
          Gauss Seidel
        </button>
        <button onClick={() => navigate("parte2/jacobi")}>Jacobi</button>
        <button onClick={() => navigate("parte2/sor")}>SOR</button>
      </div>
      <div>
        <h3>Parte 2</h3>
        <button onClick={() => navigate("parte3/lagrange")}>Lagrange</button>
        <button onClick={() => navigate("parte3/newton")}>Newton</button>
        <button onClick={() => navigate("parte3/vandermonde")}>
          Vandermonde
        </button>
        <button onClick={() => navigate("parte3/spline")}>Spline</button>
      </div>
    </div>
  );
}
