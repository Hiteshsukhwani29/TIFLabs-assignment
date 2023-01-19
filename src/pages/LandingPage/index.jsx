import React, { useState } from "react";
import Form from "../../components/Form";
import Table from "../../components/Table";

function Index() {
  const [rows, setrows] = useState([]);
  console.log(rows);
  return (
    <div className="p-4">
      <Form rows={rows} setrows={setrows}/>
      <Table rows={rows} />
    </div>
  );
}

export default Index;
