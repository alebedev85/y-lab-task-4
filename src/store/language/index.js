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
    if (this.getState().lang === 'en') {
      this.setState({
        lang: 'ru',
        list: {
          store: 'Магазин',
          basket: "Карзина",
          add: 'Добавить',
          delete: 'Удалить',
          follow: 'Перейти',
          close: 'Закрыть'
        }

      }, 'Переключился на на руский язык')
    } else {
      this.setState({
        lang: 'en',
        list: {
          store: 'Store',
          basket: "Basket",
          add: 'Add',
          delete: 'Delete',
          follow: 'Follow',
          close: 'Close'
        }
      }, 'Переключился на английски язык')
    }
  }

}

export default Language;