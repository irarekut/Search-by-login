/* eslint-disable indent */
import { useSelector, useDispatch } from 'react-redux';
import { setPopupStatus, setUser } from '../../store/usersDataSlice';
import * as S from './styled';

export default function UsersDataBlock() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.usersData.usersData);
  const searchBy = useSelector((state) => state.usersData.searchBy);
  const isSearching = useSelector((state) => state.usersData.isSearching);
  let usersData = [];
  if (data.length > 0) {
    usersData = data;
  }

  const HandleClickUser = (user) => {
    dispatch(setPopupStatus(true));
    dispatch(setUser(user));
  };

  if (isSearching) {
    return <S.usersNote>Идет поиск</S.usersNote>;
  }

  return (
    <S.userWrapper>
      {usersData.length === 0 &&
      searchBy !== '' &&
      typeof searchBy !== 'undefined' ? (
        <S.usersNote>Совпадения не найдены</S.usersNote>
      ) : null}
      <S.usersContainer>
        {usersData.map((user) => (
          <li key={user.login}>
            <S.userLogin onClick={() => HandleClickUser(user)}>
              {user.login}
            </S.userLogin>
          </li>
        ))}
      </S.usersContainer>
    </S.userWrapper>
  );
}
