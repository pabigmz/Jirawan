// app/about/layout.tsx
import { ReactNode } from 'react'

export const metadata = {
  title: {
    template: '%s - ElectricShop',
    default: 'เกี่ยวกับเรา - ElectricShop'
  },
  description: 'ผู้นำด้านจำหน่ายอุปกรณ์ไฟฟ้าครบวงจร ด้วยประสบการณ์กว่า 15 ปี',
  keywords: 'อุปกรณ์ไฟฟ้า, บริษัท, ประวัติ, วิสัยทัศน์, ElectricShop'
}

interface AboutLayoutProps {
  children: ReactNode
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <main>
      {children}
    </main>
  )
}