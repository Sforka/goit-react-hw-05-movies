export const MovieDetailItem = ({ overview, name, title, score, genres }) => {
  if (genres) {
    return (
      <div>
        <h1>{name || title}</h1>
        <p>User score: {score}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <ul>
          <h3>Genres</h3>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    );
  }
};
