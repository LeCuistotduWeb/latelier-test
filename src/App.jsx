import { useEffect, useState } from "react";
import SearchInput from "./components/input/SearchInput";
import Loader from "./components/loader/Loader";
import PlayersList from "./components/players/PlayersList";
import styles from './app.module.scss'

function App() {

  const [players, setPlayers] = useState([])
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  const filtering = p => {
    return p.firstname.toLowerCase().includes(search.toLocaleLowerCase()) 
    || p.lastname.toLowerCase().includes(search.toLocaleLowerCase())
  }

  useEffect(() => {
    setLoading(true);
    fetch('https://data.latelier.co/training/tennis_stats/headtohead.json')
      .then(response => response.json())
      .then(data => setPlayers(data.players))
      .catch((error) => {
        console.log({ error })
        setLoading(false);
        setError('Une erreur est survenue');
      })
      .finally((response) => {
        setLoading(false);
      })
  }, [])

  return (
    <div className={styles.app}>
      <SearchInput value={search} onChange={handleSearch} />

      {error && <div dangerouslySetInnerHTML={{ __html: error }} />}

      {loading
        ? <Loader />
        : <PlayersList players={players.filter(filtering)} />
      }      
    </div>
  );
}

export default App;
