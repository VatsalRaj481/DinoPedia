import { useEffect, useState } from "react";
import { getAllDinos } from "../services/dinoApi";
import DinoCard from "../components/DinoCard";
import SearchBar from "../components/SearchBar";

function Search() {
  const [dinos, setDinos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllDinos().then(setDinos);
  }, []);

  const filtered = dinos.filter(d =>
    d.Name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Search Dinosaurs</h2>

      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map(dino => (
        <DinoCard key={dino.Name} dino={dino} />
      ))}
    </div>
  );
}

export default Search;
