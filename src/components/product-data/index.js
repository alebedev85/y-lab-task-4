import React from 'react'
import { cn as bem } from '@bem-react/classname';
import propTypes from "prop-types";
import './style.css';

export default function ProductData({ product, onAddItem, textButton }) {

  const cn = bem('product-data');

  return (
    <div className={cn()}>
      <div className={cn('description')}>{product.description}</div>
      <div className={cn('country')}>
        Страна производитель: <span className={cn('country-value')}>{product.country}</span>
      </div>
      <div className={cn('category')}>
        Категория: <span className={cn('category-value')}>{product.category}</span>
      </div>
      <div className={cn('year')}>
        Год выпуска: <span className={cn('year-value')}>{product.year}</span>
      </div>
      <div className={cn('price')}>
        Цена: <span className={cn('price-value')}>{product.price}</span>
      </div>
      <button className={cn('button')} onClick={onAddItem}>{textButton}</button>
    </div >
  )
}

ProductData.propTypes = {
  data: propTypes.shape({
    _id: propTypes.oneOfType([propTypes.string, propTypes.number]),
    title: propTypes.string,
    price: propTypes.number,
    description: propTypes.string,
    country: propTypes.string,
    category: propTypes.string,
    year: propTypes.number
  }),
  onAddItem: propTypes.func.isRequired,
  textButton: propTypes.string
};

ProductData.defaultProps = {
  onAddItem: () => { },
  textButton: 'Добавить',
}