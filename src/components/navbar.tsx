import React from 'react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="w-full bg-purple-500 text-white p-2 text-center">
        <p>Earn free CE credit by answering practice questions</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full" />
              <span className="text-xl font-bold text-purple-600">Board Master</span>
            </div>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-2 p-4">
                      <li>Question Banks</li>
                      <li>Study Guides</li>
                      <li>Practice Tests</li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-2 p-4">
                      <li>Study Tips</li>
                      <li>Blog</li>
                      <li>Community</li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="link" className="text-gray-600">Pricing</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="link" className="text-gray-600">Contact</Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost">Log in</Button>
            <Button className="bg-purple-500 hover:bg-purple-600">Purchase Now</Button>
          </div>
        </div>
      </div>
    </header>
  );
};