import styles from "../styles/Chef.module.css";
import React from 'react'
import Image from "next/image";

const Chef = () => {
  return (
    <div>
<div className={styles.pagetitle}>
  <h1>- MEET OUR TEAM -</h1>
</div>
       <div className={styles.container}>
        
         <div className={styles.block}>
        <img src="/img/chef1.jpg" alt="Image 1" className={styles.image} />
        <h2 className={styles.title}>Steave Den</h2>
      </div>
      <div className={styles.block}>
        <img src="/img/chef3.jpg" alt="Image 2" className={styles.image} />
        <h2 className={styles.title}>Lily Sopy</h2>
      </div>
      <div className={styles.block}>
        <img src="/img/chef2.jpg" alt="Image 3" className={styles.image} />
        <h2 className={styles.title}>Willium Joe</h2>
      </div>
   </div>
    </div>
  )
}

export default Chef
