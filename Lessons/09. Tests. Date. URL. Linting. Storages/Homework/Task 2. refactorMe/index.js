const getTextFromUrl = (url) => {
    const replacements = [
        { key: 'text=', value: ' ' },
        { key: 'coma', value: ',' },
        { key: 'dot', value: '.' },
        { key: 'space', value: ' ' },
        { key: 'semicolon', value: ';' },
        { key: 'apostrophe', value: "'" },
        { key: '&', value: '' },
        { key: '=', value: '' },
        { key: "' ", value: "'" }
    ];
    const parsedUrl = new URL(url);
    const searchParams = parsedUrl.searchParams;
    let textSong = searchParams.toString();
    replacements.forEach(({ key, value }) => {
        textSong = textSong.replaceAll(key, value);
    });

    return textSong;
};


export default getTextFromUrl;