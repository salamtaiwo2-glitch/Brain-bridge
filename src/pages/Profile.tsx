import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Book, Calendar, Award, Clock, FileText, Settings, LogOut, Loader2 } from 'lucide-react';

export default function Profile() {
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [editForm, setEditForm] = useState({ email: '', phone: '', address: '' });
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setStudent(data);
        setEditForm({ email: data.email, phone: data.phone, address: data.address });
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const response = await fetch('/api/logout', { method: 'POST' });
      const result = await response.json();
      if (result.success) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      setIsLoggingOut(false);
    }
  };

  const handleSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const response = await fetch('/api/profile/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      });
      const result = await response.json();
      if (result.success) {
        setStudent({ ...student, ...result.data });
        setIsSettingsOpen(false);
      }
    } catch (error) {
      console.error('Error updating settings:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 text-emerald-600 animate-spin mb-4" />
        <p className="text-gray-600 font-medium">Loading student profile...</p>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600 font-medium">Error loading profile. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-emerald-600 to-emerald-800"></div>
          <div className="px-8 pb-8 relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-12 sm:-mt-16 mb-6">
              <div className="flex items-end space-x-5">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-white shadow-md object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="pb-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{student.name}</h1>
                  <p className="text-emerald-600 font-medium">Student ID: {student.id}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-3">
                <button 
                  onClick={() => setIsSettingsOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <Settings className="h-4 w-4 mr-2" /> Settings
                </button>
                <button 
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoggingOut ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <LogOut className="h-4 w-4 mr-2" />
                  )}
                  {isLoggingOut ? 'Logging out...' : 'Logout'}
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-100 pt-6">
              <div>
                <p className="text-sm text-gray-500 font-medium">Program</p>
                <p className="text-gray-900 font-semibold">{student.program}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Academic Year</p>
                <p className="text-gray-900 font-semibold">{student.year}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Cumulative GPA</p>
                <p className="text-gray-900 font-semibold">{student.gpa}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Enrollment Status</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mt-1">
                  {student.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Biodata */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-emerald-600" /> Biodata & Contact
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email Address</p>
                    <p className="text-sm text-gray-900">{student.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone Number</p>
                    <p className="text-sm text-gray-900">{student.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                    <p className="text-sm text-gray-900">{student.dob}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Residential Address</p>
                    <p className="text-sm text-gray-900">{student.address}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsSettingsOpen(true)}
                className="mt-6 w-full text-emerald-600 border border-emerald-200 hover:bg-emerald-50 font-medium text-sm px-4 py-2 rounded-md transition-colors"
              >
                Edit Profile Information
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-emerald-600" /> Quick Links
              </h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 flex items-center justify-between">
                    Download Unofficial Transcript <ChevronRight className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 flex items-center justify-between">
                    Financial Aid & Billing <ChevronRight className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 flex items-center justify-between">
                    Housing Portal <ChevronRight className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 flex items-center justify-between">
                    Career Services <ChevronRight className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Academic Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Courses */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <Book className="h-5 w-5 mr-2 text-emerald-600" /> Current Semester Courses
                </h2>
                <span className="text-sm text-gray-500 font-medium">Fall 2026</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Grade</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {student.currentCourses.map((course: any, idx: number) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-600">{course.code}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.credits}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">{course.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming Schedule */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-emerald-600" /> Today's Schedule
              </h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <div className="flex-shrink-0 w-16 text-center">
                    <p className="text-sm font-bold text-blue-900">09:00</p>
                    <p className="text-xs text-emerald-600">AM</p>
                  </div>
                  <div className="ml-4 border-l-2 border-emerald-200 pl-4">
                    <p className="text-sm font-bold text-gray-900">CS301: Data Structures</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" /> Science Building, Room 402
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex-shrink-0 w-16 text-center">
                    <p className="text-sm font-bold text-gray-900">11:30</p>
                    <p className="text-xs text-gray-500">AM</p>
                  </div>
                  <div className="ml-4 border-l-2 border-gray-200 pl-4">
                    <p className="text-sm font-bold text-gray-900">MATH210: Linear Algebra</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" /> Math Annex, Room 105
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex-shrink-0 w-16 text-center">
                    <p className="text-sm font-bold text-gray-900">02:00</p>
                    <p className="text-xs text-gray-500">PM</p>
                  </div>
                  <div className="ml-4 border-l-2 border-gray-200 pl-4">
                    <p className="text-sm font-bold text-gray-900">ENG201: Technical Writing</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" /> Humanities Hall, Room 210
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setIsSettingsOpen(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSettingsSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 sm:mx-0 sm:h-10 sm:w-10">
                      <Settings className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Profile Settings
                      </h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                          <input type="email" name="email" id="email" value={editForm.email} onChange={(e) => setEditForm({...editForm, email: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                          <input type="text" name="phone" id="phone" value={editForm.phone} onChange={(e) => setEditForm({...editForm, phone: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Residential Address</label>
                          <textarea name="address" id="address" rows={3} value={editForm.address} onChange={(e) => setEditForm({...editForm, address: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button type="submit" disabled={isUpdating} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-70">
                    {isUpdating ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button type="button" onClick={() => setIsSettingsOpen(false)} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper component for chevron icon
function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
