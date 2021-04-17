import { Link } from 'react-router-dom'

function MealItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div className="card custom-card" style={{ width: '18rem' }}>
      <img
        src={strMealThumb}
        className="card-img-top"
        alt={strMeal}
      ></img>
      <div className="card-body">
        <h5 className="card-title text-center">{strMeal}</h5>
        <p className="card-text"></p>
        <div className="d-grid gap-2">
          <Link className="btn btn-secondary" to={`/meal/${idMeal}`}>
            WATCH RECIPE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MealItem;