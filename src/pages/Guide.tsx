export default function Guide() {
  const steps = [
    {
      num: '01',
      title: '阅读领养指南',
      desc: '仔细阅读我们的领养要求，确保您符合领养条件。',
    },
    {
      num: '02',
      title: '联系沟通',
      desc: '通过联系方式与我们取得联系，简单介绍您的家庭环境和养猫经验。',
    },
    {
      num: '03',
      title: '互相了解',
      desc: '我们会与您深入沟通，确认您是合适的领养人。',
    },
    {
      num: '04',
      title: '签署协议',
      desc: '确认领养后，签署领养协议，留下联系方式。',
    },
    {
      num: '05',
      title: '带猫回家',
      desc: '接猫咪回家，给它一个温暖的新环境！',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">领养指南</h1>
      <p className="text-center text-gray-500 mb-12">用爱为流浪猫找到一个温暖的家</p>

      {/* Steps */}
      <div className="space-y-6 mb-16">
        {steps.map(step => (
          <div key={step.num} className="flex gap-6 items-start bg-white rounded-xl p-6 shadow-sm">
            <span className="text-3xl font-bold text-orange-200">{step.num}</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">常见问题</h2>
      <div className="space-y-4">
        {[
          {
            q: '领养需要费用吗？',
            a: '领养免费。但我们希望您能为猫咪准备基本的生活用品（猫粮、猫砂、猫窝等），约 300-500 元。',
          },
          {
            q: '我可以先来看看猫咪吗？',
            a: '当然可以！欢迎联系我们预约探访，与糖糖当面互动，感受一下彼此是否合拍。',
          },
          {
            q: '领养后需要注意什么？',
            a: '请封窗封阳台，避免意外；喂食优质猫粮；定期体检和疫苗；科学喂养不离不弃。',
          },
          {
            q: '可以退养吗？',
            a: '如果确实遇到不可解决的问题，我们可以协助您为猫咪重新寻找领养人，但请不要随意遗弃。',
          },
        ].map(faq => (
          <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
            <p className="text-sm text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
