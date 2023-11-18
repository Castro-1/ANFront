import * as math from "mathjs";

export default function checkFunction(expression) {
  if (expression.includes("ln")) {
    expression = expression.replace(/ln\(([^)]+)\)/g, "log($1)*2.303");
  }
  try {
    const compiled = math.compile(expression);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
