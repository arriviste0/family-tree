import React, { useState } from 'react';

const Optiondialog = ({ onCancel }) => {
  const [selectedTab, setSelectedTab] = useState('displayText');

  const [displayOptions, setDisplayOptions] = useState({
    name: true,
    middleName: true,
    nickname: true,
    titleSuffix: true,
    surname: true,
    photo: true,
    age: true,
    lifeYears: true,
    birthDate: true,
    birthPlace: true,
    marriageDate: true,
    marriagePlace: true,
    divorceDate: true,
    deathDate: true,
    deathPlace: true,
    deathCause: true,
    burialDate: true,
    burialPlace: true,
    email: true,
    telephone: true,
    address: true,
    profession: true,
    company: true,
    interests: true,
    activities: true,
  });

  const [colorTheme, setColorTheme] = useState({
    backgroundColor: '#ffffff', // Default white
    maleColor: '#0000FF', // Default blue
    femaleColor: '#FFC0CB', // Default pink
    otherColor: '#808080', // Default gray
    livingTextColor: '#008000', // Default green
    deceasedTextColor: '#FF0000', // Default red
    boxWidth: 32,
    textSize: 14,
  });

  const [otherOptions, setOtherOptions] = useState({
    surnames: 'Now',
    givenNames: 'Before',
    leftPartner: 'Female',
    parents: '5 gens',
    children: '8 gens',
    others: '2 gens',
    currentPartners: 'Thick',
    otherPartners: 'Medium',
    parentLine: 'Medium',
    nonBiological: 'Gray',
  });

  const handleCheckboxChange = (e, option) => {
    setDisplayOptions({ ...displayOptions, [option]: e.target.checked });
  };

  const handleColorChange = (e, colorOption) => {
    setColorTheme({ ...colorTheme, [colorOption]: e.target.value });
  };

  const handleSliderChange = (e, sliderOption) => {
    setColorTheme({ ...colorTheme, [sliderOption]: parseInt(e.target.value) });
  };

  const handleOtherOptionsChange = (e, option) => {
    setOtherOptions({ ...otherOptions, [option]: e.target.value });
  };

  const resetColorTheme = (colorOption, defaultValue) => {
    setColorTheme({ ...colorTheme, [colorOption]: defaultValue });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 relative flex">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-4">Edit Node Options</h3>
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setSelectedTab('displayText')}
              className={`px-4 py-2 text-left font-medium ${selectedTab === 'displayText' ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Display Text
            </button>
            <button
              onClick={() => setSelectedTab('colorTheme')}
              className={`px-4 py-2 text-left font-medium ${selectedTab === 'colorTheme' ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Color Theme
            </button>
            <button
              onClick={() => setSelectedTab('otherOptions')}
              className={`px-4 py-2 text-left font-medium ${selectedTab === 'otherOptions' ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Other Options
            </button>
          </div>
        </div>

        <div className="w-3/4 pl-6 border-l">
          {selectedTab === 'displayText' && (
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(displayOptions).map((option, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    <input
                      type="checkbox"
                      checked={displayOptions[option]}
                      onChange={(e) => handleCheckboxChange(e, option)}
                      className="mr-2"
                    />
                    {option.replace(/([A-Z])/g, ' $1')}
                  </label>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'colorTheme' && (
            <div className="grid grid-cols-2 gap-4">
              {/* Background Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Background Color</label>
                <input
                  type="color"
                  value={colorTheme.backgroundColor}
                  onChange={(e) => handleColorChange(e, 'backgroundColor')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <button onClick={() => resetColorTheme('backgroundColor', '#ffffff')} className="mt-1 text-sm text-red-500">Reset</button>
              </div>

              {/* Male Box */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Male Box</label>
                <input
                  type="color"
                  value={colorTheme.maleColor}
                  onChange={(e) => handleColorChange(e, 'maleColor')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <button onClick={() => resetColorTheme('maleColor', '#0000FF')} className="mt-1 text-sm text-red-500">Reset</button>
              </div>

              {/* Female Box */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Female Box</label>
                <input
                  type="color"
                  value={colorTheme.femaleColor}
                  onChange={(e) => handleColorChange(e, 'femaleColor')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <button onClick={() => resetColorTheme('femaleColor', '#FFC0CB')} className="mt-1 text-sm text-red-500">Reset</button>
              </div>

              {/* Other Box */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Other Box</label>
                <input
                  type="color"
                  value={colorTheme.otherColor}
                  onChange={(e) => handleColorChange(e, 'otherColor')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <button onClick={() => resetColorTheme('otherColor', '#808080')} className="mt-1 text-sm text-red-500">Reset</button>
              </div>

              {/* Living Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Living Text</label>
                <input
                  type="color"
                  value={colorTheme.livingTextColor}
                  onChange={(e) => handleColorChange(e, 'livingTextColor')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <button onClick={() => resetColorTheme('livingTextColor', '#008000')} className="mt-1 text-sm text-red-500">Reset</button>
              </div>

              {/* Deceased Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Deceased Text</label>
                <input
                  type="color"
                  value={colorTheme.deceasedTextColor}
                  onChange={(e) => handleColorChange(e, 'deceasedTextColor')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <button onClick={() => resetColorTheme('deceasedTextColor', '#FF0000')} className="mt-1 text-sm text-red-500">Reset</button>
              </div>

              {/* Box Width */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Box Width</label>
                <input
                  type="range"
                  min="16"
                  max="64"
                  value={colorTheme.boxWidth}
                  onChange={(e) => handleSliderChange(e, 'boxWidth')}
                  className="mt-1 block w-full"
                />
                <button onClick={() => resetColorTheme('boxWidth', 32)} className="mt-1 text-sm text-red-500">Reset</button>
              </div>

              {/* Text Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Text Size</label>
                <input
                  type="range"
                  min="10"
                  max="32"
                  value={colorTheme.textSize}
                  onChange={(e) => handleSliderChange(e, 'textSize')}
                  className="mt-1 block w-full"
                />
                <button onClick={() => resetColorTheme('textSize', 14)} className="mt-1 text-sm text-red-500">Reset</button>
              </div>
            </div>
          )}

          {selectedTab === 'otherOptions' && (
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(otherOptions).map((option, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {option.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <select
                    value={otherOptions[option]}
                    onChange={(e) => handleOtherOptionsChange(e, option)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="Now">Now</option>
                    <option value="Before">Before</option>
                    <option value="Female">Female</option>
                    <option value="5 gens">5 gens</option>
                    <option value="8 gens">8 gens</option>
                    <option value="2 gens">2 gens</option>
                    <option value="Thick">Thick</option>
                    <option value="Medium">Medium</option>
                    <option value="Gray">Gray</option>
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Optiondialog;
