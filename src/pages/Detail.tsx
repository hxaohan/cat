import { useParams, Link } from 'react-router-dom'
import ImageCarousel from '../components/ImageCarousel'

const catData: Record<string, {
  name: string
  images: string[]
  age: string
  gender: string
  weight: string
  description: string
  personality: string[]
  health: string[]
  requirements: string[]
}> = {
  tangtang: {
    name: '糖糖',
    images: [
      '/cats/tangtang-1.jpg',
      '/cats/tangtang-2.jpg',
      '/cats/tangtang-3.jpg',
    ],
    age: '约 8 个月',
    gender: '女孩',
    weight: '约 4 公斤',
    description: `糖糖是一只非常温柔的小橘猫，大约 8 个月大。她在街头流浪时被救助，当时还是一只小奶猫，如今已经出落成一只健康漂亮的小姑娘。

糖糖性格黏人乖巧，最喜欢被人摸下巴和挠脑袋。她会用咕噜咕噜的声音表达满足，非常治愈。`,
    personality: [
      '性格温顺，从不伸爪子',
      '爱撒娇，喜欢和人互动',
      '会主动蹭人求抚摸',
      '对其他猫咪友好',
    ],
    health: [
      '已绝育',
      '已完成猫三联疫苗',
      '已完成体内外驱虫',
      '身体健康，无遗传病',
    ],
    requirements: [
      '有稳定的居住环境',
      '接受回访（定期发猫咪近照）',
      '家人同意领养',
      '不因搬家/结婚等原因弃养',
    ],
  },
}

export default function Detail() {
  const { id } = useParams()
  const cat = id ? catData[id] : null

  if (!cat) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 mb-4">未找到这只猫咪的信息</p>
        <Link to="/" className="text-orange-500 hover:underline">← 返回首页</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/" className="inline-flex items-center gap-1 text-gray-500 hover:text-orange-500 mb-8 transition-colors">
        ← 返回首页
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Images */}
        <div>
          <ImageCarousel images={cat.images} alt={cat.name} />
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-800">{cat.name}</h1>
            <span className="text-sm px-3 py-1 bg-orange-100 text-orange-600 rounded-full">{cat.gender}</span>
          </div>
          <div className="flex gap-4 text-sm text-gray-500 mb-6">
            <span>📅 {cat.age}</span>
            <span>⚖️ {cat.weight}</span>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-gray-800 mb-2">关于 {cat.name}</h2>
              <p className="text-sm text-gray-600 whitespace-pre-line">{cat.description}</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-2">性格特点</h2>
              <ul className="grid grid-cols-1 gap-1">
                {cat.personality.map(p => (
                  <li key={p} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-orange-400">✦</span> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-2">健康状况</h2>
              <ul className="grid grid-cols-1 gap-1">
                {cat.health.map(h => (
                  <li key={h} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-green-400">✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800 mb-2">领养要求</h2>
              <ul className="grid grid-cols-1 gap-1">
                {cat.requirements.map(r => (
                  <li key={r} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-blue-400">●</span> {r}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className="inline-block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              申请领养 {cat.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
