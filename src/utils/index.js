export function changeLang() {
  let lang = ['zh', 'en']

  let currentLang = localStorage.getItem('lang') || 'zh'

  let setLang = lang[Number(!lang.findIndex(v => v === currentLang))]

  localStorage.setItem('lang', setLang)
}
