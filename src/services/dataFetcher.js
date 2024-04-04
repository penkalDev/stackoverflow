import axios from 'axios';

const BASE_URL = 'https://api.stackexchange.com/2.3/tags';

export const fetchTags = async (pageNumber, pageSize, sortBy) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        page: pageNumber,
        pagesize: pageSize,
        order: 'desc',
        sort: sortBy,
        site: 'stackoverflow'
      }
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch tags: Unexpected response status');
    }

    const { items } = response.data;
    if (!items || !Array.isArray(items)) {
      throw new Error('Failed to fetch tags: Invalid response data');
    }

    return items;
  } catch (error) {
    throw new Error(`Failed to fetch tags: ${error.message}`);
  }
};







