
import PageHeader from '../page-header'

const Page = async ({ params }: { params: Promise<{ handle: string }> }) => {

  return (
    <div className={`page-category-category`}>
      <PageHeader category={category} />

    </div>
  )
}

export default Page
