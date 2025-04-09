
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white to-bone-100 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-bone-900">
              Visualizaciones óseas <span className="text-teal-600">intuitivas</span> para adultos mayores
            </h1>
            <p className="text-lg md:text-xl text-bone-700 max-w-lg">
              Diseñamos representaciones visuales más intuitivas y fáciles de interpretar, permitiendo que los adultos mayores comprendan mejor su estado óseo sin necesidad de conocimientos técnicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg">
                Descubrir más
              </Button>
              <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg">
                Contactar
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-bone-200 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6">
                    <div className="w-full h-full bg-teal-50 rounded-xl flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                        <div className="absolute inset-0 bg-white/80 rounded-lg" />
                        <div className="absolute left-1/4 top-1/2 w-1/2 h-1/3 bg-teal-200 rounded-full transform -translate-y-1/2 animate-pulse-gentle" />
                        <div className="absolute left-1/3 top-1/4 w-1/3 h-1/2 border-2 border-teal-400 rounded-lg" />
                        <div className="absolute right-1/4 bottom-1/4 w-1/4 h-1/4 bg-bone-300 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-1 left-0 right-0">
        <div className="section-divider"></div>
      </div>
    </div>
  );
};

export default Hero;
