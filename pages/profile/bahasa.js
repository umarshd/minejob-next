import React from "react";
import Head from "next/head";
import BahasaPage from "../../components/dashboard/BahasaPage";
import Sidebar from "../../components/layouts/dashboard/profile/SidebarProfile";
import Header from "../../components/layouts/Header";

export default function bahasa() {
  return (
    <>
      <Head>
        <title>Bahasa</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <BahasaPage />
          </div>
        </div>
      </main>
    </>
  );
}
