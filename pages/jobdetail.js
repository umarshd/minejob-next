import Head from "next/head";
import React from "react";
import JobDetailPage from "../components/dashboard/JobDetailPage";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import Header from "../components/layouts/Header";

export default function jobdetail() {
  return (
    <>
      <Head>
        <title>Job Detail</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <JobDetailPage />
          </div>
        </div>
      </main>
    </>
  );
}
