import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from 'components/GalleryItem/GalleryItem.module.css';

export const GalleryItems = ({ images, name, title, id }) => {
  const location = useLocation();
  let image = 'https://image.tmdb.org/t/p/w300' + images;
  if (images === null) {
   return 
  }
  return (
    <li className={css.trendsGalleryItems}>
      <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
        <img src={image} alt={name || title} />
        <p>{name || title}</p>
      </Link>
    </li>
  );
};

GalleryItems.propTypes = {
  index: PropTypes.number.isRequired,
  images: PropTypes.string,
  alt: PropTypes.string,
};
