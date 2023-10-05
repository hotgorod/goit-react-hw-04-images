
import css from './Searchbar.module.css'
import SearchForm from "components/SearchForm/SearchForm";

const SearchBar= ({handleSearch}) => {
    
        return (
          <>
            <header className={css.Searchbar}>
              <SearchForm handleSearch={handleSearch} />
            </header>
          </>
        );
    }


export default SearchBar;