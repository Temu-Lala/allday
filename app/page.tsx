import HeroSection from "@/components/hero-section"
import FeaturedSpecials from "@/components/featured-specials"
import AboutPreview from "@/components/about-preview"
import ServicesPreview from "@/components/services-preview"
import MenuPreview from "@/components/menu-preview"
import NoticeBoard from "@/components/notice-board"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div className="relative z-10">
        <NoticeBoard />
        <FeaturedSpecials />
        <AboutPreview />
        <MenuPreview />
        <ServicesPreview />
        <CallToAction />
      </div>
    </main>
  )
}

