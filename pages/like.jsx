import React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "./like.module.css";

const Like = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={styles.container}>
        <h1>2023년 5월 6일</h1>
        <Image
          src="/moonbear.jpg"
          alt="dog"
          width={300}
          height={300}
          priority
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p>달곰이랑 45분 동안 산책했다 !</p>
          <button
            className={styles.btn}
            onClick={() => setCount((prev) => prev + 1)}
          >
            💖&nbsp;&nbsp;&nbsp;{count}
          </button>
        </div>
      </div>
    </>
  );
};

export default Like;
