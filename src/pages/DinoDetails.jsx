import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllDinos } from "../services/dinoApi";

function DinoDetails() {
  const { name } = useParams();
  const [dino, setDino] = useState(null);

  useEffect(() => {
    getAllDinos().then(data => {
      const found = data.find(d => d.Name === name);
      setDino(found);
    });
  }, [name]);

  if (!dino) return <p className="page">Loading...</p>;

  return (
    <div className="page">
      <h1>{dino.Name}</h1>
      <p>{dino.Description}</p>
      <p><b>Diet:</b> {dino.Diet || "Unknown"}</p>
      <p><b>Period:</b> {dino.Period || "Unknown"}</p>
      <p><b>Length:</b> {dino.Length || "Unknown"}</p>
    </div>
  );
}

export default DinoDetails;
