const javaScriptData = {
    name: 'JS',
    multiThread: false,
    born: 1995,
    cool: true,
};

const addECMAInfo = () => {
    // Начало
    return {
        ...javaScriptData,
<<<<<<< HEAD
        'currentECMA' : 2023,
    }
=======
        currentCMA: 2023,
    } 
>>>>>>> e3a22bd2a6535a38e74a74a326de368ead0a142c
    // Конец
};

export default addECMAInfo;
export { javaScriptData };