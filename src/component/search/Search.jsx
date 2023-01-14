import SearchIcon from "@mui/icons-material/Search";
import "./search.scss";

const Search = () => {
  return (
    <>
      <div className="title">
        <h1>PHISh</h1>
        <div className="search-wrapper">
          <div className="search-bar">
            <SearchIcon />
            <input type="url" placeholder="Type a URL" className="search" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
