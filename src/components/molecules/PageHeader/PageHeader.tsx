import type { PageHeaderProps } from '@/components/molecules/PageHeader/PageHeader.types'
import styles from './PageHeader.module.css'
import { Button } from '@/components'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const PageHeader = (props: PageHeaderProps) => {
  const {
    isBackButtonVisible = false,
    isSaveRecipeButtonVisible = false,
    isShoppingListButtonVisible = false,
    children,
    ...restProps
  } = props
  const router = useRouter()
  return (
    <div
      className={styles.container}
      {...restProps}
    >
      {isBackButtonVisible && (
        <button onClick={() => router.back()}>
          <ArrowLeftIcon className={styles.arrowIcon} />
        </button>
      )}
      <div className={styles.wrapper}>
        <h1 className={styles.name}>{children}</h1>
        {(isSaveRecipeButtonVisible || isShoppingListButtonVisible) && (
          <div className={styles.buttonsContainer}>
            {isSaveRecipeButtonVisible && <Button>Save recipe</Button>}
            {isShoppingListButtonVisible && (
              <Button>Add to shopping list</Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PageHeader
