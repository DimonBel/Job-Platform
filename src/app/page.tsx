
import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '@/app/components/App_Bar';
import HeroSection from '@/app/components/Hero_Section';
import FeaturedJobs from '@/app/components/section_job';
import CompanyLogos from '@/app/components/logos';
import FooterComponent from '@/app/components/Footer';

const MainLayout = () => {
  return (
    <Layout>
      <HeaderComponent />
      <HeroSection />
      <FeaturedJobs />
      <CompanyLogos />
      <FooterComponent />
    </Layout>
  );
};

export default MainLayout;
