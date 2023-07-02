import { DetailedList, PropertiesList, StepsList } from '@/components'
import type { RecipeGridProps } from '@/components/organisms/RecipeGrid/RecipeGrid.types'
import styles from './RecipeGrid.module.css'

const RecipeGrid = (props: RecipeGridProps) => {
  const { name, imageSrc, properties, steps, ingredients, ...restProps } = props
  return (
    <div
      className={styles.container}
      {...restProps}
    >
      <img
        className={styles.image}
        alt={name}
        src={imageSrc}
      />
      <PropertiesList items={properties} />
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Recipe</h2>
        <StepsList items={steps} />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Ingredients</h2>
        <DetailedList items={ingredients} />
      </section>
    </div>
  )
}

export default RecipeGrid
