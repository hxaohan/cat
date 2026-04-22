import CatCard from '../components/CatCard'

const cats = [
  {
    id: 'tangtang',
    name: '糖糖',
    age: '约 8 个月',
    gender: '女孩',
    description: '温柔可爱的小橘猫，已绝育、驱虫、疫苗齐全。性格黏人，喜欢蹭人，最爱被摸下巴。对其他猫咪友好，适合有小朋友的家庭。',
    imageUrl: '/cats/tangtang-1.jpg',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🐱 给流浪猫一个温暖的家
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            每一只猫咪都值得被爱。我们帮助流浪猫找到负责任的领养人，让它们从此告别流浪。
          </p>
          <a
            href="/guide"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            了解领养流程
          </a>
        </div>
      </section>

      {/* Cats */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">待领养猫咪</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map(cat => (
            <CatCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-orange-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">我们的使命</h2>
          <p className="text-gray-600 leading-relaxed">
            每一只流浪猫都有一个故事。我们希望通过领养平台，让更多人了解流浪猫的处境，
            用领养代替购买，给这些小生命一个安稳的归宿。目前主要帮助糖糖寻找合适的新家。
          </p>
        </div>
      </section>
    </div>
  )
}
