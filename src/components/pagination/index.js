import { memo } from "react";
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css';
import { pagesListGenerator } from '../../utils'
import { NavLink } from 'react-router-dom';

function Pagination({ totalPages, currentPageIndex }) {
  const cn = bem('pagination');
  console.log(totalPages, currentPage);
  const { pages, currentPage } = pagesListGenerator(currentPageIndex, totalPages);
  return (
    pages ?
      <ul className={cn()}>
        {pages.map((page, index) => (
          <li key={index} className={cn('index', index === currentPage ? 'active' : '')}>
            {page === '...' ? <span className='dots'> {page} </span> :
              <NavLink to={`/${page}`} className={cn('link')}> {page} </NavLink>
            }
          </li>
        ))
        }
      </ul > :
      <></>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
}

export default memo(Pagination);