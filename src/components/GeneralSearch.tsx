import React from "react";

const GeneralSearch = () => {
  return (
    <div className="flex justify-end">
      <input
        type="text"
        placeholder="General Search"
        className="input input-bordered w-full max-w-xs bg-white border-4"
      />
      <div className="btn-group">
        <button className="btn btn-ghost hover:bg-black bg-alta-blue text-white">
          Search
        </button>
        <button className="btn btn-ghost hover:bg-black bg-alta-orange text-white">
          Add New
        </button>
      </div>
    </div>
  );
};

export default GeneralSearch;
