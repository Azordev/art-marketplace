import { useLocation, useHistory } from "react-router-dom";

export const useSearchParams = () => {
    const { search } = useLocation();
    const { push } = useHistory();
    const searchParams = new URLSearchParams(search);

    const addQuery = (key, value) => {
      searchParams.set(key, value);
      push({
        pathname: 'artworks',
        search: searchParams.toString()
      });
    };

    const updateQueryParams = (key, value) => {
      searchParams.delete('page');
      searchParams.set(key, value);
      push({
        pathname: 'artworks',
        search: searchParams.toString()
      });
    };
	
	return { addQuery, updateQueryParams };
};
