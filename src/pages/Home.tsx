import { Link } from 'react-router-dom';
import { BookOpen, Users, Globe, Award, ArrowRight, ChevronRight, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="University Campus"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-emerald-400/30 text-emerald-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
              Admissions Open for Fall 2026
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Bridge the Gap to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                Your Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-10 leading-relaxed max-w-2xl">
              Brain Bridge University empowers the next generation of leaders, innovators, and thinkers through world-class education and groundbreaking research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/register"
                className="inline-flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/30"
              >
                Apply Now <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                <PlayCircle className="h-5 w-5" /> Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-100 relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">15k+</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">120+</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">95%</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Employment Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Global Partners</div>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Why Brain Bridge</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">An Environment Built for Excellence</h3>
            <p className="text-lg text-gray-600">
              Our campus provides state-of-the-art facilities, world-renowned faculty, and a vibrant community dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <BookOpen className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Innovative Curriculum</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Programs designed in collaboration with industry leaders to ensure you learn the skills that matter today and tomorrow.
              </p>
              <a href="#" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800">
                Explore Programs <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <Users className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Expert Faculty</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Learn directly from award-winning professors, researchers, and professionals who are leaders in their respective fields.
              </p>
              <a href="#" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800">
                Meet Our Faculty <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <Globe className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Community</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Join a diverse student body from over 80 countries, fostering a rich cultural exchange and global networking opportunities.
              </p>
              <a href="#" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800">
                Campus Life <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Discover Our Beautiful Campus</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Spread across 500 acres of lush greenery, Brain Bridge University offers a perfect blend of historic architecture and modern facilities. From high-tech laboratories to expansive libraries and vibrant student centers, our campus is designed to inspire.
              </p>
              
              <ul className="space-y-5 mb-10">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-gray-900">Advanced Research Labs</h5>
                    <p className="text-gray-600 mt-1">Equipped with the latest technology for groundbreaking discoveries.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-gray-900">Central Library</h5>
                    <p className="text-gray-600 mt-1">Over 2 million volumes and extensive digital resources available 24/7.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold text-gray-900">Student Union</h5>
                    <p className="text-gray-600 mt-1">The hub of campus life with dining, recreation, and club spaces.</p>
                  </div>
                </li>
              </ul>

              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Campus Building"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students walking"
                className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-emerald-100 mb-10">
            Join thousands of students who are building their future at Brain Bridge University. Applications for the upcoming semester are now open.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex justify-center items-center bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Start Application
            </Link>
            <Link
              to="/profile"
              className="inline-flex justify-center items-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Student Portal Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
