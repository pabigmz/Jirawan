import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-10 space-y-10"
      style={{ backgroundImage: 'url("https://snppower.igetweb.com/874217e778d22308721647f3199f335b.jpg")' }}
    >
      {/* Overlay Background */}
      <div className="absolute inset-0 bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-10">
        {/* Welcome Section */}
        <div>
          <h1 className="text-4xl font-bold">Welcome to Web SNP</h1>
          <p className="mt-2 text-lg">This is a simple Next.js application.</p>
        </div>

        {/* Brand Section */}
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl text-black space-y-4">
          <h2 className="text-5xl font-extrabold tracking-wide">SNP POWER Co.,Ltd.</h2>
          <p className="text-xl font-semibold text-gray-700">Meet all your electrical needs</p>
        </div>

        {/* Website Link Section */}
        <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <Link href="/dashboard">
            <button className="text-2xl font-bold text-amber-600 hover:text-amber-700 transition cursor-pointer">
              เข้าสู่เว็บไซต์ SNP POWER<br />
              <span className="text-sm font-medium text-gray-500">ENTER SITE SNP POWER</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

