import StoreModule from "../module";


class Language extends StoreModule {

  initState() {
    return {
      language: {
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
  }

  SwitchLanguage() {
    this.setState({
      lang: this.getState().language.lang === 'ru' ? 'en' : 'ru',
    })
  }

  setLanguage() {
    if (this.getState().language.lang === 'ru') {
      this.setState({
        ...this.getState(),
        language: {
          lang: 'ru',
          list: {
            store: 'Магазин',
            add: 'Добавить',
            delete: 'Удалить',
            follow: 'Перейти',
            close: 'Закрыть'
          }
        }
      })
    } else {
      this.setState({
        ...this.getState(),
        language: {
          lang: 'en',
          list: {
            store: 'Store',
            add: 'Add',
            delete: 'Delete',
            follow: 'Follow',
            close: 'Close'
          }
        }
      })
    }
  }

}

export default Language;