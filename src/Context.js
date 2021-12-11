import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import ApiPexels from './services/ApiPexels';

export const AlbumContext = createContext();

export const AlbumContextProvider = (props) => {

  const [photos, setPhotos] = useState([]);
  const [limit, setLimit] = useState(6);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setSearchPhotos] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {

    if (!query) {

      async function loadPhotos() {

        await ApiPexels().photos
          .curated({ page: currentPage, per_page: limit })
          .then((response) => setPhotos(response.photos))
          .catch(error => console.log(error));

        const totalPages = 100;

        const arrayPages = [];
        for (let i = 1; i <= totalPages; i++) {
          arrayPages.push(i);
        }

        setPages(arrayPages);
      }

      loadPhotos();
    } else {

      async function searchPhotos() {

        await ApiPexels().photos
          .search({ query, page: currentPage, per_page: limit })
          .then((response) => {
            return (
              setTotal(response.total_results),
              setPhotos(response.photos)
            )
          })
          .catch(error => console.log(error));

        const totalPages = Math.ceil(total / limit);

        const arrayPages = [];

        for (let i = 1; i <= totalPages; i++) {
          arrayPages.push(i);
        }

        setPages(arrayPages);        
      }

      searchPhotos();
    }

  }, [currentPage, limit, query, total]);

  const limits = useCallback((e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  }, []);

  const InputSearch = useCallback((e) => {
    setSearchPhotos(e.target.value);
    setCurrentPage(1);
  }, []);

  return (
    <AlbumContext.Provider value={{ photos, pages, currentPage, setCurrentPage, limits, InputSearch }}>
      {props.children}
    </AlbumContext.Provider>
  );
};

export function useAlbum() {

  const context = useContext(AlbumContext);

  return context;
}