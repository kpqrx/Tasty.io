import { RecipeGrid } from '@/components'

export default function RecipePage() {
  return (
    <RecipeGrid
      name="Spaghetti aglio e olio"
      imageSrc="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=575&h=268&dpr=2"
      imageWidth={575}
      imageHeight={268}
      properties={[
        { label: 'Preparation time', value: '45 minutes' },
        { label: 'Servings', value: '2 servings' },
        { label: 'Diary free', value: 'Yes' },
        { label: 'Gluten free', value: 'Yes' },
        { label: 'Vegan', value: 'No' },
        { label: 'Vegetarian', value: 'Yes' },
      ]}
      steps={[
        'Bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions until al dente. Drain the pasta, reserving about 1/4 cup (60 ml) of the cooking water.',
        'While the pasta is cooking, heat the olive oil in a large skillet over medium heat. Add the sliced garlic and red pepper flakes, and sauté until the garlic turns golden brown and becomes fragrant, about 2-3 minutes. Be careful not to burn the garlic.',
        'Remove the skillet from heat and add the cooked spaghetti directly into the skillet with the garlic and oil. Toss the pasta to coat it evenly with the garlic-infused oil. If the pasta seems dry, add some of the reserved cooking water a little at a time until you reach your desired consistency.',
        'Season the spaghetti aglio e olio with salt and freshly ground black pepper to taste. Toss again to distribute the seasoning evenly.',
        'Transfer the pasta to serving plates or a large bowl. Garnish with freshly chopped parsley and, if desired, sprinkle with grated Parmesan cheese.',
        'Serve immediately while the spaghetti aglio e olio is hot and enjoy!',
      ]}
      ingredients={[
        {
          imageSrc:
            'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=82&h=36&dpr=2',
          imageWidth: 82,
          imageHeight: 36,
          label: 'Parmesan cheese',
          value: '50 grams',
        },
        {
          imageSrc:
            'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=82&h=36&dpr=2',
          imageWidth: 82,
          imageHeight: 36,
          label: 'Red pepper flakes ',
          value: '1 tsp',
        },
        {
          imageSrc:
            'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=82&h=36&dpr=2',
          imageWidth: 82,
          imageHeight: 36,
          label: 'Extra virgin olive oil',
          value: '120 ml',
        },
        {
          imageSrc:
            'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=82&h=36&dpr=2',
          imageWidth: 82,
          imageHeight: 36,
          label: 'Spaghetti',
          value: '225 grams',
        },
        {
          imageSrc:
            'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=82&h=36&dpr=2',
          imageWidth: 82,
          imageHeight: 36,
          label: 'Garlic',
          value: '4 cloves',
        },
      ]}
    />
  )
}
