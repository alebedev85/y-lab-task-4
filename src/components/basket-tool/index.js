import { memo } from "react";
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat, plural } from "../../utils";
import { Link } from "react-router-dom";
import './style.css';

function BasketTool({ sum, amount, onOpen, textButton }) {
  const cn = bem('BasketTool');
  return (
    <div className={cn()}>
      <Link to="/" className={cn('link')}>Главная</Link>
      <div>
        <span className={cn('label')}>В корзине:</span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${plural(amount, {
              one: 'товар',
              few: 'товара',
              many: 'товаров'
            })} / ${numberFormat(sum)} ₽`
            : `пусто`
          }
        </span>
        <button onClick={onOpen}>{textButton}</button>
      </div>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number,
  textButton: PropTypes.string
};

BasketTool.defaultProps = {
  onOpen: () => { },
  sum: 0,
  amount: 0,
  textButton: 'Перейти'
}

export default memo(BasketTool);
