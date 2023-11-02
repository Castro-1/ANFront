export default function FalseRule() {
  return (
    <div>
      <h2>Regla Falsa</h2>
      <div>
        <input placeholder="f(x)" />
        <input placeholder="a" />
        <input placeholder="b" />
        <input placeholder="Tolerancia" />
        <select>
          <option value="absoluto">Error absoluto</option>
          <option value="relativo">Error relativo</option>
        </select>
      </div>
    </div>
  );
}
