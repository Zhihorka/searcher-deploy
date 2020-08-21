import React from 'react';
import style from './style.module.css';
import RepositoriesList from '../RepositoriesList/RepositoriesList';



const Paginator = (props) =>{

    return (
      <div className = {style.Paginator}>
      <ul className='UL'>
        {props.pageNumbers.map(number => (
          <li key={number} className={(props.currentPage === number ? style.active : '')}>
            <a onClick={() => {
              props.paginate(number)
              props.setCurrentPage(number)
            }
              } href='/repositories/!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default Paginator;