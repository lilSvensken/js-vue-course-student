const javaScriptData = {
  name: "JS",
  multiThread: false,
  born: 1995,
  cool: true,
};

const addECMAInfo = (javaScriptData) => {
  // Начало

  let newJavaScriptData = { ...javaScriptData, currentECMA: 2023 }
  return newJavaScriptData;

  // Конец
};

export default addECMAInfo;
export { javaScriptData };
