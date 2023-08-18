"use client";

import Link from "next/link";
import SignIn from "./Components/SignIn";
import SignBtn from "./Components/SignBtn";
import "public/css/main.css";

export default function Home() {
  return (
    <div className="main-background">
      <div className="login-box">
        <div className="login-logo">
          <Link href={"/"}>LOGO</Link>
        </div>
        <SignIn />
        <SignBtn />
      </div>
    </div>
  );
}
