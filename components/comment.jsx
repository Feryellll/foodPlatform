import styles from "../styles/comment.module.css";
import Image from "next/image";
import React from 'react';

const comment= () => {
  return (
    <div>
    <div className={styles.container}>
    <img src="/img/com.jpg" alt="" height={700} width={1543} />
    </div>
    </div>
  )
}

export default comment
