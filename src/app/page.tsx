import { Heart, Leaf, Shield } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="PureEase Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold text-primary">PureEase</span>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#features"
                className="text-gray-600 transition-colors hover:text-primary"
              >
                คุณสมบัติ
              </a>
              <a
                href="#products"
                className="text-gray-600 transition-colors hover:text-primary"
              >
                สินค้า
              </a>
              <a
                href="#about"
                className="text-gray-600 transition-colors hover:text-primary"
              >
                เกี่ยวกับเรา
              </a>
              <a
                href="#contact"
                className="text-gray-600 transition-colors hover:text-primary"
              >
                ติดต่อ
              </a>
            </div>
            <button className="rounded-lg bg-primary px-6 py-2 text-white transition-colors hover:bg-accent">
              เริ่มต้นใช้งาน
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pb-12 pt-24 md:pb-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-4xl font-bold text-gray-900 md:text-6xl">
                เส้นทางสู่สุขภาพที่ดี
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-heading text-4xl font-bold text-primary md:text-6xl">
                เริ่มง่ายๆ กับเรา
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-600">
                ค้นพบผลิตภัณฑ์จากธรรมชาติที่ช่วยให้คุณมีสุขภาพที่ดีขึ้นในทุกๆ
                วัน
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex space-x-4">
                <button className="rounded-lg bg-primary px-8 py-3 text-white transition-colors hover:bg-accent">
                  เลือกซื้อสินค้า
                </button>
                <button className="rounded-lg border-2 border-primary px-8 py-3 text-primary transition-colors hover:bg-gray-50">
                  ดูรายละเอียด
                </button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-12 md:mt-0 md:w-1/2">
              <Image
                src="/hero-image.png"
                alt="Hero"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            คุณสมบัติเด่น
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Leaf className="h-6 w-6 text-primary" />}
              title="วัตถุดิบธรรมชาติ 100%"
              description="ผลิตภัณฑ์ของเราใช้วัตถุดิบจากธรรมชาติที่ผ่านการคัดสรรมาอย่างดี"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-secondary" />}
              title="มาตรฐานระดับสากล"
              description="ได้รับการรับรองมาตรฐานการผลิตระดับสากล เพื่อความปลอดภัยสูงสุด"
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6 text-accent" />}
              title="ดูแลสุขภาพแบบองค์รวม"
              description="ผลิตภัณฑ์ของเราช่วยดูแลสุขภาพของคุณในทุกมิติ"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="PureEase Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <span className="text-2xl font-bold">PureEase</span>
              </div>
              <p className="text-gray-400">
                23/35 หมู่ที่ 4 ต.บางพลีใหญ่
                <br />
                อ.บางพลี จ.สมุทรปราการ 10540
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold">ติดต่อ</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">โทร: 02-XXX-XXXX</li>
                <li className="text-gray-400">อีเมล: contact@pureease.site</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold">ติดตามเรา</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Line
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PureEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Components
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
