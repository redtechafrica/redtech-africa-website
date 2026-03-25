import React from 'react';

interface LocationMapProps {
  isDark: boolean;
}

export default function LocationMap({ isDark }: LocationMapProps) {
  return (
    <div className={`w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-8 ${
      isDark ? 'ring-1 ring-gray-700' : 'ring-1 ring-gray-200'
    }`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126839.47894783215!2d3.3182735!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1697000000000!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="RAC Office Locations in Lagos"
      />
    </div>
  );
}