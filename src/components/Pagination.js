import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CustomPagination = ({ currentPage, onPageChange }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        page={currentPage}
        onChange={(event, value) => onPageChange(value)}
      />
    </Stack>
  );
};

export default CustomPagination;
