import StepsList from './StepsList'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StepsList> = {
  component: StepsList,
  args: {
    items: [
      'Bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions until al dente. Drain the pasta, reserving about 1/4 cup (60 ml) of the cooking water.',
      'While the pasta is cooking, heat the olive oil in a large skillet over medium heat. Add the sliced garlic and red pepper flakes, and sauté until the garlic turns golden brown and becomes fragrant, about 2-3 minutes. Be careful not to burn the garlic.',
      'Remove the skillet from heat and add the cooked spaghetti directly into the skillet with the garlic and oil. Toss the pasta to coat it evenly with the garlic-infused oil. If the pasta seems dry, add some of the reserved cooking water a little at a time until you reach your desired consistency.',
      'Season the spaghetti aglio e olio with salt and freshly ground black pepper to taste. Toss again to distribute the seasoning evenly.',
      'Transfer the pasta to serving plates or a large bowl. Garnish with freshly chopped parsley and, if desired, sprinkle with grated Parmesan cheese.',
      'Serve immediately while the spaghetti aglio e olio is hot and enjoy!',
    ],
  },
}

export default meta
type Story = StoryObj<typeof StepsList>

export const Default: Story = {}
