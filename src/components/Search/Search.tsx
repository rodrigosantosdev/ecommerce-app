import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  return (
    <form className="w-1/2 border-2 border-zinc-50 flex items-center gap-2 p-2 pl-4">
      <button type="button">
        <BiSearch size={20} />
      </button>
      <input
        type="search"
        name=""
        id=""
        placeholder="Procure seu produto"
        className="w-full p-2"
      />
    </form>
  );
}
