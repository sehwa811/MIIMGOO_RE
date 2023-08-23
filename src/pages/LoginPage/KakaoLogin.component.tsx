import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { kakaoLogin } from "../../api/kakaoLogin.api";
import { useDispatch } from "react-redux";


export default function KakaoLoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { search } = useLocation();
  
  const mutation = useMutation(kakaoLogin, {
    onSuccess: () => {
      setTimeout(() => navigate("/home"), 2000);
      dispatch({ type: "USER_LOG_IN", payload: true });
      dispatch({ type: "EMAIL_CHECKED", payload: true });
    },
    onError: (status: any) => {
      if (status.response.status === 403) {
        alert("로그인에 실패하였습니다. 재시도해 이메일 수집에 동의해주세요. ");
        dispatch({ type: "EMAIL_NOT_CHECKED", payload: false });
        navigate("/");
      }
    },
  });

  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      mutation.mutate(code);
    }
  };

  useEffect(() => {
    confirmLogin();
  }, []);

  return <div>logged in...</div>
}