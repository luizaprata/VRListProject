
 

import URLS from 'resources/urls';
import { useEffect } from 'react';

export default function useAllCategoriesApi() {
  const {
    isLoading,
    errorMessage,
    payload,
    clearErrorMessage,
    fetchData,
  } = <CategoriesResponse>('get', URLS.TRIVIA.GET_ALL_CATEGORIES);

  useEffect(() => {
    fetchData();
    return () => {};
  }, [fetchData]);

  return { payload, isLoading, errorMessage, clearErrorMessage };
}