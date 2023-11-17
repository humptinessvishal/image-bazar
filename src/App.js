import React,{useState} from "react";
import Display from "./Components/Display";
import SearchBar from "./Components/Searchbar";;

const App = ()=>{
  const [searchResults, setSearchResults] = useState([]);
  return(
    <div>
      <SearchBar setSearchResults={setSearchResults}/>
      <Display searchResults={searchResults}/>
    </div>
  )
}

export default App;
