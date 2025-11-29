
const FOUNDERS = [
  {
    id: '1',
    name: `문성욱`,
    job: 'ICT운영부',
    avatar: 'images/about/admin/문성욱.png'
  },
  {
    id: '2',
    name: `김경훈`,
    job: '정보보호부',
    avatar: 'images/about/admin/김경훈.png',
  },
  {
    id: '3',
    name: `최재경`,
    job: '주택보증부',
    avatar: 'images/about/admin/최재경.png',
  },
  {
    id: '4',
    name: `강창현`,
    job: '주택연금부',
    avatar: 'images/about/admin/강창현.png',
  },
  {
    id: '5',
    name: `박재원`,
    job: '채권관리부',
    avatar: 'images/about/admin/박재원.png',
  }
]

export default function SectionAdministarator() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl lg:text-5xl">청년이사 17기</h2>
        <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
          웹 관리자 (ICT운영부 문성욱)
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
      >
        {FOUNDERS.map((person) => (
          <li key={person.id}>
            <img alt={person.name} src={person.avatar} className="mx-auto size-24 rounded-full object-cover" />
            <h3 className="mt-6 text-base/7 font-semibold tracking-tight">{person.name}</h3>
            <p className="text-sm/6 text-neutral-600 dark:text-neutral-400">{person.job}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}
