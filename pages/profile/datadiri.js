import React from "react";
import DataDiriPage from "../../components/dashboard/DataDiriPage";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/Sidebar";

export default function datadiri() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <Sidebar active={"active"} />
            <DataDiriPage />
          </div>
        </div>
      </main>
    </>
  );
}
