import { memo, useCallback, useEffect, useState } from 'react';
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import ProductData from '../../components/product-data';
import { useParams } from 'react-router-dom';
import { getTranslation } from "../../utils"

function Product() {

  const store = useStore();
  const { id } = useParams();
  const [lang, setLeng] = useState({})

  useEffect(() => {
    store.actions.catalog.loadItemData(id)
  }, []);

  const select = useSelector(state => ({
    product: state.catalog.product,
    amount: state.basket.amount,
    sum: state.basket.sum,
    lang: state.language.lang,
  }));

  useEffect(() => {
    setLeng(getTranslation(select.lang))
  }, [select.lang])

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(() => store.actions.basket.addToBasket(id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  return (
    <PageLayout>
      <Head title={select.product.title} />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
        sum={select.sum} textButton={lang.follow} />
      <ProductData product={select.product} onAddItem={callbacks.addToBasket} textButton={lang.add} />
    </PageLayout>

  );
}

export default memo(Product);