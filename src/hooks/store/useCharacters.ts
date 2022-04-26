import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getCharacters as getData} from '../../store';
import {useCallback} from 'react';

const useCharacters = () => {
  const {items, loading, error} = useAppSelector(state => state.characters);
  const dispatch = useAppDispatch();

  const getCharacters = useCallback(() => dispatch(getData()), [dispatch]);

  return {
    items,
    error,
    loading,
    getCharacters,
  };
};

export default useCharacters;
