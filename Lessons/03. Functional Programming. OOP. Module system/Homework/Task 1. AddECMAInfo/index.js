const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
    const updateJavaScriptData = {
        ...javaScriptData,
        currentECMA: 2023
    }
    return updateJavaScriptData;
    // Конец
};

export default addECMAInfo;
export { javaScriptData };