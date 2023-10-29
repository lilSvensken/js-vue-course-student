const getTextFromUrl = (url) => {
    const urlObject = new URL(url);
    const searchParams = urlObject.searchParams;
    let text = '';

    searchParams.forEach((value, key) => {
        if (key === 'text') {
            text += value + ' ';
        }
    });

    text = transformKeywords(text.trim());
    return text;
};

export default getTextFromUrl;
const transformKeywords = (text) => {
    const keywords = {
        'coma': ',',
        'dot': '.',
        'space': ' ',
        'semicolon': ';',
        'apostrophe': "'"
    };
    for (const keyword in keywords) {
        text = text.replaceAll(keyword, keywords[keyword]);
    }
    return text;
};

