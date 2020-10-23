import Head from "next/head";
import React from "react";
import JadwalInterviewPage from "../components/dashboard/JadwalInterviewPage";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import Header from "../components/layouts/Header";

export default function jadwalinterview() {
  return (
    <>
      <Head>
        <title>Jadwal Interview</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <JadwalInterviewPage />
          </div>
        </div>
      </main>
    </>
  );
}
