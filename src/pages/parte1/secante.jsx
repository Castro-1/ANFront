export default function Secante() {
  return (
    <div>
      <h2>Secante</h2>
      <div>
        <input placeholder="f(x)" />
        <input placeholder="x0" />
        <input placeholder="Tolerancia" />
        <select>
          <option value="absoluto">Error absoluto</option>
          <option value="relativo">Error relativo</option>
        </select>
      </div>
    </div>
  );
}
