import {c} from "sinon/lib/sinon/spy-formatters";

const getTextFromUrl = (urlInput) => {
    // Начало
    const url = new URL(urlInput);
    let str = url.searchParams.toString();
    str = transformResponse(str);
    return str;
    // Конец
};

const transformResponse = (str) => {
    str = str.replaceAll('text=', ' ');
    str = str.replaceAll('coma', ',');
    str = str.replaceAll('dot', '.');
    str = str.replaceAll('space', ' ');
    str = str.replaceAll('semicolon', ';');
    str = str.replaceAll('apostrophe', "'");
    str = str.replaceAll('&', '');
    str = str.replaceAll('=', '');
    str = str.replaceAll("' ", "'");
    return str;
}

export default getTextFromUrl;