import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from 'components/GalleryItem/GalleryItem.module.css';

export const GalleryItems = ({ images, name, title, id }) => {
  let image = 'https://image.tmdb.org/t/p/w300' + images;
  if (images === null) {
   return 
  }
  return (
    <li className={css.trendsGalleryItems}>
      <Link key={id} to={`/movies/${id}`}>
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
