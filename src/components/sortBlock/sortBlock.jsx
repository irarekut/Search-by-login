import { useSelector, useDispatch } from 'react-redux';
import SearchUsers from '../../api/searchApi';
import {
  setUsersData,
  setIsSearching,
  setTotalCount,
  setSortBy,
  setOrder,
  setPage,
} from '../../store/usersDataSlice';
import * as S from './styled';

export default function SortBlock() {
  const dispatch = useDispatch();
  const searchBy = useSelector((state) => state.usersData.searchBy);
  const dataUsers = useSelector((state) => state.usersData.usersData);
  const isSearching = useSelector((state) => state.usersData.isSearching);

  const HandleClickSort = (val) => async (e) => {
    e.preventDefault();
    if (searchBy !== '' && typeof searchBy !== 'undefined') {
      dispatch(setIsSearching(true));
      setTimeout(() => {
        dispatch(setIsSearching(false));
      }, 3000);
      const data = await SearchUsers(searchBy, 'repositories', val, 1);

      if (data.items.length === 0) {
        dispatch(setUsersData([]));
        dispatch(setTotalCount('0'));
      } else {
        dispatch(setUsersData(data.items));
        dispatch(setTotalCount(data.total));
        dispatch(setSortBy('repositories'));
        dispatch(setOrder(val));
        dispatch(setPage(1));
      }
    }
  };
  return (
    <S.sortWrapper>
      {dataUsers.length !== 0 && !isSearching ? (
        <S.sortContainer>
          <S.sortTitle>Сортировать по:</S.sortTitle>
          <S.sortButtonWrapper>
            <S.sortButton onClick={HandleClickSort('desc')}>
              Возрастанию
            </S.sortButton>
            <S.sortButton onClick={HandleClickSort('asc')}>
              Убыванию
            </S.sortButton>
          </S.sortButtonWrapper>
        </S.sortContainer>
      ) : null}
    </S.sortWrapper>
  );
}
