import { useState, useEffect } from 'react';

import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };

    getData();
  }, [url]);

  return { data };
};

export default useFetchData;
