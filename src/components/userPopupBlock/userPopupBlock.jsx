import { useDispatch, useSelector } from 'react-redux';
import { setPopupStatus } from '../../store/usersDataSlice';
import * as S from './styled';

export default function UserPopupBlock() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.usersData.user);

  return (
    <S.userWrapper onClick={() => dispatch(setPopupStatus(false))}>
      <S.usersContainer onClick={(e) => e.stopPropagation()}>
        <S.userAvatar src={userData.img} />
        <S.userLogin>{userData.login}</S.userLogin>
        <S.userUrl href={userData.url}>Посмотреть профиль на gitHab</S.userUrl>
      </S.usersContainer>
    </S.userWrapper>
  );
}
