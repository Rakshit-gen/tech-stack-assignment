/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { PricingCard } from '@/components/pricingcard';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface FacultyMember {
  name: string;
  credentials: string;
  role: string;
  experience: number;
}
export const FacultyCard: React.FC<FacultyMember> = ({ name, credentials, role, experience }) => (
    <div className="relative group">
      <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-lg">
        <img
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