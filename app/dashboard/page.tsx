// app/page.js
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, User, Star, Zap, Wrench, Home, Factory } from 'lucide-react'
import CompanyMenu from '../components/about-company/page'

export default function DashbaordPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    {/* Top bar */}
                    <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
                        <div>
                            <span>โทร: 02-123-4567</span>
                            <span className="ml-4">จัดส่งฟรี เมื่อซื้อครบ 1,000 บาท</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/login" className="hover:text-blue-600">เข้าสู่ระบบ</Link>
                            <Link href="/register" className="hover:text-blue-600">สมัครสมาชิก</Link>
                        </div>
                    </div>

                    {/* Main header */}
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center">
                            <Zap className="text-blue-600 mr-2" size={32} />
                            <h1 className="text-2xl font-bold text-gray-800">NSP PowerShop</h1>
                        </div>

                        {/* Search */}
                        <div className="flex-1 max-w-xl mx-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="ค้นหาอุปกรณ์ไฟฟ้า..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-4">
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <User size={24} />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                                <ShoppingCart size={24} />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    3
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="border-t py-3">
                        <div className="flex items-center space-x-8">
                            <button className="flex items-center text-gray-700 hover:text-blue-600">
                                <Menu size={20} className="mr-1" />
                                หมวดหมู่สินค้า
                            </button>
                            <Link href="/categories/home" className="text-gray-700 hover:text-blue-600">อุปกรณ์ภายในบ้าน</Link>
                            <Link href="/categories/tools" className="text-gray-700 hover:text-blue-600">เครื่องมือช่าง</Link>
                            <Link href="/categories/industrial" className="text-gray-700 hover:text-blue-600">อุปกรณ์อุตสาหกรรม</Link>
                            <Link href="/categories/lighting" className="text-gray-700 hover:text-blue-600">ระบบแสงสว่าง</Link>
                            <CompanyMenu />
                            <Link href="/promotions" className="text-red-600 hover:text-red-700">โปรโมชั่น</Link>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">
                                อุปกรณ์ไฟฟ้าคุณภาพสูง
                            </h2>
                            <p className="text-xl mb-6">
                                ครบครันทุกความต้องการ จากบ้านจนถึงโรงงาน
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                                    เลือกซื้อเลย
                                </button>
                                <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                                    ดูแคตตาล็อก
                                </button>
                            </div>
                        </div>
                        <div className="text-center">
                            {/* <Image
                src="/hero-electrical.jpg"
                alt="Electrical Equipment"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              /> */}
                            <div className="mt-4 text-sm text-gray-200">
                                <h1 className='text-5xl'>SNP POWER Co.,Ltd.</h1>
                                <h3 className='text-3xl mb-5'>บริษัท เอสเอ็นพี เพาเวอร์ จำกัด (สำนักงานใหญ่)</h3>
                                <p>รับผลิตตู้ MDB, DB, หม้อแปลงไฟฟ้า, งานออโตเมชั่น, โปรแกรม PLC, งานไฟฟ้าแรงต่ำ, ติดตั้งและซ่อมตู้ควบคุมไฟฟ้าทุกชนิด ติดตั้งกล้องวงจรปิด CCTV, FUJIKO, จานดาวเทียมและรับสั่งทำป้ายติดตู้ไฟและเมนเพจของเครื่องจักร โดยใช้อุปกรณ์ที่มีคุณภาพและได้รับมาตรฐาน จัดทำและติดตั้งโดยช่างผู้ชำนาญ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center mb-12">หมวดหมู่สินค้า</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Home, title: "อุปกรณ์ภายในบ้าน", count: "250+ รายการ", color: "bg-green-100 text-green-600" },
                            { icon: Wrench, title: "เครื่องมือช่าง", count: "180+ รายการ", color: "bg-blue-100 text-blue-600" },
                            { icon: Factory, title: "อุตสาหกรรม", count: "320+ รายการ", color: "bg-purple-100 text-purple-600" },
                            { icon: Zap, title: "ระบบไฟฟ้า", count: "150+ รายการ", color: "bg-yellow-100 text-yellow-600" }
                        ].map((category, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
                                <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                                    <category.icon size={32} />
                                </div>
                                <h4 className="text-xl font-semibold mb-2">{category.title}</h4>
                                <p className="text-gray-600">{category.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <h3 className="text-3xl font-bold">สินค้าแนะนำ</h3>
                        <Link href="/products" className="text-blue-600 hover:text-blue-700 font-semibold">
                            ดูทั้งหมด →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                id: 1,
                                name: "หลอดไฟ LED 12W",
                                price: 150,
                                originalPrice: 200,
                                image: "/products/led-bulb.jpg",
                                rating: 4.5,
                                reviews: 120
                            },
                            {
                                id: 2,
                                name: "ปลั๊กไฟ 3 ช่อง",
                                price: 89,
                                originalPrice: 120,
                                image: "/products/power-strip.jpg",
                                rating: 4.8,
                                reviews: 85
                            },
                            {
                                id: 3,
                                name: "สายไฟ THW 2.5 ตร.มม.",
                                price: 45,
                                originalPrice: null,
                                image: "/products/wire.jpg",
                                rating: 4.6,
                                reviews: 95
                            },
                            {
                                id: 4,
                                name: "เบรกเกอร์ 32A",
                                price: 280,
                                originalPrice: 320,
                                image: "/products/breaker.jpg",
                                rating: 4.7,
                                reviews: 67
                            }
                        ].map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                                <div className="relative">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                    {product.originalPrice && (
                                        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                                        </span>
                                    )}
                                </div>

                                <div className="p-4">
                                    <h4 className="font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                                        {product.name}
                                    </h4>

                                    <div className="flex items-center mb-2">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-lg font-bold text-red-600">฿{product.price}</span>
                                            {product.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through ml-2">฿{product.originalPrice}</span>
                                            )}
                                        </div>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                            เพิ่มลงตะกร้า
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promotions */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-8">
                            <h4 className="text-2xl font-bold mb-4">ลดสูงสุด 50%</h4>
                            <p className="mb-4">สำหรับอุปกรณ์ไฟฟ้าภายในบ้าน</p>
                            <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                เลือกซื้อเลย
                            </button>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-8">
                            <h4 className="text-2xl font-bold mb-4">ซื้อ 2 แถม 1</h4>
                            <p className="mb-4">หลอดไฟ LED ทุกรุ่น</p>
                            <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                ดูรายละเอียด
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <Zap className="text-blue-400 mr-2" size={24} />
                                <h5 className="text-xl font-bold">ElectricShop</h5>
                            </div>
                            <p className="text-gray-400">
                                ผู้จำหน่ายอุปกรณ์ไฟฟ้าคุณภาพสูง พร้อมบริการหลังการขายที่ดีที่สุด
                            </p>
                        </div>

                        <div>
                            <h6 className="font-semibold mb-4">หมวดหมู่สินค้า</h6>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="#" className="hover:text-white">อุปกรณ์ภายในบ้าน</Link></li>
                                <li><Link href="#" className="hover:text-white">เครื่องมือช่าง</Link></li>
                                <li><Link href="#" className="hover:text-white">อุปกรณ์อุตสาหกรรม</Link></li>
                                <li><Link href="#" className="hover:text-white">ระบบแสงสว่าง</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="font-semibold mb-4">ข้อมูลบริษัท</h6>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="#" className="hover:text-white">เกี่ยวกับเรา</Link></li>
                                <li><Link href="#" className="hover:text-white">ติดต่อเรา</Link></li>
                                <li><Link href="#" className="hover:text-white">นโยบายการจัดส่ง</Link></li>
                                <li><Link href="#" className="hover:text-white">การคืนสินค้า</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="font-semibold mb-4">ติดต่อเรา</h6>
                            <div className="space-y-2 text-gray-400">
                                <p>โทร: 02-123-4567</p>
                                <p>อีเมล: info@electricshop.com</p>
                                <p>Line: @electricshop</p>
                                <p>เปิด: จันทร์-เสาร์ 8:00-18:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 ElectricShop. สงวนลิขสิทธิ์ทุกรูปแบบ</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}