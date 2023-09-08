import {c} from "sinon/lib/sinon/spy-formatters";

const itisCool = (begin, end) => {
    for(let i = begin; i <= end; i++){
        let a = i % 3 === 0 && i % 5 === 0 ? "ItisCool" : "None"
        if (a === "None") a = i % 3 === 0 ? "Itis" : "None"
        if (a === "None") a = i % 5 === 0 ? "Cool" : "None"
        console.log(a === "None" ? i : a)
    }
};

export default itisCool;
