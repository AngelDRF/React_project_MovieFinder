import Searchbar from "../components/ui/Searchbar";

const Home = ({ setSearchResults }) => {
  return (
    <div className="search__container">
      <h1>Look for your Movie</h1>
      <Searchbar setSearchResults={setSearchResults} />
    </div>
  );
};

export default Home;