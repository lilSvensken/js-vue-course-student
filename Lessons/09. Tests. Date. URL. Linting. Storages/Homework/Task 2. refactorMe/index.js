const getTextFromUrl = (url) => {
    // Начало
    const x = new URL(url);
    let par = x.searchParams;
    let str = par.toString();
    let rep_text = str.replaceAll('text=', ' ');
    let rep_c = rep_text.replaceAll('coma', ',');
    let rep_d = rep_c.replaceAll('dot', '.');
    let space = rep_d.replaceAll('space', ' ');
    let sc = space.replaceAll('semicolon', ';');
    let apth = sc.replaceAll('apostrophe', "'");
    let ampRepl = apth.replaceAll('&', '');
    let ravno = ampRepl.replaceAll('=', '');
    return  ravno.replaceAll("' ", "'");
    // Конец
};

export default getTextFromUrl;