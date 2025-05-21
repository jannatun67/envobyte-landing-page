


import ClientsReview from '@/component/ClientsReview/ClientsReview';
import ContactSection from '@/component/ContactSection/ContactSection';
import FAQSection from '@/component/FAQSection/FAQSection';
import GetAns from '@/component/GetAns/GetAns';
import HeroSection from '@/component/HeroSection/HeroSection';
import Process from '@/component/Process/Process';
import Services from '@/component/Services/Services';
import Team from '@/component/Team/Team';


const HomePage = () => {
  return (   
      <main >
        <HeroSection></HeroSection>
        <Services></Services>
        <GetAns></GetAns>
        <Process></Process>
        <ClientsReview></ClientsReview>
        <Team></Team>
        <FAQSection></FAQSection>
        <ContactSection></ContactSection>
        
       
        
        
      </main>   
  );
};

export default HomePage;