import React, { useState } from "react";
import { SearchManufacturer } from "./";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
};
