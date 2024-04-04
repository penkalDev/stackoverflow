import React, { useState, useEffect } from 'react';
import { Container} from '@mui/material';
import Header from './components/Header';
import TagList from './components/List';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import { fetchTags } from './services/dataFetcher';

function App() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); 
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchTags(page, pageSize, sortBy);
        console.log(data)
        setTags(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize, sortBy]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(1); 
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setPage(1); 
  };

  return (
    <Container>
      <Header
        loading={loading}
        error={error}
        pageSize={pageSize}
        handlePageSizeChange={handlePageSizeChange}
      />
      {!loading && !error && (
        <>

          <Sort value={sortBy} onChange={handleSortChange} />
          <TagList tags={tags} />
          <Pagination
            totalItems={1000} 
            itemsPerPage={pageSize}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Container>
  );
}

export default App;

