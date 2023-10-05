import { useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./Searchbar/Searchbar";


export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = searchText => {
    setSearchText(searchText);
    setCurrentPage(1);
  };
  
  const onLoadMoreClick = () => {
    setCurrentPage(currentPage + 1);
       
  };
  
    return (
      <div>
        <SearchBar handleSearch={handleSearch} />
        <ImageGallery
          currentPage={currentPage}
          searchText={searchText}
          onLoadMoreClick={onLoadMoreClick}
        />
      </div>
    );
  }

