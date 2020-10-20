import Head from "next/head";
import React from "react";
import UnggahResumePage from "../../components/dashboard/UnggahResumePage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/Sidebar";

export default function unggahresume() {
  return (
    <>
      <Head>
        <title>Unggah Resume</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <UnggahResumePage />
          </div>
        </div>
      </main>
    </>
  );
}
