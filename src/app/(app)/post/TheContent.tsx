import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const TheContent = ({ summary, reviews }: {
    summary: string
    reviews: string[] }) => {

  return (
    <>
        <p>
            {summary}
        </p>

      <ul className="space-y-4 text-neutral-700 dark:text-neutral-300">
        {reviews.map((review, index) => (
          <li key={index} className="flex items-start">
            <span className="flex-shrink-0 me-3 mt-1">
              <CheckCircleIcon className="h-6 w-6 text-sky-300" />
            </span>
            <span>{review}</span>
          </li>
        ))}
      </ul>


    </>
  )
}

export default TheContent
