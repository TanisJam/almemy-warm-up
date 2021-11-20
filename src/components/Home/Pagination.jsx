import React from "react";

export default function Pagination({ handlePagination, page }) {
  return (
    <div className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={`page-item ${page === 1 && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => handlePagination(page - 1)}
          >
            &laquo;
          </button>
        </li>
        <li className="page-item">
          <span className="page-link">{page}</span>
        </li>

        <li className={`page-item ${page === 10 && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => handlePagination(page + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
}
