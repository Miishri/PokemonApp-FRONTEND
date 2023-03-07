function Search() {
    let form = document.getElementById('searchForm') as HTMLFormElement;


    return (
        <>
        <form id='searchForm'>
        <input type="text" id="search" className="searchBar" placeholder="Search for Pokemon" name="search" />
        </form>
        </>
    );
}

export default Search;