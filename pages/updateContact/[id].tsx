import type { NextPage } from "next";
import Head from "next/head";
import styles from "./styles.module.css";
import { useLazyGetContactQuery } from "../../api/contact";
import { DetailContact } from "../../components/DetailContact/DetailContact";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { UpdateContact } from "../../components/UdateContact/UnpdateContact";

const UpdateForm: NextPage = () => {
  const router = useRouter();
  const id = useMemo(() => {
    return router.query.id?.toString();
  }, [router.query.id]);

  const [getDetailsContactInfo, { data, isSuccess }] =
    useLazyGetContactQuery();

  useEffect(() => {
    if (id) {
      getDetailsContactInfo(id);
    }
  }, [getDetailsContactInfo, id]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Détail de contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UpdateContact contact={data!} />
    </div>
  );
};

export default UpdateForm;
