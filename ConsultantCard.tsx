import React from 'react';
import { Linkedin, Star, Clock } from 'lucide-react';
import { Consultant } from '../types';

interface ConsultantCardProps {
  consultant: Consultant;
}

export function ConsultantCard({ consultant }: ConsultantCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={consultant.image}
          alt={consultant.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{consultant.name}</h3>
            <p className="text-gray-600">{consultant.title}</p>
          </div>
          <a
            href={consultant.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <Star className="w-5 h-5" />
            <span>Especializações:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {consultant.specializations.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{consultant.description}</p>
        
        <div className="flex items-center text-gray-600 border-t pt-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{consultant.experience}+ anos de experiência</span>
          </div>
        </div>
      </div>
    </div>
  );
}