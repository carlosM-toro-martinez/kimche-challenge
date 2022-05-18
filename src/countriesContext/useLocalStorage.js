import { useQuery} from "@apollo/client";



function useCards(queryRequire) {
  const {loading, error, data } = useQuery(queryRequire);
  

  return {
    data,
    loading,
    error
  };
}

export { useCards };
