'use client'

// components/CompanyMenu.js
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Building2, Users, Award, History, MapPin, Phone } from 'lucide-react'

export default function CompanyMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      icon: Building2,
      title: 'เกี่ยวกับเรา',
      href: '/about',
      description: 'ประวัติและวิสัยทัศน์บริษัท'
    },
    {
      icon: History,
      title: 'ประวัติบริษัท',
      href: '/about/history',
      description: 'เรื่องราวการก่อตั้งและพัฒนา'
    },
    {
      icon: Users,
      title: 'ทีมงาน',
      href: '/about/team',
      description: 'บุคลากรและผู้เชี่ยวชาญ'
    },
    {
      icon: Award,
      title: 'รางวัลและใบรับรong',
      href: '/about/awards',
      description: 'การรับรองคุณภาพและรางวัล'
    },
    {
      icon: MapPin,
      title: 'สาขาและตัวแทน',
      href: '/about/branches',
      description: 'ที่ตั้งสาขาทั่วประเทศ'
    },
    {
      icon: Phone,
      title: 'ติดต่อเรา',
      href: '/contact',
      description: 'ช่องทางการติดต่อและสอบถาม'
    }
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
      >
        <span>เกี่ยวกับบริษัท</span>
        <ChevronDown 
          className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          size={16} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">เกี่ยวกับ ElectricShop</h3>
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <item.icon className="text-blue-600" size={20} />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}