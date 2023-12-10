import StoreModule from "../module";


class Language extends StoreModule {

  initState() {
    return {
      lang: 'ru',
    }
  }

  switchLanguage() {
    if (this.getState().lang === 'en') {
      this.setState({
        lang: 'ru',
      }, 'Переключился на на руский язык')
    } else {
      this.setState({
        lang: 'en',
      }, 'Переключился на английски язык')
    }
  }

}

export default Language;