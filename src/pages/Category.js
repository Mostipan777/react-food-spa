import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilteredCategory } from '../api';
import Preloader from '../components/Preloader';
import Meals from '../components/Meals';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>
  {!meals.length ? <Preloader/> : <Meals meals={meals}/>}
  </>
  
}

export default Category;
