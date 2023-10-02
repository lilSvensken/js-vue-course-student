const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    const updatedData = 
    {
        ...javaScriptData,
        currentECMA: 2023,
    };
    return updatedData;
};

export default addECMAInfo;
export { javaScriptData };