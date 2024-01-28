import styles from "../styles/AboutUs.module.css";
import Image from "next/image";
import React from 'react'
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.about}>
      <h1>- OUR STORY -</h1>
      <h3> Every Flavor Tells a Story</h3>
      <p> Charming pizza restaurant that delights both 
       locals and visitors alike. <br />As soon as you step inside 
       the aroma of freshly baked dough and <br />bubbling cheese  
       fills the air, instantly whetting your appetite <br />
       The friendly staff welcomes you with genuine smiles and guides
        you to <br />a cozy table. </p>
        
      </div>

      <div className={styles.item}>
      <Image src="/img/restoo.jpg" objectFit="cover"  alt="image" width={800} height={500}/>
      </div>
     
    
          </div>
   
  )
}

export default AboutUs
