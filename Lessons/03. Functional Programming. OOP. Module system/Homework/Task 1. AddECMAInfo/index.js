const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
    const updatedJavaScriptData = {
        ...javaScriptData,
        currentECMA: 2023,
    };

    return updatedJavaScriptData;
    // Конец
};

export default addECMAInfo;
export { javaScriptData };