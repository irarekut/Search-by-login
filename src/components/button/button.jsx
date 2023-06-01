/* eslint-disable react/destructuring-assignment */
import * as S from './styled';

export default function Button(props) {
  return (
    <S.button type="submit" onClick={props.onClick}>
      {props.text}
    </S.button>
  );
}
