const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    const res = {
        ...javaScriptData,
        currentECMA: 2023,
    }
    return res;
};
export default addECMAInfo;
export { javaScriptData };