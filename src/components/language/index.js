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
    switchLanguageRu: () => store.actions.language.switchLanguage('ru'),
    switchLanguageEn: () => store.actions.language.switchLanguage('en'),
  }

  return (
    <ul className={cn()}>
      <li key={'ru'}>
        <button className={cn('button', select.lang === 'ru' ? 'active' : '')} onClick={callbacks.switchLanguageRu}> RU </button>
      </li>
      <li key={'en'}>
        <button className={cn('button', select.lang === 'en' ? 'active' : '')} onClick={callbacks.switchLanguageEn}> EN </button>
      </li>
    </ul >
  )
}

export default memo(Language);