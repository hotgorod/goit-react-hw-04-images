import { Component } from "react";
import css from './Searchbar.module.css'
import SearchForm from "components/SearchForm/SearchForm";

class SearchBar extends Component {
    render() {
        return (
          <>
            <header className={css.Searchbar}>
              <SearchForm handleSearch={this.props.handleSearch} />
            </header>
          </>
        );
    }
}

export default SearchBar;