import type { PageHeaderProps } from '@/components/molecules/PageHeader/PageHeader.types'
import styles from './PageHeader.module.css'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const PageHeader = (props: PageHeaderProps) => {
  const {
    isBackButtonVisible = false,
    children,
    renderButtons,
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
        {renderButtons && (
          <div className={styles.buttonsContainer}>{renderButtons()}</div>
        )}
      </div>
    </div>
  )
}

export default PageHeader
