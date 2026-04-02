import { useState, FormEvent } from 'react';
import { User, Mail, Phone, MapPin, Book, Calendar, CheckCircle2, Loader2 } from 'lucide-react';

export default function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [studentId, setStudentId] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        setStudentId(result.studentId);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl text-center">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 mb-6">
            <CheckCircle2 className="h-12 w-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-lg text-gray-600 mb-4">
            Thank you for applying to Brain Bridge University. We have received your application.
          </p>
          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 mb-8">
            <p className="text-sm text-emerald-800 font-medium">Your Application ID:</p>
            <p className="text-2xl font-bold text-blue-900 mt-1">{studentId}</p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Admissions Portal</h1>
          <p className="text-lg text-gray-600">
            Begin your journey at Brain Bridge University. Fill out the form below to apply for the upcoming academic year.
          </p>
        </div>

        <div className="bg-white py-10 px-8 shadow-xl rounded-2xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">Personal Information</h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" name="firstName" id="firstName" required className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border" placeholder="John" />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" name="lastName" id="lastName" required className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="email" name="email" id="email" required className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border" placeholder="john.doe@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="tel" name="phone" id="phone" required className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="date" name="dob" id="dob" required className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border" />
                  </div>
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                  <select id="gender" name="gender" className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md border">
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">Address</h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" name="address" id="address" required className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border" placeholder="123 Main St" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="city" required className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-3 border" placeholder="New York" />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                  <input type="text" name="country" id="country" required className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-3 border" placeholder="United States" />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">Academic Information</h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700">Program of Interest</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Book className="h-5 w-5 text-gray-400" />
                    </div>
                    <select id="program" name="program" className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 border">
                      <option>Select a Program</option>
                      <option>B.Sc. Computer Science</option>
                      <option>B.A. Business Administration</option>
                      <option>B.Sc. Engineering</option>
                      <option>B.A. Psychology</option>
                      <option>M.Sc. Data Science</option>
                      <option>MBA</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700">Previous School/Institution</label>
                  <input type="text" name="previousSchool" id="previousSchool" required className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-3 border" placeholder="High School Name" />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Processing...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
