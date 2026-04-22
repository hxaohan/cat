export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">联系我们</h1>
      <p className="text-center text-gray-500 mb-12">如果您的条件合适，欢迎联系我们</p>

      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📱</span>
            <div>
              <h3 className="font-semibold text-gray-800">微信</h3>
              <p className="text-gray-600">请在下方留言获取微信号</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl">📧</span>
            <div>
              <h3 className="font-semibold text-gray-800">邮箱</h3>
              <p className="text-gray-600">cat-adoption@example.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <h3 className="font-semibold text-gray-800">所在地</h3>
              <p className="text-gray-600">北京市（可协商送猫上门）</p>
            </div>
          </div>

          <div className="border-t pt-6 mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">领养申请</h3>
            <p className="text-sm text-gray-600 mb-4">
              请简单介绍您的家庭环境、居住情况、是否有其他宠物、以及为什么想领养糖糖。
              您可以通过以下方式联系我们，我们会在 24 小时内回复。
            </p>
            <div className="bg-orange-50 rounded-xl p-4 text-sm text-gray-600">
              <p className="mb-2">📌 <strong>申请格式：</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>姓名 / 昵称</li>
                <li>所在城市</li>
                <li>居住环境（租房/自有住房）</li>
                <li>是否有养猫经验</li>
                <li>其他宠物情况</li>
                <li>想对糖糖说的话</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500">
            <p>💡 <strong>温馨提示：</strong>由于精力有限，我们可能无法回复所有咨询，请您理解。如未及时回复，请耐心等待。期待为糖糖找到一个温暖的家！</p>
          </div>
        </div>
      </div>
    </div>
  )
}
