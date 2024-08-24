import React from "react";

function SearchEngine({ query, setQuery, search, }) {
  return (
    <>
    
 <div>
 <h2>Check Weather</h2>
 </div>
    
    <div className="SearchEngine">
      <input
        type="text"
        className="form-control "
        placeholder="Enter city name"
        name="query"
        value={query}
        onKeyPress={search}  
        onChange={(e) => setQuery(e.target.value)}
    /> 
      
    
    </div>
    </>
  );
}

export default SearchEngine;
