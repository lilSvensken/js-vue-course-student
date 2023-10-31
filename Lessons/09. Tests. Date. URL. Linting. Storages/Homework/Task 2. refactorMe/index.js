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
    const SongUrl = new URL(url);
    const searchParams = SongUrl.searchParams;
    let lyrics = searchParams.toString();
    replacements.forEach(({ key, value }) => {
        lyrics = lyrics.replaceAll(key, value);
    });

    return lyrics;
};

export default getTextFromUrl;