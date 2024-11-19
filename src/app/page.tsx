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
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { FacultyCard } from "@/components/faulty"
import { Navbar } from '@/components/navbar';
import { ProcessStep } from '@/components/process-step';

interface FacultyMember {
  name: string;
  credentials: string;
  role: string;
  experience: number;
}

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}



const facultyData: FacultyMember[] = [
  {
    name: "Alexa Shah",
    credentials: "MD, MPH (Master of Public Health)",
    role: "Chief Medical Educator in BGHU",
    experience: 15,
  },
  {
    name: "John Smith",
    credentials: "MD, MPH (Master of Public Health)",
    role: "Senior Medical Educator",
    experience: 12,
  },
  {
    name: "Sarah Johnson",
    credentials: "MD, MPH (Master of Public Health)",
    role: "Clinical Education Director",
    experience: 10,
  },
  {
    name: "Michael Chen",
    credentials: "MD, MPH (Master of Public Health)",
    role: "Medical Education Specialist",
    experience: 8,
  },
];


const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className='hidden md:inline'>
      <Navbar />
      </div>
      
      

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
              Complete Guide for
              <span className="block text-purple-500">ACHPN Exam Success</span>
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="text-purple-500 h-6 w-6" />
                <p className="text-lg">Gain CE credits by answering practice questions</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-500 h-6 w-6" />
                <p className="text-lg">Build your skills and be prepared for your certification exam</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-lg">4.8</span>
              <span className="text-gray-600">from 5,000+ reviews</span>
            </div>
            <Button className="bg-purple-500 hover:bg-purple-600 text-lg px-8 py-6">
              Purchase Now
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img
              src={"/doc.jpg"}
              alt="Medical professionals"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-purple-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Find <span className="text-purple-500">Your Question Bank</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="min-w-[140px] text-lg">Nursing</Button>
            <Button variant="outline" className="min-w-[140px] text-lg">Nurse Practitioner</Button>
            <Button variant="outline" className="min-w-[140px] text-lg">NCHN</Button>
            <Button className="bg-purple-500 hover:bg-purple-600 min-w-[140px] text-lg">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Meet Our <span className="text-purple-500">Dedicated Faculty Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These teachers members are committed to shaping the future of our students.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-6 md:grid md:grid-cols-3 lg:grid-cols-4">
              {facultyData.map((faculty, index) => (
                <FacultyCard key={index} {...faculty} />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Content Creation Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Content Creation Process
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <ProcessStep 
            icon={<div className="w-8 h-8 bg-purple-500 rounded-full" />}
            title="Medical Reviewer (Physician)"
          />
          <ProcessStep 
            icon={<div className="w-8 h-8 bg-purple-500 rounded-full" />}
            title="Editor"
          />
          <ProcessStep 
            icon={<div className="w-8 h-8 bg-purple-500 rounded-full" />}
            title="Chief Editor"
          />
          <ProcessStep 
            icon={<div className="w-8 h-8 bg-purple-500 rounded-full" />}
            title="CME or Publisher"
          />
        </div>
      </section>

      {/* Success Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let us pave your <span className="text-purple-500">way to success</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Begin your studies now to earn continuing education credits and practice the skills you need to succeed.
        </p>
        <Button className="bg-purple-500 hover:bg-purple-600 mt-8 text-lg px-8 py-6">
          Get Started Now
        </Button>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "4000+", label: "Happy Students" },
            { value: "900+", label: "Practice Questions" },
            { value: "1000+", label: "Video Lectures" },
            { value: "2000+", label: "CE Credits Awarded" }
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-purple-500 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-purple-500 rounded-2xl p-8 text-white text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">7 days trial with 100% money back</h2>
            <p className="text-purple-100">
              If you are not satisfied with our platform, get a full refund within 7 days
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by <span className="text-purple-500">Thousands of Students</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our students have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              text: "The practice questions were incredibly helpful in preparing for my certification exam. I passed on my first attempt!",
              name: "Dr. Sarah Johnson",
              role: "ACHPN Certified Nurse",
              image: "/medical.jpg"
            },
            {
              text: "Comprehensive study materials and excellent support from the faculty team. Highly recommended for anyone preparing for their boards.",
              name: "Dr. Michael Chen",
              role: "Medical Educator",
              image: "/medical.jpg"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Frequently <span className="text-purple-500">asked questions</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Your questions answered—all need to know preparing for the ACHPN® exam.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">
                  What does the ACHPN® preparation course include?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The course provides a complete preparation package with over 1,500 practice questions 
                designed to mirror the ACHPN® exam, supported by detailed explanations. It also 
                includes video lectures covering the exam blueprint, four predictor exams to assess 
                readiness, and downloadable study resources.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">
                  How long do I have access to the course and question bank?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You will have unlimited access to all course materials and the question bank for 12 
                months from the date of purchase. This gives you ample time to prepare thoroughly 
                for your exam at your own pace.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">
                  Can I earn CE hours through this course?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes! You can earn continuing education (CE) credits while preparing for your exam. 
                Our practice questions are accredited, and you will receive CE certificates upon 
                completing question sets and assessments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">
                  Is there a mobile app available?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, our mobile app is available for both iOS and Android devices. You can access 
                all course materials, practice questions, and track your progress on the go.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">
                  What is your pass guarantee?
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We offer a 100% pass guarantee. If you dont pass your exam after completing our 
                course, we will extend your access for free until you do. Terms and conditions apply.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline" className="text-purple-500 border-purple-500">
              Contact our support team
            </Button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-purple-500">get started</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <Label>Monthly</Label>
            <Switch id="billing-toggle" />
            <Label>Annual (Save 20%)</Label>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Basic"
              price="47"
              features={[
                { title: "Access to all practice questions", included: true },
                { title: "Basic study materials", included: true },
                { title: "Community forum access", included: true },
                { title: "Video lectures", included: false },
                { title: "1-on-1 mentoring", included: false },
                { title: "Advanced analytics", included: false },
              ]}
            />
            
            <PricingCard
              title="Premium"
              price="97"
              isPopular={true}
              features={[
                { title: "Access to all practice questions", included: true },
                { title: "Complete study materials", included: true },
                { title: "Community forum access", included: true },
                { title: "Video lectures", included: true },
                { title: "1-on-1 mentoring", included: true },
                { title: "Advanced analytics", included: true },
              ]}
            />
            
            <PricingCard
              title="Enterprise"
              price="147"
              features={[
                { title: "Access to all practice questions", included: true },
                { title: "Complete study materials", included: true },
                { title: "Community forum access", included: true },
                { title: "Video lectures", included: true },
                { title: "1-on-1 mentoring", included: true },
                { title: "Advanced analytics", included: true },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All plans include unlimited access to basic features and email support.
            <br />
            Need a custom plan? <Button variant="link" className="text-purple-500 p-0">Contact us</Button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;