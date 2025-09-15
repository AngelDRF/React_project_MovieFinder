import Searchbar from "./ui/Searchbar";

const Landing = ({ setSearchResults }) => {
    return (
        <div className="search__container">
            <h1>Look for your Movie</h1>
            <Searchbar setSearchResults={setSearchResults} />
        </div>
    );
};

export default Landing;