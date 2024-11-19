/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, FileText, Calendar, Clock, DollarSign } from "lucide-react";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

interface ExamSectionProps {
  title: string;
  content: string;
  questionCount?: string;
  topics?: string[];
}

const ExamSection: React.FC<ExamSectionProps> = ({
  title,
  content,
  questionCount,
  topics,
}) => (
  <Card className="mb-4">
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      {topics && (
        <ul className="list-disc pl-5 mb-4 text-gray-600">
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      )}
      {questionCount && (
        <div className="text-sm text-purple-600 font-medium">
          {questionCount}
        </div>
      )}
    </CardContent>
  </Card>
);

const ExamDetailsPage: React.FC = () => {
  const examSections = [
    {
      title: "Assessment and Planning (25 questions)",
      content: "Focuses on comprehensive patient assessment, clinical decision making, and developing care plans across the spectrum of healthcare settings.",
      topics: [
        "Initial and ongoing assessment",
        "Interdisciplinary team planning",
        "Care coordination across settings",
        "Clinical decision making",
      ]
    },
    {
      title: "Pain Management (25 questions)",
      content: "Covers assessment, pharmacological interventions, and non-pharmacological approaches to pain management.",
      topics: [
        "Pain assessment tools and techniques",
        "Pharmacological pain management",
        "Non-pharmacological interventions",
        "Monitoring treatment effectiveness",
      ]
    },
    {
      title: "Symptom Management (28 questions)",
      content: "Addresses the management of various physical and psychological symptoms common in palliative care.",
      topics: [
        "Physical symptom assessment",
        "Treatment strategies",
        "Psychological support",
        "Quality of life optimization",
      ]
    },
    {
      title: "Support, Education, and Advocacy (28 questions)",
      content: "Focuses on providing support to patients and families, including educational resources and advocacy services.",
      topics: [
        "Patient and family education",
        "Advance care planning",
        "Grief support services",
        "Patient advocacy",
      ]
    },
    {
      title: "Practice Issues (19 questions)",
      content: "Covers professional practice standards, ethical considerations, and regulatory compliance.",
      topics: [
        "Legal and ethical considerations",
        "Quality improvement",
        "Professional development",
        "Healthcare policy compliance",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
        <div className='hidden md:inline'>
      <Navbar />
      </div>
      <div className='flex md:hidden bg-purple-400'>
      <Link href="/exam-details"><Button>Exam Details</Button></Link>  
      </div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
              ACHPN - Advanced Certification in
              <span className="block text-purple-500">Hospice and Palliative Nurse</span>
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="text-purple-500 h-6 w-6" />
                <p className="text-lg">Completion Time: 3.5 hours</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-purple-500 h-6 w-6" />
                <p className="text-lg">175 multiple-choice questions</p>
              </div>
            </div>
            <Button className="bg-purple-500 hover:bg-purple-600 text-lg px-8 py-6">
              Try 10 Free Questions Now
            </Button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img
              src="/doc.jpg"
              alt="ACHPN Certification"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">About the Exam</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600">
              The Certified Hospice and Palliative Nurse (CHPN®) exam is a specialized certification for
              registered nurses dedicated to providing care for patients facing terminal illnesses. Earning this
              advanced credential validates a nurses expertise in end-of-life care, encompassing complex symptom
              management, emotional support, and the nuanced delivery of palliative care through the
              advanced stages of illness. This certification not only reflects a high standard of competency in
              hospice and palliative nursing but also represents a commitment to upholding quality of life as a
              top priority for patients at the end of life.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Detailed Outline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8">Detailed Exam Outline</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {examSections.map((section, index) => (
              <Card key={index} className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{section.content}</p>
                  <div className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start gap-2">
                        <Check className="text-purple-500 h-5 w-5 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl">Exam Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-100 rounded-lg mb-4">
                  <img
                    src={"/download.jpg"}
                    alt="Exam distribution chart"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Assessment and Planning</span>
                    <span className="font-medium">25 questions (20%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pain Management</span>
                    <span className="font-medium">25 questions (20%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Symptom Management</span>
                    <span className="font-medium">28 questions (22%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Support and Education</span>
                    <span className="font-medium">28 questions (22%)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Practice Issues</span>
                    <span className="font-medium">19 questions (16%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exam Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-8">Exam Content Outline</h2>

          <ExamSection
            title="Assessment and Planning"
            content="Focuses on setting care goals, making scored clinical decisions, and coordinating with an interdisciplinary team to provide individualized care."
            questionCount="25 questions"
          />

          <ExamSection
            title="Pain Management"
            content="Covers pain assessment and treatment, using medications, non-pharmacologic approaches, and complementary therapies to alleviate suffering."
            questionCount="25 questions"
          />

          <ExamSection
            title="Symptom Management"
            content="Addresses managing symptoms across bodily systems to improve patient comfort and quality of life."
            questionCount="28 questions"
          />

          <ExamSection
            title="Support, Education, and Advocacy"
            content="Examines the nurse's role in guiding patients and families through advance care planning, emotional support and grief services."
            questionCount="28 questions"
          />

          <ExamSection
            title="Practice Issues"
            content="Covers compliance with hospice standards, legal regulations, self-care, and staying current with healthcare policy changes affecting end-of-life care."
            questionCount="19 questions"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Common Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">
                What are the eligibility requirements?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              You must have a current, active RN license and a minimum of 500 hours of hospice and palliative nursing practice in the most recent 12 months or 1,000 hours in the most recent 24 months prior to applying for the exam.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">
                How long is the certification valid?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The ACHPN certification is valid for 4 years. To maintain certification, you must either retake the examination or meet the continued competency requirements through professional development activities.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">
                What is the passing score?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The exam uses a scaled scoring system. While the exact passing score may vary, you typically need to correctly answer about 75% of the questions to pass the exam.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-purple-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start your preparation?</h2>
          <p className="text-purple-100 mb-8">
            Try our practice questions and see how ready you are for the exam
          </p>
          <Button className="bg-white text-purple-500 hover:bg-gray-100">
            Try Free Questions Now
          </Button>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Eligibility Requirements</h2>
            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">
                  To be eligible for the CHPN® exam, you must have a current, active RN license and a minimum of 500 hours of hospice and palliative nursing practice in the most recent 12 months, or 1,000 hours in the most recent 24 months prior to applying for the exam.
                </p>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <img
                    src="/api/placeholder/400/240"
                    alt="Nurses caring for patient"
                    className="w-full rounded-lg mb-4"
                  />
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-8">Application Process</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Online Application</h3>
                  <p className="text-gray-600">
                    Visit the testing centers website and complete your online application. Make sure to verify all the information before submission.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Application Documentation</h3>
                  <p className="text-gray-600">
                    Submit proof of current RN licensure along with required professional credentials. After submitting, allow up to 2-4 weeks for review.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Scheduling An Exam</h3>
                  <p className="text-gray-600">
                    Once your application has been confirmed, you will receive instructions on how to schedule your exam at an authorized testing center.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Learn from Board Masters</h2>
            <div className="space-y-6">
              <Card className="bg-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <FileText className="text-purple-500 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Master Question Bank</h3>
                      <p className="text-gray-600">Access our extensive database designed to enhance your understanding of hospice and palliative care.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="text-purple-500 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Personalize Your Study Schedule</h3>
                      <p className="text-gray-600">Create a customized study plan that fits your schedule and ensures comprehensive exam preparation.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="text-purple-500 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Simulated Online Experience</h3>
                      <p className="text-gray-600">Practice with our testing interface, accurately timing learning features, and customized performance tracking.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8">Exam Dates and Costs</h2>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <DollarSign className="text-purple-500 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Testing Fees</h3>
                      <p className="text-gray-600">
                        Registration for the CHPN® exam includes application fee of $XXX. Special rates may apply for group registrations and HPNA members.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Exam Format</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Multiple-choice exam with 150 questions delivered in 3.5 hours</li>
                      <li>Testing windows available throughout the year</li>
                      <li>Computer-based testing at authorized centers</li>
                      <li>Passing score determined through statistical analysis</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamDetailsPage;