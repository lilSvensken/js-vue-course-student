const getTextFromUrl = (url) => {
    const textReplacements = {
        'text': ' ',
        'coma': ',',
        'dot': '.',
        'space': ' ',
        'semicolon': ';',
        'apostrophe': "'",
        '&': '',
        '=': '',
    };

    const decodeText = (text) => {
        for (const [key, value] of Object.entries(textReplacements)) {
            text = text.replaceAll(key, value);
        }
        return text;
    };

    return decodeText(new URL(url).searchParams.toString());
};
export default getTextFromUrl;


