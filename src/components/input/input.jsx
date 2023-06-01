/* eslint-disable react/destructuring-assignment */
import * as S from './styled';

export default function Input(props) {
  return (
    <S.searchInput
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
