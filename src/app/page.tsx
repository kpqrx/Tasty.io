'use client'

import { Input, PageHeader, RecipeThumbnail } from '@/components'

const xd = Array(7).fill({
  label: 'Spaghetti aglio e olio',
  imageSrc:
    'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=330&h=220&dpr=2',
  imageWidth: 330,
  imageHeight: 220,
  href: '#',
  variant: 'secondary',
})

export default function Home() {
  return (
    <>
      <PageHeader>Recipes</PageHeader>
      <div className="flex flex-col gap-6 flex-1">
        <section>
          <h2 className="text-2xl leading-loose">What would you like to eat</h2>
          <p className="text-neutral-500">
            Tell us what would you like to eat. We will do our best to satisfy
            you.
          </p>
        </section>
        <Input
          label="Search recipe"
          placeholder="Search..."
        />
        <section className="flex flex-col gap-2">
          <h2 className="text-2xl leading-loose">
            Search results for
            <span className="text-accent-darker mx-4">
              &bdquo;spicy pasta&rdquo;
            </span>
            :
          </h2>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {xd.map((recipeData, index) => (
              <RecipeThumbnail
                key={index}
                {...recipeData}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
