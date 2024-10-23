"use client"
import React, { useEffect } from 'react';

const EyesPage = () => {
  useEffect(() => {
    const pupils = document.querySelectorAll<HTMLElement>('.pupil');

    const movePupils = (e: MouseEvent) => {
      pupils.forEach((pupil) => {
        const eye = pupil.parentElement; // Get the parent eye element
        const rect = eye?.getBoundingClientRect();

        if (rect) {
          const eyeX = rect.left + rect.width / 2; // Center of the eye
          const eyeY = rect.top + rect.height / 2; // Center of the eye

          const deltaX = e.clientX - eyeX; // X distance from the center of the eye
          const deltaY = e.clientY - eyeY; // Y distance from the center of the eye

          const angle = Math.atan2(deltaY, deltaX); // Angle from the center to the mouse
          const distance = Math.min(8, Math.sqrt(deltaX ** 2 + deltaY ** 2)); // Limit the distance the pupil can move

          // Move the pupil
          pupil.style.transform = `translate(${(distance * Math.cos(angle))}px, ${(distance * Math.sin(angle))}px)`;
        }
      });
    };

    window.addEventListener('mousemove', movePupils);

    return () => {
      window.removeEventListener('mousemove', movePupils);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="eye-container flex justify-center items-center">
        <div className="eye w-16 h-16 bg-white border-2 border-black rounded-full relative">
          <div className="pupil w-4 h-4 bg-black rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="eye w-16 h-16 bg-white border-2 border-black rounded-full relative ml-4">
          <div className="pupil w-4 h-4 bg-black rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default EyesPage;
