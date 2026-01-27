import React, { Component } from 'react';
// import DoctorHero from './DoctorHero';
// import ClinicalSummary from './ClinicalSummary';
// import PrescribingGuidelines from './PrescribingGuidelines';
// import RequestSamplesForm from './RequestSamplesForm';
// import PatientResources from './PatientResources';
// import OmegaStudyHighlight from './OmegaStudyHighlight';

import Navbar from '../components/Home/Navbar';

class ForDoctorsPage extends Component {
  render() {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <DoctorHero />
        <ClinicalSummary />
        <PrescribingGuidelines />
        <RequestSamplesForm />
        <PatientResources />
        <OmegaStudyHighlight />
      </div>
    );
  }
}

export default ForDoctorsPage;