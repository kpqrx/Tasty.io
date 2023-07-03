'use client'

import { PageHeader, RecipeThumbnail } from '@/components'
import { useSavedRecipesStore } from '@/store'
import { useEffect, useState } from 'react'

function SavedRecipesPage() {
  const [isStoreReady, setIsStoreReady] = useState(false)
  const { savedRecipes } = useSavedRecipesStore()

  useEffect(() => setIsStoreReady(true), [])

  return (
    <>
      <PageHeader>Saved recipes</PageHeader>
      {!isStoreReady && <p>Loading...</p>}
      {isStoreReady && savedRecipes.length === 0 && (
        <p>You don&apos;t have any saved recipes</p>
      )}
      {isStoreReady && savedRecipes.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {savedRecipes.map(({ id, name, image }) => (
            <RecipeThumbnail
              id={id}
              key={id}
              label={name}
              imageSrc={image}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default SavedRecipesPage
