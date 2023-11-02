export default function FixedPoint() {
  return (
    <div>
      <h2>Punto Fijo</h2>
      <div>
        <input placeholder="f(x)" />
        <input placeholder="g(x)" />
        <input placeholder="a" />
        <input placeholder="Tolerancia" />
        <select>
          <option value="absoluto">Error absoluto</option>
          <option value="relativo">Error relativo</option>
        </select>
      </div>
    </div>
  );
}
