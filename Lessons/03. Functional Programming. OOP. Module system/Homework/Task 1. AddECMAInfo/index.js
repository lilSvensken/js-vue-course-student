const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    const newjavaScriptData = {...javaScriptData, currentECMA: 2023}
    return newjavaScriptData
};

export default addECMAInfo;
export { javaScriptData };
