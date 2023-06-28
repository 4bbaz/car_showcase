"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "./SearchManufacturer";

export const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar">
     <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
    </form>
  );
};
