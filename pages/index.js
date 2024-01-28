import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import AboutUs from "../components/AboutUs";
import Chef from "../components/Chef";
import Comment from "../components/comment";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Popolare</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <AboutUs />

      {admin &&  <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      <Chef />
      <Comment />
      {!close && <Add setClose={setClose} />}
      
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  try {
    const res = await axios.get("http://localhost:3000/api/products");
    return {
      props: {
        pizzaList: res.data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        pizzaList: [],
      },
    };
  }
  };

