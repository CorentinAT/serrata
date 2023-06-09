import TabScores from "../components/scores/TabScores";

export default function Scores() {
  return (
    <>
      <div className="text-center">
        <a href="/" className='underline'>Retour Accueil</a>
        <h1>Scores</h1>
      </div>
      <div className="flex justify-around">
        <TabScores categorie="onu" key="scores_onu"/>
        <TabScores categorie="europe" key="scores_europe"/>
      </div>
    </>
  );
}