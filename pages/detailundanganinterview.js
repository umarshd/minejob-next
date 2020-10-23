import Head from "next/head";
import React from "react";
import DetailUndanganPage from "../components/dashboard/DetailUndanganPage";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import Header from "../components/layouts/Header";

export default function detailundanganinterview() {
  return (
    <>
      <Head>
        <title>Detail Undangan</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <DetailUndanganPage />
          </div>
        </div>
      </main>
    </>
  );
}
