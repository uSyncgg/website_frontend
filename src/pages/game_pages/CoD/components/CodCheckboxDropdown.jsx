// import React, { useState, useRef, useEffect } from 'react';
// import { CFormCheck } from '@coreui/react';

// const CheckboxDropdown = ({ title, options, onChange, selectedOptions: externalSelectedOptions }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState(externalSelectedOptions || []);
//   const dropdownRef = useRef(null);

//   // Sync with external state if provided
//   useEffect(() => {
//     if (externalSelectedOptions) {
//       setSelectedOptions(externalSelectedOptions);
//     }
//   }, [externalSelectedOptions]);

//   // Handle clicks outside the dropdown to close it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle individual checkbox change
//   const handleCheckboxChange = (option) => {
//     let newSelectedOptions;
    
//     if (selectedOptions.includes(option)) {
//       newSelectedOptions = selectedOptions.filter(item => item !== option);
//     } else {
//       newSelectedOptions = [...selectedOptions, option];
//     }
    
//     setSelectedOptions(newSelectedOptions);
    
//     // Call external onChange handler
//     if (onChange) {
//       onChange(newSelectedOptions);
//     }
//   };

//   // Toggle all checkboxes
//   const toggleAll = () => {
//     let newSelectedOptions;
    
//     if (selectedOptions.length === options.length) {
//       newSelectedOptions = [];
//     } else {
//       newSelectedOptions = [...options];
//     }
    
//     setSelectedOptions(newSelectedOptions);
    
//     // Call external onChange handler
//     if (onChange) {
//       onChange(newSelectedOptions);
//     }
//   };

//   // Determine if main checkbox should be checked or indeterminate
//   const isChecked = selectedOptions.length > 0;
//   const isIndeterminate = selectedOptions.length > 0 && selectedOptions.length < options.length;

//   return (
//     <div className="checkbox-dropdown" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
//       {/* Main checkbox that opens dropdown */}
//       <div 
//         className="dropdown-toggle" 
//         onClick={toggleDropdown}
//         style={{ 
//           cursor: 'pointer', 
//           padding: '8px 12px',
//           display: 'flex',
//           borderRadius: '4px',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           minWidth: '200px',
//           backgroundColor: 'rgb(39,39,39)',
//           color: 'white'
//         }}
//       >
//         <div className="d-flex align-items-center">
//           <CFormCheck
//             id={`mainCheckbox-${title}`}
//             checked={isChecked}
//             onChange={toggleAll}
//             indeterminate={isIndeterminate ? true : undefined}
//             onClick={(e) => e.stopPropagation()} // Prevent dropdown toggle when clicking the checkbox
//           />
//           <span className="ms-2">{title}</span>
//         </div>
//         {/* <span>▼</span> */}
//       </div>

//       {/* Dropdown menu with checkboxes */}
//       {isOpen && (
//         <div 
//           className="dropdown-menu"
//           style={{
//             // position: 'absolute',
//             top: '100%',
//             left: '0',
//             zIndex: '1000',
//             display: 'block',
//             padding: '8px 0',
//             margin: '2px 0 0',
//             fontSize: '1rem',
//             backgroundColor: 'rgb(39,39,39)',
//             backgroundClip: 'padding-box',
//             border: '1px solid rgba(3, 3, 3, 0.15)',
//             borderRadius: '4px',
//             boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
//             minWidth: '200px'
//           }}
//         >
//           {options.map((option, index) => (
//             <div key={index} className="dropdown-item" style={{ padding: '4px 12px' }}>
//               <CFormCheck
//                 id={`${title}-option-${index}`}
//                 checked={selectedOptions.includes(option)}
//                 onChange={() => handleCheckboxChange(option)}
//                 label={option}
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckboxDropdown;

import React, { useState, useRef, useEffect } from 'react';
import { CFormCheck } from '@coreui/react';

const CheckboxDropdown = ({ title, options, onChange, selectedOptions: externalSelectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(externalSelectedOptions || []);
  const dropdownRef = useRef(null);

  // Sync with external state if provided
  useEffect(() => {
    if (externalSelectedOptions) {
      setSelectedOptions(externalSelectedOptions);
    }
  }, [externalSelectedOptions]);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle individual checkbox change
  const handleCheckboxChange = (option) => {
    let newSelectedOptions;
    
    if (selectedOptions.includes(option)) {
      newSelectedOptions = selectedOptions.filter(item => item !== option);
    } else {
      newSelectedOptions = [...selectedOptions, option];
    }
    
    setSelectedOptions(newSelectedOptions);
    
    // Call external onChange handler
    if (onChange) {
      onChange(newSelectedOptions);
    }
  };

  // Toggle all checkboxes
  const toggleAll = () => {
    let newSelectedOptions;
    
    if (selectedOptions.length === options.length) {
      newSelectedOptions = [];
    } else {
      newSelectedOptions = [...options];
    }
    
    setSelectedOptions(newSelectedOptions);
    
    // Call external onChange handler
    if (onChange) {
      onChange(newSelectedOptions);
    }
  };

  // Determine if main checkbox should be checked or indeterminate
  const isChecked = selectedOptions.length > 0;
  const isIndeterminate = selectedOptions.length > 0 && selectedOptions.length < options.length;

  return (
    <div 
      className="checkbox-dropdown" 
      ref={dropdownRef} 
      style={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column',
        width: '15rem',
        transition: 'margin-bottom 0.3s ease-out',
        marginBottom: isOpen ? '200px' : '0' // Adjusts space dynamically
      }}
    >
      {/* Main checkbox that opens dropdown */}
      <div 
        className="dropdown-toggle" 
        onClick={toggleDropdown}
        style={{ 
          cursor: 'pointer', 
          padding: '0.75rem 1rem',
          display: 'flex',
          borderRadius: '4px',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgb(39,39,39)',
          color: 'white',
          width: '100%'
        }}
      >
        <div className="d-flex align-items-center" style={{ paddingLeft: '2rem' }}>
          <CFormCheck
            id={`mainCheckbox-${title}`}
            checked={isChecked}
            onChange={toggleAll}
            indeterminate={isIndeterminate ? true : undefined}
            onClick={(e) => e.stopPropagation()} // Prevent dropdown toggle when clicking the checkbox
          />
          <span className="ms-2">{title}</span>
        </div>
      </div>

      {/* Dropdown menu with checkboxes */}
      <div 
        className="dropdown-menu"
        style={{
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-out, opacity 0.2s ease-in-out',
          maxHeight: isOpen ? '20rem' : '0',
          opacity: isOpen ? '1' : '0',
          backgroundColor: 'rgb(39,39,39)',
          border: '1px solid rgba(3, 3, 3, 0.15)',
          borderRadius: '4px',
          boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
          minWidth: '200px',
          padding: isOpen ? '0.5rem 0' : '0',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {options.map((option, index) => (
          <div key={index} className="dropdown-item" style={{ padding: '0.25rem 1rem' }}>
            <CFormCheck
              id={`${title}-option-${index}`}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              label={option}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxDropdown;
