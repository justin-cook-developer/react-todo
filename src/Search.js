import React from "react";
import { useHistory } from "react-router-dom";
import qs from "qs";

import { useQuery } from "./hooks";

const Search = () => {
  const history = useHistory();
  const queryParams = useQuery();

  const searchTerm = queryParams.search && queryParams.search.length
    ? queryParams.search : "";

  const handleChange = (event) => {
    const value = event.target.value;

    if (!value) {
      delete queryParams.search;
    } else {
      queryParams.search = value;
    }

    history.push(`/?${qs.stringify(queryParams)}`);
  }

  return (
    <section className="section center" style={{ width: "50%" }}>
      <form>
        <div className="control">
          <input className="input" type="text" placeholder="Search..."
            value={searchTerm} onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}

export default Search;
