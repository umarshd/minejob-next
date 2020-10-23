import Head from "next/head";
import React from "react";
import EditProfilePage from "../components/dashboard/EditProfilePage";
import Sidebar from "../components/layouts/dashboard/Sidebar";
import Header from "../components/layouts/Header";

export default function editprofile() {
  return (
    <>
      <Head>
        <title>Edit Profile</title>
      </Head>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <EditProfilePage />
          </div>
        </div>
      </main>
    </>
  );
}
