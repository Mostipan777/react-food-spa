import { Link } from 'react-router-dom'

function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  const str = strCategoryDescription.slice(0, 150) + '...';

  return (
    <div className="card custom-card" style={{ width: '18rem' }}>
      <img
        src={strCategoryThumb}
        className="card-img-top"
        alt={strCategory}
      ></img>
      <div className="card-body">
        <h5 className="card-title text-center">{strCategory}</h5>
        <p className="card-text">{str}</p>
        <div className="d-grid gap-2">
          <Link className="btn btn-secondary" to={`/category/${strCategory}`}>
            WATCH CATEGORY
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
