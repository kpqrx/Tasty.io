import type { RecipeDetailsType, SearchedRecipeType } from '@/types'

export const transformRecipesByQueryData = (data: SearchedRecipeType[]) =>
  data.map(({ image, id, title }) => ({
    id,
    label: title,
    imageSrc: image,
  }))

export const transformRecipeDetailsData = (data: RecipeDetailsType) => {
  const {
    image,
    extendedIngredients,
    analyzedInstructions: [{ steps }],
    title,
    ...properties
  } = data

  const allowedProperties = [
    'diaryFree',
    'glutenFree',
    'vegan',
    'vegetarian',
    'servings',
    'readyInMinutes',
  ]

  const propertyLabels = {
    diaryFree: 'Diary free',
    glutenFree: 'Gluten free',
    vegan: 'Vegan',
    vegetarian: 'Vegetarian',
    servings: 'Servings',
    readyInMinutes: 'Preparation time',
  }

  const ingredientImageBaseUrl =
    'https://spoonacular.com/cdn/ingredients_100x100'

  type PropertyLabelType = keyof typeof propertyLabels

  return {
    name: title,
    imageSrc: image,
    properties: Object.entries(properties)
      .filter(([label]) => allowedProperties.includes(label))
      .map(([label, value]) => ({
        label: propertyLabels[label as PropertyLabelType],
        value,
      })),
    steps: steps.map(({ step }) => step),
    ingredients: extendedIngredients.map(
      ({ nameClean, image, amount, unit }) => ({
        label: nameClean,
        value: `${amount} ${unit}`,
        imageSrc: `${ingredientImageBaseUrl}/${image}`,
      }),
    ),
  }
}
