const getTextFromUrl = (url) => {
    const baseUrl = new URL(url)
    const params = baseUrl.searchParams
    let text = " " + params.toString().slice(5)
    const result = text.replaceAll("&apostrophe=&text=", "'").replaceAll('&text=', ' ').replaceAll('&coma=', ',').replaceAll('&dot=', '.')
    return result
};

export default getTextFromUrl