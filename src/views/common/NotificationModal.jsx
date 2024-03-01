import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const NotificationModal = ({ children, onClose }) => {
    return (
        <div className="fixed max-w-sm mx-auto inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-[#111419] pt-2 max-w-sm w-full h-full overflow-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-600">
                    <XMarkIcon className='w-6 h-6 text-white' />
                </button>
                {children}
            </div>
        </div>
    );
};

export default NotificationModal;
