import React from 'react';

const CenteredLayout = ({ children }) => (
    <section className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center p-8">
        <div className='w-full flex justify-center items-center py-12'>
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                {children}
            </div>
        </div>
    </section>
);

export default CenteredLayout;
