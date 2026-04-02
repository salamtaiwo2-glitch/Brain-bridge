import { useState, useEffect } from 'react';
import { Loader2, Microscope, BookOpen, Dna, Cpu, CheckCircle2 } from 'lucide-react';

export default function Research() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const response = await fetch('/api/research');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching research data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 text-emerald-600 animate-spin mb-4" />
        <p className="text-gray-600 font-medium">Loading Research Center data...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600 font-medium">Error loading research data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Microscope className="h-16 w-16 mx-auto mb-6 text-emerald-300" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Advanced Research Center
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Pushing the boundaries of human knowledge through state-of-the-art facilities and cross-disciplinary collaboration.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Laboratories & Equipment */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Laboratories & Equipment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our research facilities are equipped with the latest technology to support groundbreaking discoveries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {data.laboratories.map((lab: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <img 
                  src={lab.image} 
                  alt={lab.name} 
                  className="h-64 w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{lab.name}</h3>
                  <p className="text-gray-600 mb-6">{lab.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Equipment</h4>
                    <ul className="space-y-2">
                      {lab.equipment.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Central Research Library */}
        <section>
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Central Research Library</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A hub of knowledge designed to inspire and facilitate deep academic inquiry.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src={data.library.exterior.image} 
                alt="Library Exterior" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Exterior Architecture</h3>
                <p className="text-gray-200">{data.library.exterior.description}</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src={data.library.interior.image} 
                alt="Library Interior" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Interior Facilities</h3>
                <p className="text-gray-200">{data.library.interior.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Research Sections */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Biotechnology */}
          <div className="bg-emerald-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <Dna className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <Dna className="h-12 w-12 text-emerald-300 mb-6" />
              <h2 className="text-3xl font-bold mb-4">{data.biotechnology.title}</h2>
              <p className="text-emerald-100 text-lg mb-8">
                {data.biotechnology.description}
              </p>
              <div className="bg-emerald-800/50 rounded-xl p-6 mb-8 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-emerald-200 uppercase tracking-wider mb-4">Current Projects</h3>
                <ul className="space-y-3">
                  {data.biotechnology.projects.map((project: string, idx: number) => (
                    <li key={idx} className="flex items-center">
                      <div className="h-2 w-2 bg-emerald-400 rounded-full mr-3"></div>
                      <span className="text-emerald-50">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href={`mailto:${data.biotechnology.contact}`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-emerald-100 hover:bg-white transition-colors"
              >
                Collaborate With Us
              </a>
            </div>
          </div>

          {/* Nanotechnology */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <img 
              src={data.nanotechnology.image} 
              alt="Nanotechnology" 
              className="h-48 w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-8 sm:p-10 flex-grow">
              <Cpu className="h-12 w-12 text-emerald-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.nanotechnology.title}</h2>
              <p className="text-gray-600 text-lg mb-8">
                {data.nanotechnology.description}
              </p>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Core Focus Areas</h3>
                <div className="flex flex-wrap gap-3">
                  {data.nanotechnology.focusAreas.map((area: string, idx: number) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
