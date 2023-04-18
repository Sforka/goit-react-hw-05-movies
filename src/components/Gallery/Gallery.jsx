import { GalleryItems } from 'components/GalleryItem/GalleryItem';
import PropTypes from 'prop-types';
import css from 'components/Gallery/Gallery.module.css';

export function Gallery({ movies }) {
  return (
    <ul className={css.trendsGallery}>
      {movies.map(({ id, name, title, backdrop_path }, index) => (
        <GalleryItems
          id={id}
          key={index}
          images={backdrop_path}
          name={name}
          title={title}
          index={index}
        />
      ))}
    </ul>
  );
}

Gallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
