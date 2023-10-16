const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    let clonedJavaScriptData = new Object();
    Object.assign(clonedJavaScriptData, javaScriptData);
    clonedJavaScriptData.currentECMA = 2023;
    return clonedJavaScriptData;
};

export default addECMAInfo;
export { javaScriptData };