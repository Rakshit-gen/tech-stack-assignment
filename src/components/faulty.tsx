/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";
interface FacultyMember {
  name: string;
  credentials: string;
  role: string;
  experience: number;
}
export const FacultyCard: React.FC<FacultyMember> = ({ name, credentials, role, experience }) => (
    <div className="relative group">
      <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-lg">
        <Image
          src={"/medical.jpg"}
          alt={name}
          className="w-full object-cover aspect-square"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">{credentials}</p>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-gray-600">{experience} years of teaching</p>
        </div>
      </div>
    </div>
  );