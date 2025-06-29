// app/about/page.js
import Image from 'next/image'
import { Users, Award, MapPin, Phone, Mail, Clock, Shield, Truck, ThumbsUp, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              เกี่ยวกับ ElectricShop
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              ผู้นำด้านจำหน่ายอุปกรณ์ไฟฟ้าครบวงจร 
              <br />
              ด้วยประสบการณ์กว่า 15 ปี
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                พันธกิจและวิสัยทัศน์
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">วิสัยทัศน์</h3>
                  <p className="text-gray-600 leading-relaxed">
                    เป็นผู้นำในการจำหน่ายอุปกรณ์ไฟฟ้าและระบบพลังงานที่ทันสมัย 
                    เพื่อตอบสนองความต้องการของลูกค้าทุกระดับ ตั้งแต่ครัวเรือนไปจนถึงอุตสาหกรรม
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">พันธกิจ</h3>
                  <p className="text-gray-600 leading-relaxed">
                    นำเสนอผลิตภัณฑ์คุณภาพสูงจากแบรนด์ชั้นนำ พร้อมบริการที่เป็นเลิศ 
                    และความรู้เชิงเทคนิคที่ครบถ้วน เพื่อให้ลูกค้าได้รับโซลูชันที่ดีที่สุด
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about-company.jpg"
                alt="ElectricShop Office"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ผลงานที่ภาคภูมิใจ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'ปีของประสบการณ์', icon: Clock },
              { number: '10,000+', label: 'ลูกค้าที่ไว้วางใจ', icon: Users },
              { number: '5,000+', label: 'รายการสินค้า', icon: Award },
              { number: '50+', label: 'จังหวัดที่ให้บริการ', icon: MapPin }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ค่านิยมองค์กร
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'คุณภาพและความปลอดภัย',
                description: 'เราให้ความสำคัญกับคุณภาพสินค้าและมาตรฐานความปลอดภัยเป็นอันดับแรก'
              },
              {
                icon: ThumbsUp,
                title: 'บริการที่เป็นเลิศ',
                description: 'มุ่งมั่นให้บริการที่เกินความคาดหวัง พร้อมคำแนะนำจากผู้เชี่ยวชาญ'
              },
              {
                icon: Target,
                title: 'นวัตกรรมและการพัฒนา',
                description: 'ติดตามเทคโนโลยีใหม่ๆ เพื่อนำเสนอโซลูชันที่ทันสมัยและมีประสิทธิภาพ'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            บริการของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'จำหน่ายอุปกรณ์ไฟฟ้า',
                description: 'สินค้าครบครันจากแบรนด์ชั้นนำทั่วโลก',
                features: ['หลอดไฟและระบบแสงสว่าง', 'อุปกรณ์ควบคุมไฟฟ้า', 'สายไฟและอุปกรณ์เชื่อมต่อ']
              },
              {
                title: 'ให้คำปรึกษาเชิงเทคนิค',
                description: 'ทีมวิศวกรประสบการณ์สูงพร้อมให้คำแนะนำ',
                features: ['วิเคราะห์ความต้องการ', 'ออกแบบระบบไฟฟ้า', 'แก้ไขปัญหาเฉพาะ']
              },
              {
                title: 'บริการหลังการขาย',
                description: 'ดูแลลูกค้าแม้หลังจากการซื้อขาย',
                features: ['การรับประกันสินค้า', 'บริการซ่อมบำรุง', 'อะไหล่และการสนับสนุน']
              }
            ].map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            พร้อมให้บริการคุณ
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            หากคุณมีคำถามหรือต้องการคำปรึกษาเกี่ยวกับอุปกรณ์ไฟฟ้า 
            ทีมผู้เชี่ยวชาญของเรายินดีให้ความช่วยเหลือ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              <Phone className="inline mr-2" size={20} />
              โทรหาเรา
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              <Mail className="inline mr-2" size={20} />
              ส่งอีเมล
            </button>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            เรื่องราวการเติบโต
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '2009',
                  title: 'ก่อตั้งบริษัท',
                  description: 'เริ่มต้นธุรกิจด้วยร้านค้าเล็กๆ ในย่านลาดพร้าว'
                },
                {
                  year: '2012',
                  title: 'ขยายสาขา',
                  description: 'เปิดสาขาที่ 2 และเริ่มให้บริการออนไลน์'
                },
                {
                  year: '2016',
                  title: 'พันธมิตรแบรนด์ชั้นนำ',
                  description: 'เป็นตัวแทนจำหน่ายของแบรนด์ไฟฟ้าชั้นนำระดับโลก'
                },
                {
                  year: '2020',
                  title: 'ระบบดิจิทัล',
                  description: 'พัฒนาแพลตฟอร์มออนไลน์และระบบจัดการที่ทันสมัย'
                },
                {
                  year: '2024',
                  title: 'ผู้นำในอุตสาหกรรม',
                  description: 'ขยายการให้บริการครอบคลุมทั่วประเทศ'
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-6 relative">
                    {index < 4 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-blue-200"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}