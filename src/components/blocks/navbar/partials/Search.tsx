import { FC } from 'react';
const Search: FC = () => {
  return (
    <div className="offcanvas offcanvas-top bg-light" id="offcanvas-search" data-bs-scroll="true">
      <div className="container d-flex flex-row py-6">
        <form className="search-form search-bar w-100">
          <input
            type="text"
            id="search-form"
            className="form-control search-input"
            placeholder="Type keyword and hit enter"
          />
        </form>

        <button
          type="button"
          aria-label="Close"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        />
        <ul className="results-list"></ul>
      </div>
    </div>
  );
};

export default Search;
