import MealItem from './MealItem'

function Meals(props) {
  const { meals = []} = props;

  return <div className="foods">
    {meals.map(el => (
      <MealItem key={el.idMeal} {...el}/>
    ))}
  </div>
}

export default Meals;
