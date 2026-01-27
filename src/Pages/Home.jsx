import React, { Component } from 'react';
import Navbar from '../components/Home/Navbar';
import Banner from '../components/Home/Banner';
import StatsCards from '../components/Home/StatsCards';
import PiscesTrial from '../components/Home/PiscesTrial';
import TrialResults from '../components/Home/TrialResults';
import ProductShowcase from '../components/Home/ProductShowcase';
import WhyThreOmega from '../components/Home/WhyThreOmega';
import HowThreOmegaProtects from '../components/Home/HowThreOmegaProtects';
import TestimonialsAndPricing from '../components/Home/TestimonialsAndPricing';
import FAQ from '../components/Home/FAQ';
import CallToActionAndFooter from '../components/Home/CallToActionAndFooter';


class HomePage extends Component {
  render() {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <Banner />
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