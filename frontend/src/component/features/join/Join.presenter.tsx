import * as S from "./Join.styled";
import * as C from "../../commons/Commons.styled";
import { JoinProps } from "./Join.types";

const JoinPresenter = (props: JoinProps) => {
  return (
    <>
      <S.Background>
        <C.SpareTitle>DripDrop</C.SpareTitle>
        <S.JoinWrapper>
          <S.JoinTitle>회원가입</S.JoinTitle>
          <S.IdCheckWrapper>
            <S.IdInput placeholder="아이디" onChange={props.onChangeId} />
            <S.IdCheckBtn onClick={props.onClickIdOverlapping}>
              중복확인
            </S.IdCheckBtn>
          </S.IdCheckWrapper>
          <S.PasswordWrapper>
            <C.Input
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
            <S.PasswordInfo>
              영문,숫자 특수문자(~!@#$%^&*)조합 8~15자리
            </S.PasswordInfo>
            <C.Input
              type="password"
              placeholder="비밀번호 확인"
              onChange={props.onChangeRePassword}
            />
          </S.PasswordWrapper>
          <S.EmailWrapper>
            <S.Email placeholder="이메일" onChange={props.onChangeEmail} />
            <S.JoinText> @ </S.JoinText>
            <S.EmailSelect onChange={props.selectEmailDomain}>
              <option value="">직접입력</option>
              <option value="naver.com">naver.com</option>
            </S.EmailSelect>
          </S.EmailWrapper>
          <S.JoinInfoWrapper>
            <S.Label>
              <S.JoinInfo type="checkbox" />
              필수 및 선택 항목을 모두 포함하여 동의합니다
            </S.Label>
            <S.Label>
              <S.JoinInfo type="checkbox" />
              [필수] 서비스 약관 동의
            </S.Label>
            <S.Label>
              <S.JoinInfo type="checkbox" />
              [필수] 개인정보 수집 및 동의
            </S.Label>
            <S.Label>
              <S.JoinInfo type="checkbox" />
              [선택] 마케팅 수신 동의
            </S.Label>
          </S.JoinInfoWrapper>
          <C.Button onClick={props.onClickJoin}>회원가입</C.Button>
        </S.JoinWrapper>
      </S.Background>
    </>
  );
};

export default JoinPresenter;
