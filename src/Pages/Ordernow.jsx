import React, { useState } from 'react';
import Navbar from '../components/Home/Navbar';
import CallToActionAndFooter from '../components/Home/CallToActionAndFooter';
import ProductBuySection from '../components/Home/ProductBuySection';

const OrdernowPage = () => {
    
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

       <ProductBuySection/>
    
      

        <CallToActionAndFooter />

        <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in { animation: fade-in 1s ease-out forwards; }
                .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
            `}</style>
      </div>
    )
};

export default OrdernowPage;
