import { memo, useCallback, useEffect, useState } from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { useParams } from "react-router-dom";
import Pagination from "../../components/pagination";
import { getTranslation } from "../../utils"

function Main() {

  const store = useStore();
  const { page = 1 } = useParams();

  const [lang, setLeng] = useState({})

  useEffect(() => {
    store.actions.catalog.load(page);
  }, [page]);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    count: state.catalog.count,
    lang: state.language.lang,
  }));

  useEffect(() => {
    setLeng(getTranslation(select.lang))
  }, [select.lang])

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket} textButton={lang.add} />
    }, [callbacks.addToBasket, lang]),
  };

  return (
    <PageLayout>
      <Head title={lang.store} />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
        sum={select.sum} textButton={lang.follow} />
      <List list={select.list} renderItem={renders.item} />
      <Pagination totalPages={Math.ceil(Number(select.count) / 10)} currentPageIndex={Number(page)} />
    </PageLayout>

  );
}

export default memo(Main);
