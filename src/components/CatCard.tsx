import { Link } from 'react-router-dom'

interface CatCardProps {
  id: string
  name: string
  age: string
  gender: string
  description: string
  imageUrl: string
}

export default function CatCard({ id, name, age, gender, description, imageUrl }: CatCardProps) {
  return (
    <Link
      to={`/cat/${id}`}
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = `https://placekitten.com/400/300?random=${id}`
            e.currentTarget.onerror = null
          }}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full">{gender}</span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{age}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 text-sm font-medium text-orange-500 group-hover:text-orange-600">
          查看详情 →
        </div>
      </div>
    </Link>
  )
}
