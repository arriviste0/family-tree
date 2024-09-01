import React, { useState } from 'react';

const Dialogbox = ({ onSave, onCancel }) => {
  const [activeTab, setActiveTab] = useState('Personal');
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', dob: '' });
  const [contactInfo, setContactInfo] = useState({ email: '', phoneNumber: '', address: '' });
  const [biodata, setBiodata] = useState({ occupation: '', education: '', skills: '' });

  const handleSave = () => {
    if (typeof onSave === 'function') {
      const data = { personalInfo, contactInfo, biodata };
      onSave(data);
    } else {
      console.error('onSave is not a function');
    }
  };

  const renderFormContent = () => {
    switch (activeTab) {
      case 'Personal':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-300">First Name:</label>
            <input
              type="text"
              value={personalInfo.firstName}
              onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
              className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
              placeholder="Enter first name"
            />
            <label className="block text-sm font-medium text-gray-300 mt-4">Last Name:</label>
            <input
              type="text"
              value={personalInfo.lastName}
              onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
              className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
              placeholder="Enter last name"
            />
            <label className="block text-sm font-medium text-gray-300 mt-4">Date of Birth:</label>
            <input
              type="date"
              value={personalInfo.dob}
              onChange={(e) => setPersonalInfo({ ...personalInfo, dob: e.target.value })}
              className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
            />
          </div>
        );
      case 'Contact':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-300">Email:</label>
            <input
              type="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
              placeholder="Enter email address"
            />
            <label className="block text-sm font-medium text-gray-300 mt-4">Phone Number:</label>
            <input
              type="tel"
              value={contactInfo.phoneNumber}
              onChange={(e) => setContactInfo({ ...contactInfo, phoneNumber: e.target.value })}
              className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
              placeholder="Enter phone number"
            />
            <label className="block text-sm font-medium text-gray-300 mt-4">Address:</label>
            <input
              type="text"
              value={contactInfo.address}
              onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
              className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
              placeholder="Enter address"
            />
          </div>
        );
      case 'Biodata':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-300">Occupation:</label>
            <input
              type="text"
              value={biodata.occupation}
              onChange={(e) => setBiodata({ ...biodata, occupation: e.target.value })}
              className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
              placeholder="Enter occupation"
            />
            <label className="block text-sm font-medium text-gray-300 mt-4">Education:</label>
            <input
              type="text"
              value={biodata.education}
              onChange={(e) => setBiodata({ ...biodata, education: e.target.value })}
              className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
              placeholder="Enter education"
            />
            <label className="block text-sm font-medium text-gray-300 mt-4">Skills:</label>
            <input
              type="text"
              value={biodata.skills}
              onChange={(e) => setBiodata({ ...biodata, skills: e.target.value })}
              className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
              placeholder="Enter skills"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-black/10 bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg w-[400px] border border-gray-500">

        <h3 className="text-lg font-semibold mb-4 text-white">Edit Node</h3>

        <div className="flex mb-4">
          <button
            onClick={() => setActiveTab('Personal')}
            className={`flex-1 p-2  transition-colors duration-300 ${
              activeTab === 'Personal' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            } rounded-tl-lg`}
          >
            Personal
          </button>
          <button
            onClick={() => setActiveTab('Contact')}
            className={`flex-1 p-2  transition-colors duration-300 ${
              activeTab === 'Contact' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setActiveTab('Biodata')}
            className={`flex-1 p-2  transition-colors duration-300 ${
              activeTab === 'Biodata' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            } rounded-tr-lg`}
          >
            Biodata
          </button>
        </div>

        <div className="p-4 border-t border-gray-500">
          {renderFormContent()}
        </div>

        <button
          onClick={handleSave}
          className="mt-4 p-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition-colors duration-300"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="mt-2 p-2 bg-gray-500 text-white rounded-md w-full hover:bg-gray-600 transition-colors duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Dialogbox;
