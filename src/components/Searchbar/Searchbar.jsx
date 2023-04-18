import { useState } from 'react';
import PropTypes from 'prop-types';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from 'components/Searchbar/Searchbar.module.css';

export function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('')
  

  const valueChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
    };
 
    const handleSubmit = event => {
      event.preventDefault();
       
        if (search.trim() === "") {
          toast.error('write correct name');
            setSearch('');
            return
        }
            onSubmit(search)
  }
  
    return (
      <header >
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" >
            <span className="button-label">Search</span>
          </button>

          <input
            
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={valueChange}
            value={search}
          />
        </form>
      </header>
    );
  
}
 

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
