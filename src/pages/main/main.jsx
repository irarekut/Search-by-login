import { useSelector } from 'react-redux';
import * as S from './styled';
import SearchBlock from '../../components/searchBlock/searchBlock';
import UsersDataBlock from '../../components/usersDataBlock/usersDataBlock';
import PaginationBlock from '../../components/paginationBlock/paginationBlock';
import SortBlock from '../../components/sortBlock/sortBlock';
import UserPopupBlock from '../../components/userPopupBlock/userPopupBlock';

export default function Main() {
  const popupStatus = useSelector((state) => state.usersData.popupStatus);
  return (
    <>
      {popupStatus === true ? <UserPopupBlock /> : null}
      <S.wrapper>
        <S.searchContainer>
          <S.searchTitle>Поиск</S.searchTitle>
          <SearchBlock />
        </S.searchContainer>
        <SortBlock />
        <UsersDataBlock />
        <PaginationBlock />
      </S.wrapper>
    </>
  );
}
