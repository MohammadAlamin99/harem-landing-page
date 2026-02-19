
import CtaSection from '@/components/section/CtaSection'
import FaqSection from '@/components/section/FaqSection'
import FeaturesSection from '@/components/section/FetureSection'
import FooterSection from '@/components/section/FooterSection'
import HeaderSection from '@/components/section/HeaderSection'
import HeroSection from '@/components/section/HeroSection'
import ManageSection from '@/components/section/ManageSection'
import PlanSection from '@/components/section/PlanSection'
import PromotionSection from '@/components/section/PromotionSection'
import StateSection from '@/components/section/StateSection'
import TestimonialSection from '@/components/section/TestimonialSection'

export default function page() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <StateSection />
      <PromotionSection />
      <PlanSection />
      <FeaturesSection />
      <ManageSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </>
  )
}
