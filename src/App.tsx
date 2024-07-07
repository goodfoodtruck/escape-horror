import { RoomCardComponent } from "./components/RoomCardComponent";

function App() {
  return (
    <div>
      <div className="flex mt-35" style={{height: "90vh"}}>
        <img className="w-1/2 p-5 object-contain" src="Characters.webp" />
        <div className="w-full p-5 self-center text-white">
          <h1 className="fantasy text-5xl my-5 font-bold">La maison horrifique</h1>
          <p>
            En équipe de 2 à 6 joueurs, vous devez trouver le moyen de vous échapper.
              Le compte à rebours est lancé : vous disposez de 60 minutes, pas une de plus.
              Une seule clé ne suffira pas à vous garantir votre liberté.
              <br></br>
              <br></br>
              À faire en famille, entre amis ou avec vos collègues, pour un anniversaire, un EVJF/EVG, un teambuilding ou juste pour le fun.
              <br></br>
              <br></br>
              Laissez-vous prendre par l’un de nos 3 escape game en plein cœur de Nice ou par nos escape games géants dans la forêt.
          </p>
        </div>
      </div>
      <div className="mt-20 text-center text-white">
        <h1 className="fantasy text-5xl font-bold">NOS ESCAPE ROOMS</h1>
        <p className="mt-5 mx-24">
          En famille ou entre amis, de la région ou en visite à Nice, particuliers ou professionnels, venez relever les défis de nos 3 salles ! 
          L’escape game est l’activité idéale pour se réunir autour d’une activité originale et créer des souvenirs mémorables. 
          De 2 à 30 joueurs en simultané | Âge : 6 ans + (au moins 1 adulte) | 12 ans +
        </p>
        <div className="flex w-full mt-16 justify-center">
          <RoomCardComponent
            imageUrl= "diris.webp"
            title= "La cave du psychopathe"
            theme= "Horreur psychologique"
            difficulty= "Difficile"
            players={3}
            duration={60}
          />
          <RoomCardComponent
            imageUrl= "maisona.png"
            title= "La maison horrifique"
            theme= "Horreur | Paranormal "
            difficulty= "Facile"
            players={4}
            duration={60}
          />
          <RoomCardComponent
            imageUrl= "ville.webp"
            title= "Serial-killer en liberté"
            theme= "Peur | Crime"
            difficulty= "Moyenne"
            players={4}
            duration={60}
          />
        </div>
      </div>
      <div className="mt-36 text-white bg-stone-800 pt-10">
        <h1 className="fantasy text-5xl text-center font-bold">NOTRE EQUIPE</h1>
        <div className="flex " style={{height: "80vh"}}>
          <p className="w-1/2 pl-10 self-center">
            Avec plus de 9 années d’expérience en événements spéciaux, nous sommes en mesure de concevoir des jeux de cohésion et activités de groupe prêts à l’emploi et amusants.
            <br></br>
            <br></br>
            Activités de team building : escape games classiques et géants, jeux de défis ou d’horreur,
            nous créons des événements aussi bien pour adultes que pour enfants et quel que soit le nombre de participants, allant de 2 à 300 !
          </p>
          <img className="w-1/2 p-5 object-contain" src="team.webp" />
        </div>
      </div>
    </div>
  );
}

export default App;
