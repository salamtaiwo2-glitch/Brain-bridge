import { Award, Target, Eye, Users, BookOpen, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="University Library"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Brain Bridge</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Founded in 1950, Brain Bridge University has been at the forefront of academic excellence, research innovation, and community engagement for over seven decades.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-emerald-50 p-10 rounded-2xl border border-emerald-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Target className="w-32 h-32 text-blue-900" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide a transformative educational experience that equips students with the knowledge, skills, and ethical foundation necessary to become leaders and innovators in a rapidly changing global society. We are committed to advancing knowledge through rigorous research and creative endeavors.
                </p>
              </div>
            </div>

            <div className="bg-blue-900 p-10 rounded-2xl shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Eye className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-emerald-100 leading-relaxed">
                  To be recognized globally as a premier institution of higher learning, distinguished by our commitment to academic excellence, groundbreaking research, and the profound positive impact our graduates have on their communities and the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide our decisions, shape our culture, and define what it means to be part of the Brain Bridge community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in teaching, learning, research, and administrative operations.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600">Fostering a diverse community where all individuals are valued, respected, and supported.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Perspective</h3>
              <p className="text-gray-600">Embracing diverse viewpoints and preparing students to thrive in an interconnected world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our History</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-300 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-xl">Foundation</h3>
                  <span className="text-emerald-600 font-semibold">1950</span>
                </div>
                <p className="text-gray-600">Brain Bridge was established with a small cohort of 200 students and 15 faculty members in a single building.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Award className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-xl">University Status</h3>
                  <span className="text-emerald-600 font-semibold">1975</span>
                </div>
                <p className="text-gray-600">Granted full university status, expanding programs to include graduate studies and specialized research centers.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Globe className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-xl">Global Expansion</h3>
                  <span className="text-emerald-600 font-semibold">2005</span>
                </div>
                <p className="text-gray-600">Opened our first international campus and established partnerships with over 50 universities worldwide.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Target className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-xl">Innovation Hub</h3>
                  <span className="text-emerald-600 font-semibold">2020</span>
                </div>
                <p className="text-gray-600">Launched the state-of-the-art Innovation Hub, a 100,000 sq ft facility dedicated to interdisciplinary research.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
