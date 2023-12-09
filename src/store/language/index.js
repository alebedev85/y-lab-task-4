import StoreModule from "../module";


class Language extends StoreModule {

  initState() {
    return {
      lang: 'ru',
      list: {
        store: 'Магазин',
        add: 'Добавить',
        delete: 'Удалить',
        follow: 'Перейти',
        close: 'Закрыть'
      }
    }
  }

  switchLanguage() {
    this.setState({
      lang: this.getState().lang === 'ru' ? 'en' : 'ru',
    })
  }

  setLanguage() {
    if (this.getState().lang === 'ru') {
      this.setState({
        ...this.getState(),
          lang: 'ru',
          list: {
            store: 'Магазин',
            add: 'Добавить',
            delete: 'Удалить',
            follow: 'Перейти',
            close: 'Закрыть'
          }

      }, 'Переключен язык на на руский')
    } else {
      this.setState({
        ...this.getState(),
          lang: 'en',
          list: {
            store: 'Store',
            add: 'Add',
            delete: 'Delete',
            follow: 'Follow',
            close: 'Close'
          }
      }, 'Переключен язык на английски')
    }
  }

}

export default Language;