import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../../components/LoginButton.component";
import WelcomeMsg from "./WelcomeMsg.component";
import { ReactComponent as Kakao } from "./kakao2.svg";
import { emailRequest, getKakaoUrl } from "../../api/kakaoLogin.api";
import Logo from "./Logo.png";
import { selectKakaoEmailCheck } from "../../store/KakaoEmailCheck";

import {
  Background,
  LogoBox,
  ButtonBox,
  ButtonLabel,
  Label,
} from "../../styles/Login.styles";

export default function LoginPage() {
  const navigate = useNavigate();
  const emailChecked = useSelector(selectKakaoEmailCheck);

  const gotoHome = () => {
    navigate("/home");
  };

  return (
    <Background className="login-page">
      <WelcomeMsg />

      <LogoBox>
        <img src={Logo} />
      </LogoBox>

      <ButtonBox>
        <Button
          onClick={getKakaoUrl}
          color="#000"
          background="#FEE500"
          border="none"
        >
          <Label>
            <Kakao />
            <ButtonLabel>카카오 로그인</ButtonLabel>
          </Label>
        </Button>

        <Button onClick={gotoHome}>
          <ButtonLabel>비회원으로 둘러보기</ButtonLabel>
        </Button>
      </ButtonBox>
    </Background>
  );
}
