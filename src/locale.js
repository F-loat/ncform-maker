
export function getQueryString(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  return r != null ? decodeURI(r[2]) : null
}

export function switchLang(lang) {
  window.location.search = `?lang=${lang}`
}

export default getQueryString('lang') || 'zh-CN'
