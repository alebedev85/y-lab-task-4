import { memo, useCallback, useState, useEffect } from 'react';
import ItemBasket from "../../components/item-basket";
import List from "../../components/list";
import ModalLayout from "../../components/modal-layout";
import BasketTotal from "../../components/basket-total";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { getTranslation } from "../../utils"

function Basket() {

  const store = useStore();

  const [lang, setLeng] = useState({})

  const select = useSelector(state => ({
    list: state.basket.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    lang: state.language.lang,
  }));

  useEffect(() => {
    setLeng(getTranslation(select.lang))
  }, [select.lang])

  const callbacks = {
    // Удаление из корзины
    removeFromBasket: useCallback(_id => store.actions.basket.removeFromBasket(_id), [store]),
    // Закрытие любой модалки
    closeModal: useCallback(() => store.actions.modals.close(), [store]),
  }

  const renders = {
    itemBasket: useCallback((item) => {
      return <ItemBasket item={item} onRemove={callbacks.removeFromBasket} textButton={lang.delete} />
    }, [callbacks.removeFromBasket, lang]),
  };

  return (
    <ModalLayout title={lang.basket} onClose={callbacks.closeModal} textButton={lang.close}>
      <List list={select.list} renderItem={renders.itemBasket} />
      <BasketTotal sum={select.sum} />
    </ModalLayout>
  );
}

export default memo(Basket);
