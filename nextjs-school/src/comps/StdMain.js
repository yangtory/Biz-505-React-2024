"use client";
import StdDetail from "./StdDetail";
import StdList from "./StdList";
import { useState } from "react";
import StdSearch from "./StdSerach";

// StdMain
export default () => {
  const [stdCode, setStdCode] = useState("");
  const [search, setSearch] = useState("");
  return (
    <>
      <>
        <StdList search={search} setStdCode={setStdCode} />
      </>
      <>
        <StdDetail stdCode={stdCode} />
      </>
    </>
  );
};
