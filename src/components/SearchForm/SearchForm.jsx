import { useState } from 'react';
import css from './SearchForm.module.css';
import { BsSearch } from 'react-icons/bs';

const SearchForm = ({handleSearch}) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(value);
    setValue('');
  };

  return (
    <>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <BsSearch />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={value}
        />
      </form>
    </>
  );
};

export default SearchForm;
