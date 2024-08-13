import { TextInput, Button } from "./styled.js";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Create = () => {
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);

  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [dietaryRestrictionList, setDietaryRestrictionList] = useState([]);

  const handleIngredientInput = (e) => {
    setIngredient(e.target.value);
  };
  const handleIngredientAdd = () => {
    if (ingredient.trim()) {
      setIngredientsList([...ingredientsList, ingredient.trim()]);
      setIngredient("");
      console.log(ingredientsList);
    }
  };

  const handleDietaryRestrictionInput = (e) => {
    setDietaryRestriction(e.target.value);
  };
  const handleDietaryRestrictionAdd = () => {
    if (dietaryRestriction.trim()) {
      setDietaryRestrictionList([
        ...dietaryRestrictionList,
        dietaryRestriction.trim(),
      ]);
      setDietaryRestriction("");
    }
  };

  useEffect(() => {
    console.log(ingredientsList);
  }, [ingredientsList]);

  return (
    <>
      <h3> Add your ingredients </h3>
      <TextInput
        type="text"
        placeholder="Peanuts!"
        value={ingredient}
        onChange={handleIngredientInput}
      />
      <ol style={{ paddingLeft: 0, marginLeft: 0, textAlign: "left" }}>
        {ingredientsList.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ol>
      <Button onClick={handleIngredientAdd}>+</Button>

      <h3> Add dietary restriction </h3>
      <TextInput
        type="text"
        placeholder="Diabetes"
        value={dietaryRestriction}
        onChange={handleDietaryRestrictionInput}
      />
      <ol style={{ paddingLeft: 0, marginLeft: 0, textAlign: "left" }}>
        {dietaryRestrictionList.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ol>
      <Button onClick={handleDietaryRestrictionAdd}>+</Button>
    </>
  );
};

export default Create;
