"use client";

import { useState } from "react";
import List from "./Components/List";
import Modal from "./Components/Modal";
import "public/css/random.css";

const Random = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className="w-full h-full">
      {modal && <Modal closeModal={closeModal} />}
      <div
        className="flex items-center justify-center"
      >
        <div className="w-[1000px] h-full">
          <div className="main-contents">
            <div className="random-title flex justify-between">
              <span>랜덤팀원구하기</span>
              <button onClick={openModal}>+</button>
            </div>
            <div>
              <List />
              <List />
              <List />
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
