import Link from "next/link";
import styles from 'public/css/SignUp.module.css'
import { useState } from "react";

const SignUpForm = () => {
 const [selected, setSelected] = useState("");

 const departments = require("public/data/department.json");

 const handleSelectOption = (e) => {
   setSelected(e.target.value);
 };
  return (
    <form
      className={`${styles.box} flex flex-col items-center`}
      method="POST"
    >
      <div className={`${styles.logo}`}>
        <Link href={"/"}>LOGO</Link>
      </div>
      <div className={`${styles.input} flex flex-col justify-center`}>
        <input name="name" type="text" placeholder="이름" />
      </div>
      <div className={`${styles.input} flex flex-col justify-center`}>
        <input name="studentId" type="text" placeholder="학번" />
      </div>
      <div className={`${styles.input} flex flex-col justify-center`}>
        <input name="password" type="password" placeholder="비밀번호" autoComplete="off"/>
      </div>
      <div className={`${styles.input} flex flex-col justify-center`}>
        <select
          name="department"
          onChange={handleSelectOption}
          value={selected}
          className={`${styles.seletBox} flex flex-col justify-center`}
        >
          {departments.map((department) => (
            <option value={department} key={department}>
              {department}
            </option>
          ))}
        </select>
      </div>
      <div className={`flex flex-col justify-center`}>
        <button type="submit" className={`${styles.signupBtn}`}>
          회원가입
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
