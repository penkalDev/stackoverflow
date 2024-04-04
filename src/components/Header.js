import React from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';

function Header({ loading, error, pageSize, handlePageSizeChange }) {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        StackOverflow Tags Browser
      </Typography>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {!loading && !error && (
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="subtitle1" component="span" marginRight={2}>
            Items per page:
          </Typography>
          <input type="number" value={pageSize} onChange={handlePageSizeChange} />
        </Box>
      )}
    </>
  );
}

export default Header;
