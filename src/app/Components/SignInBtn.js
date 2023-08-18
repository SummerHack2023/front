import Link from "next/link";
import styled from 'styled-components';

const SignInBtn = () => {
  return (
    <SignInDiv className="signup-box">
      <span>
        계정이 없으신가요?{" "}
        <Link href={"/signup"} style={{color: "blue"}}>
          가입하기
        </Link>
      </span>
    </SignInDiv>
  );
};

const SignInDiv = styled.div`
  width: 400px;
  padding: 15px;
  margin-top: 40px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.01);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`

export default SignInBtn;
