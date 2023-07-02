'use client'

import { Input, PageHeader, RecipeThumbnail } from '@/components'
import { fetchRecipesByQuery } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useState, type ChangeEventHandler } from 'react'
import { useDebounce } from 'usehooks-ts'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  const { data, isSuccess, isInitialLoading, isError } = useQuery(
    ['searchRecipes', debouncedSearchQuery],
    () => fetchRecipesByQuery(debouncedSearchQuery),
    {
      enabled: debouncedSearchQuery.length > 2,
      select: (data) =>
        data.map(({ image, id, title }) => ({
          id,
          label: title,
          imageSrc: image,
          href: `/recipes/${id}`,
        })),
    },
  )

  const handleSetSearchQuery = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    (event) => {
      const {
        target: { value },
      } = event
      setSearchQuery(value)
    },
    [setSearchQuery],
  )

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
          value={searchQuery}
          onChange={handleSetSearchQuery}
        />
        {isInitialLoading && (
          <h2 className="text-2xl leading-loose">Loading...</h2>
        )}
        {isError && (
          <>
            <h2 className="text-2xl leading-loose">Something went wrong</h2>
            <p className="text-neutral-500">Please try again later.</p>
          </>
        )}
        {isSuccess && (
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl leading-loose">
              Search results for
              <span className="text-accent-darker mx-4">
                &bdquo;{debouncedSearchQuery}&rdquo;
              </span>
              :
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {data.map(({ id, ...recipeData }) => (
                <RecipeThumbnail
                  key={id}
                  {...recipeData}
                  variant="secondary"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
