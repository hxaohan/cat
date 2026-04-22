import { useState, useEffect } from 'react'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length)
  const next = () => setCurrent(c => (c + 1) % images.length)

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [])

  if (images.length === 0) {
    return (
      <div className="aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center">
        <span className="text-gray-400">暂无图片</span>
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
      <img
        src={images[current]}
        alt={`${alt} - ${current + 1}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = `https://placekitten.com/800/600?random=${current}`
          e.currentTarget.onerror = null
        }}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-all"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-all"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
