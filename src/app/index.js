import {useCallback, useContext, useEffect, useState} from 'react';
import Main from "./main";
import Basket from "./basket";
import Product from "./product";
import useStore from "../store/use-store";
import useSelector from "../store/use-selector";

import { Route, Routes, useLocation, useParams } from "react-router-dom";

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const store = useStore();
  const location = useLocation();

  const activeModal = useSelector((state) => state.modals.name);
  const activePage = useSelector((state) => state.catalog.activePage);

  useEffect(() => {
    const controller = new AbortController();
    store.actions.catalog.load(controller.signal);

    return () => controller.abort();
  }, [activePage]);

  useEffect(() => {
    store.actions.modals.close();
  }, [location.pathname]);

  return (
    <>
    <Routes>
      <Route path="/:page?" element={<Main />} />
      <Route path="/product/:id?" element={<Product />} />
    </Routes>
    {activeModal === "basket" && <Basket />}
  </>
  );
}

export default App;
