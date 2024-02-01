import {Movie} from './Movie'

function Movies(props) {
    const {movies} = props;
    return <div className="movies">
        {movies.length ? 
        movies.map(movie => (
            <Movie key={movies.imbdID} {...movie} />
        )) :
        <h4>__nothing bitch__</h4>
        }
    </div>;
}

export {Movies} 