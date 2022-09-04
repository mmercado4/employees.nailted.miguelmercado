import React from "react";
import { EmployeeQuery } from "../../tools/types";

interface Props {
  totalEmployees: number | null;
  query: EmployeeQuery;
  setQuery: Function;
}

const Pages: React.FC<Props> = ({ totalEmployees, query, setQuery }) => {
  let numberOfPages = totalEmployees
    ? Math.ceil(totalEmployees / query.limit)
    : 1;

  const changePage = (page: number) => {
    let { limit } = query;
    let offset = limit * page;
    setQuery({ ...query, offset: offset });
  };

  const renderPages = () => {
    let pages = [];
    for (let i = 0; i < numberOfPages; i++) {
      pages.push("page");
    }
    return pages.map((page, i) => {
      return (
        <p className="page" key={`page-${i}`} onClick={() => changePage(i)}>
          {i + 1}
        </p>
      );
    });
  };

  return (
    <div className="pages-container">
      <div className="pages"> {renderPages()}</div>
      <div className="limit-page">
        <label htmlFor="limitOfEmployees">
          Limit:
          <select
            name="limitOfEmployees"
            id=""
            onChange={(e) =>
              setQuery({ ...query, limit: parseInt(e.target.value) })
            }
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Pages;
