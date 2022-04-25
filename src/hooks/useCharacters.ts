import axios from 'axios';
import {useState} from 'react';
import {Character} from '../types';

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getCharacters = () => {
    console.log('hello');
    setLoading(true);
    axios
      .get(
        'https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/superheroes',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(function (response) {
        console.log(response);
        setCharacters(response.data);
      })
      .catch(function (_error) {
        setError(_error.message);
      })
      .then(function () {
        setLoading(false);
      });
  };

  return {
    characters,
    error,
    loading,
    getCharacters,
  };
};

export default useCharacters;
function useCallbacks(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
