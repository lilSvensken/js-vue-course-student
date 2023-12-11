const getTextFromUrl = (url) => {
  // Начало
  const o = new URL(url)
  const par = o.searchParams
  const str = par.toString()
  const rep_text = str.replaceAll('text=', ' ')
  const rep_c = rep_text.replaceAll('coma', ',')
  const rep_d = rep_c.replaceAll('dot', '.')
  const space = rep_d.replaceAll('space', ' ')
  const sc = space.replaceAll('semicolon', ';')
  const apth = sc.replaceAll('apostrophe', "'")
  const ampRepl = apth.replaceAll('&', '')
  const ravno = ampRepl.replaceAll('=', '')
  const deleteProbel = ravno.replaceAll("' ", "'")
  return deleteProbel
  // Конец
}

export default getTextFromUrl
