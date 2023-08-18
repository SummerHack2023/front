"use client";

import SignUpBtn from "../Components/SignUpBtn";
import SignUpForm from './Components/SignUpForm'

export default function Signup() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex-col flex item-center">
        <SignUpForm />
        <SignUpBtn />
      </div>
    </div>
  );
}
