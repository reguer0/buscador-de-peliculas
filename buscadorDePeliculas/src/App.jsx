import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/with-no-results.json'
function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0
  const renderMovies = () => {
   return ( 
      <ul>
        {
          movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} />

            </li>
          ))
        }
      </ul>
     )
    }
const renderNoResuts = () => {
  return (
    <p> No se han encontrado peliculas</p>
  )
}

  return (
    <div className='page'>
      <header>
        <form className='form'>
          <input type="text" placeholder='Avengers, Star Wars ...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies ? renderMovies() : renderNoResuts()
        }
      </main>
    </div>
  )
}

export default App
