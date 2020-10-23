import Head from "next/head";
import React from "react";
import CariLowonganPage from "../components/dashboard/CariLowonganPage";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import Header from "../components/layouts/Header";

export default function carilowongan() {
  return (
    <>
      <Head>
        <title>Cari Lowongan</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <CariLowonganPage />
          </div>
        </div>
      </main>
    </>
  );
}
