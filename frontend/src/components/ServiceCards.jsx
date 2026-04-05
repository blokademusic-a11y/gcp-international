import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCards = () => {
  const services = [
    {
      title: 'OUR SERVICES',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698c6230c69e9d4f52fff61c/db7ebecbc_image.png',
      link: '/services'
    },
    {
      title: 'ADVISORY BOARDS',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
      link: '/advisory-boards'
    },
    {
      title: 'NEGOTIATION SUPPORT',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      link: '/negotiation-support'
    },
    {
      title: 'CONFIDENTIALITY',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      link: '/confidentiality'
    },
    {
      title: 'ESG STATEMENT',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      link: '/esg-statement'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-[2px] bg-white mb-4 group-hover:w-24 transition-all duration-500"></div>
                  <h3 className="text-white text-xl font-light tracking-wider mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-white/90 text-sm group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;