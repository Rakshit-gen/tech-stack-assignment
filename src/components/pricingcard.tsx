/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
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

// Add this interface above the component definitions
interface PricingFeature {
  title: string;
  included: boolean;
}

export const PricingCard: React.FC<{
    title: string;
    price: string;
    features: PricingFeature[];
    isPopular?: boolean;
  }> = ({ title, price, features, isPopular }) => (
    <Card className={`relative ${isPopular ? 'border-purple-500 border-2' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
            Popular Choice
          </span>
        </div>
      )}
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex justify-center items-baseline gap-1">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-gray-600">/month</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.included ? (
                <Check className="w-5 h-5 text-purple-500" />
              ) : (
                <div className="w-5 h-5" />
              )}
              <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                {feature.title}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full mt-6 ${
            isPopular ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-900 hover:bg-gray-800'
          }`}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );