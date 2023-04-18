import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from 'components/cast/cast.module.css'
import { API } from 'services/Api';
const Api = new API();


const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
 

  useEffect(() => {
    const response = Api.getCredits(movieId);
    response
      .then(res => {
        console.log(res);
        return setActors(movie => res.data.cast);
      })
      .catch(error => alert(error));
  }, [movieId]);

  return (
    <div>
     
      <ul className={css.castGallery}>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              width="200px"
              src={
                actor.profile_path
                  ? 'https://www.themoviedb.org/t/p/original' +
                    actor.profile_path
                  : 'https://i.stack.imgur.com/FJ65f.png'
              }
              alt={actor.original_name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
