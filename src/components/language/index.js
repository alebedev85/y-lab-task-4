import { memo } from "react";
import { cn as bem } from '@bem-react/classname';
import './style.css';
import useSelector from "../../store/use-selector";
import useStore from "../../store/use-store";

function Language() {
  const cn = bem('language');
  const store = useStore();

  const select = useSelector(state => ({
    lang: state.language.lang
  }));

  const callbacks = {
    switchLanguage: () => store.actions.language.switchLanguage(),
  }

  return (
    <ul className={cn()}>
      <li key={'ru'}>
        <button className={cn('button', select.lang === 'ru' ? 'active' : '')} onClick={callbacks.switchLanguage}> RU </button>
      </li>
      <li key={'en'}>
        <button className={cn('button', select.lang === 'en' ? 'active' : '')} onClick={callbacks.switchLanguage}> EN </button>
      </li>
    </ul >
  )
}

export default memo(Language);