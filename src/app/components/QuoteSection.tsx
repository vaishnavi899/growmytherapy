'use client';

import React from 'react';

export default function QuoteSection() {
  return (
    <section
      className="w-full h-[300px] md:h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.png')", // Make sure this image exists in /public
      }}
    />
  );
}
