import { useDispatch } from 'react-redux';
import { useState, React } from 'react';
import SearchUsers from '../../api/searchApi';
import {
  setIsSearching,
  setSearchBy,
  setUsersData,
  setTotalCount,
  setSortBy,
  setOrder,
  setPage,
} from '../../store/usersDataSlice';
import * as S from './styled';
import Button from '../button/button';
import Input from '../input/input';

export default function SearchBlock() {
  const [searchValue, setSearchValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [isSearch, setIsSearch] = useState(true);
  const dispatch = useDispatch();

  const onValueChange = (val) => {
    setSearchValue(val.target.value);
  };

  const HandleClickChanges = async (e) => {
    e.preventDefault();
    if (searchValue !== '') {
      setInputError(false);
      dispatch(setSearchBy(searchValue));
      dispatch(setIsSearching(true));
      const data = await SearchUsers(searchValue, 'joined', 'desc', 1);

      setTimeout(() => {
        dispatch(setIsSearching(setIsSearch(!isSearch)));
      }, 3000);

      if (data.items.length === 0) {
        dispatch(setUsersData([]));
        dispatch(setTotalCount('0'));
      } else {
        dispatch(setUsersData(data.items));
        dispatch(setTotalCount(data.total));
        dispatch(setSortBy('joined'));
        dispatch(setOrder('desc'));
        dispatch(setPage(1));
      }
    } else {
      setInputError(true);
    }
  };

  return (
    <S.inputContainer>
      <Input
        placeholder="введите логин"
        onChange={(val) => {
          onValueChange(val);
        }}
      />
      <S.inputLine />
      {inputError === true ? (
        <S.inputError>поле не может быть пустым</S.inputError>
      ) : null}
      <Button onClick={(e) => HandleClickChanges(e)} text="Поиск" />
    </S.inputContainer>
  );
}
