import StoreModule from "../module";
import { getTranslation } from "../../utils"


class Language extends StoreModule {

  initState() {
    return {
      lang: 'ru',
      list: getTranslation('ru')
    }
  }

  switchLanguage(lang) {
      this.setState({
        lang: lang,
        list: getTranslation(lang)
      }, 'Переключился язык')
  }

}

export default Language;