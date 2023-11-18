import inputsDict from "../assets/inputsDict";
import checkFunction from "./checkFunction";

export default function checkData(data) {
  let goodData = { is: true, message: "" };
  for (let key of Object.keys(data)) {
    console.log(data[key]);
    if (data[key] === "") {
      goodData.is = false;
      goodData.message = `ingresar ${inputsDict[key]}.`;
      return goodData;
    } else if (Array.isArray(data[key])) {
      if (Array.isArray(data[key][0])) {
        for (let i = 0; i < data[key].length; i++) {
          for (let j = 0; j < data[key].length; j++) {
            console.log(data[key][i]);
            if (isNaN(data[key][i][j]) && data[key][i][j] !== 0) {
              console.log("entra1");
              goodData.is = false;
              goodData.message = `ingresar número para ${inputsDict[key]}.`;
              return goodData;
            } else if (data[key][i][j] === 0 && i === j) {
              goodData.is = false;
              goodData.message = `número diferente a 0 en la diagonal para ${inputsDict[key]}.`;
              return goodData;
            }
          }
        }
      } else {
        for (let i = 0; i < data[key].length; i++) {
          console.log(data[key][i]);
          if (isNaN(data[key][i]) && data[key][i] !== 0) {
            console.log("entra");
            goodData.is = false;
            goodData.message = `ingresar número para ${inputsDict[key]}.`;
            return goodData;
          }
        }
      }
    } else if (key === "fun" || key === "dfun" || key === "ddfun") {
      if (!checkFunction(data[key])) {
        goodData.is = false;
        goodData.message = `ingresar expresión válida para ${inputsDict[key]}`;
        goodData.suggestions = [
          "x^2: x elevado a la 2.",
          "log(x): logaritmo base 10 de x.",
          "ln(x): logaritmo natural de x.",
          "exp(x): exponencial de x.",
          "sen(x): seno de x.",
          "cos(x): coseno de x.",
          "tan(x): tangente de x.",
        ];
        return goodData;
      }
    } else if (isNaN(data[key]) && data[key] !== 0) {
      goodData.is = false;
      goodData.message = `ingresar número para ${inputsDict[key]}.`;
      return goodData;
    }
  }
  return goodData;
}
