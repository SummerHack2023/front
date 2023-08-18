import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from 'public/css/SignIn.module.css'

const SignIn = () => {
  return (
    <div className="flex items-center flex-col">
      <form>
        <div className={`${styles.id}`}>
          <input type="text" placeholder="아이디" />
          <FontAwesomeIcon icon={faUser} className={`${styles.loginIcon}`} />
        </div>
        <div className={`${styles.pwd}`}>
          <input type="password" placeholder="비밀번호" autoComplete="off" />
          <FontAwesomeIcon icon={faLock} className={`${styles.loginIcon}`} />
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className={`${styles.loginBtn}`}>
            로그인
          </button>
        </div>
      </form>
      <div className={`${styles.lineBox} flex items-center justify-center`}>
        <div className={`${styles.line}`}></div>
        <div className={`${styles.lineText}`}>또는</div>
        <div className={`${styles.line}`}></div>
      </div>
      <div className="flex items-center justify-center">
        <button type="submit" className={`${styles.OAuth}`}>
          OAuth
        </button>
      </div>
      <div className="flex items-center justify-center">
        <Link href={"/"} className={`${styles.findPwd}`}>
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
