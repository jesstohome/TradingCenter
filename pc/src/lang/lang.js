import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import zh from './zh'
import en from './en'
import kr from './kr'
import jp from './jp'
import hk from './hk'
import spa from './spa'
import vi from './vi'
// import it from './it'
// import de from './de'
// import fra from './fra'

let locale = window.localStorage.getItem('locale') || '';
if(locale == ''){
  locale = 'en';
  window.localStorage.setItem('locale',locale);
  window.localStorage.setItem('lang',locale);
}
export default new VueI18n({
  locale:locale,
  messages:{
    zh:zh,
    en:en,
    kr:kr,
    jp:jp,
    hk:hk,
    spa:spa,
	vi:vi
    // it:it,
    // de:de,
    // fra:fra
  }
})
