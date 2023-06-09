import { useRef, useEffect, useState, useContext } from "react";
import ResultatsContext from "../store/resultats-context";

export default function ZoneDentree(props) {
  const inputRef = useRef(null);
  const [texteIndice, setTexteIndice] = useState("");
  const [compteurIndice, setCompteurIndice] = useState(0);

  const ctx = useContext(ResultatsContext);

  function envoyerRep(event) {
    event.preventDefault();
    const juste = props.onEnvoi(inputRef.current.value);
    if(juste) {
      inputRef.current.value = "";
      setTexteIndice("");
      setCompteurIndice(0);
    }
  }

  function passer(event) {
    event.preventDefault();
    inputRef.current.value = "";
    props.onSkip();
    inputRef.current.focus();
    setTexteIndice("");
    setCompteurIndice(0);
  }

  function indice(event) {
    event.preventDefault();
    let chaine = "";
    if(compteurIndice<=props.nomDrapeau.length-1) {
      let i;
      for(i=0; i<=compteurIndice; i++) {
        chaine += props.nomDrapeau[i];
      }
      for(i=i; i<=props.nomDrapeau.length-1; i++) {
        chaine += "*";
      }
      setCompteurIndice(compteurIndice+1);
      setTexteIndice(chaine);
      ctx.ajouterIndice();
    }
    inputRef.current.focus();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={envoyerRep} className="flex flex-col gap-2">
      <input type="text" className="border" ref={inputRef}/>
      <input type="submit" className="border" value="Envoyer"/>
      <button className="border" onClick={passer}>Passer</button>
      <button className="border" onClick={indice}>Indice</button>
      <span>{texteIndice}</span>
    </form>
  );
}