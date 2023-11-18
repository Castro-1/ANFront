import inputsDict from "../assets/inputsDict";

export default function checkData(data) {
  let goodData = { is: true, message: "" };
  for (let key of Object.keys(data)) {
    console.log(key, data[key]);
    if (data[key] === "") {
      goodData.is = false;
      goodData.message = `ingresar ${inputsDict[key]}.`;
      return goodData;
    } else if (!data[key] && data[key] !== 0) {
      goodData.is = false;
      goodData.message = `ingresar número para ${inputsDict[key]}.`;
      return goodData;
    } else if (Array.isArray(data[key])) {
      for (value of data[key]) {
        if (!value && value !== 0) {
          goodData.is = false;
          goodData.message = `ingresar número para ${inputsDict[key]}.`;
          return goodData;
        }
      }
    }
  }
  return goodData;
}
