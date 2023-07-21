import React from 'react'
import Hero from '../Herosection/Hero'
import YtSlider from '../YtSlider/Slider';
import ServiceCards from '../LandingPage/ServiceCards';
import SuperchargeYT from '../ConsultationForm/CallToAction';
import Footer from '../common/Footer';
import ClientsResult from '../CLientsResult/ClientsResult';
import Provider from '../Herosection/Provider';

function Layout() {
  return (
    <>
      <Hero />
      <YtSlider />
      <ServiceCards />
      <ClientsResult />
      <SuperchargeYT />
      <Footer />
    </>
  )
}

export default Layout
