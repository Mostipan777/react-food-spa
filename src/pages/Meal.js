import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

function Meal() {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  const item = meal[0];

  useEffect(() => {
    getMealById(id).then((data) => setMeal(data.meals));
  }, [id]);

  return (
    <>
      {!meal.length ? (
        <Preloader />
      ) : (
        <div className="card mb-3 meal-card">
          <img
            src={item.strMealThumb}
            className="meal-img"
            alt={item.strMeal}
          ></img>
          <div className="card-body">
            <h5 className="card-title h3">{item.strMeal}</h5>
            <p className="card-text">
              <small className="text-muted">Area: {item.strArea}</small>
            </p>
            <p className="card-text">{item.strInstructions}</p>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Ingredient</th>
                  <th scope="col">Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(item).map((key) => {
                  if (key.includes('strIngredient') && item[key]) {
                    return (
                      <tr key={key}>
                        <td>{item[key]}</td>
                        <td>{item[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>

            {!item.strYoutube ? null : (
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${item.strYoutube.slice(
                    -11
                  )}`}
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Meal;
