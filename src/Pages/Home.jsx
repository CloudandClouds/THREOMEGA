import React, { Component } from 'react';
import Navbar from '../components/Home/Navbar';
import Banner from '../components/Home/Banner';
import ProductBuySection from '../components/Home/ProductBuySection';
import StatsCards from '../components/Home/StatsCards';
import PiscesTrial from '../components/Home/PiscesTrial';
import TrialResults from '../components/Home/TrialResults';
import ProductShowcase from '../components/Home/ProductShowcase';
import WhyThreOmega from '../components/Home/WhyThreOmega';
import HowThreOmegaProtects from '../components/Home/HowThreOmegaProtects';
import TestimonialsAndPricing from '../components/Home/TestimonialsAndPricing';
import FAQ from '../components/Home/FAQ';
import CallToActionAndFooter from '../components/Home/CallToActionAndFooter';
import Scoreboard from '../components/Home/Scoreboard';
import ProgramInfo from '../components/Home/ProgramInfo';
import SEO from '../components/SEO';



class HomePage extends Component {
  render() {
    return (
      <div className="min-h-screen bg-white">
        <SEO 
          title="Home"
          description="ThreOmegaCV is an advanced cardiac protection supplement with clinically proven benefits for maintenance hemodialysis patients."
          keywords="cardiac protection, hemodialysis omega-3, heart health supplement, PISCES trial"
        />
        <Navbar />
        <Banner />
        <ProductBuySection />
        <ProgramInfo />
        <Scoreboard />
        <StatsCards/>
        <PiscesTrial/>
        <TrialResults/>
        <ProductShowcase/>
        <WhyThreOmega/>
        <HowThreOmegaProtects />
        <TestimonialsAndPricing/>
        <FAQ/>
        <CallToActionAndFooter/>
      </div>
    );
  }
}

export default HomePage;
