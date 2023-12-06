import React from 'react'
import { cn as bem, cn } from '@bem-react/classname';
import propTypes from "prop-types";
import './style.css';

export default function ProductData({ data, onAddItem }) {

  const cn = bem('product-data');

  return (
    <div className={cn()}>
      <div className={cn('description')}>{data.description}</div>
      <div className={cn('country')}>
        Страна производитель: <span className={cn('country-value')}>{data.country}</span>
      </div>
      <div className={cn('category')}>
        Категория: <span className={cn('category-value')}>{data.category}</span>
      </div>
      <div className={cn('year')}>
        Год выпуска: <span className={cn('year-value')}>{data.year}</span>
      </div>
      <div className={cn('price')}>
        Цена: <span className={cn('price-value')}>{data.price}</span>
      </div>
      <button className={cn('button')} onClick={onAddItem}>Добавить</button>
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
  })


}