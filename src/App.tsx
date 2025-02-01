import React, { useState, useEffect } from 'react';
import { Timer, Users, Award, BarChart2, Building, Globe, Star, PlayCircle, CheckCircle2, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const workshopImages = [
    "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workshopImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workshopImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workshopImages.length) % workshopImages.length);
  };

  const faqData = [
    {
      question: "How I'll get the link to attend the program?",
      answer: "Once you register, you'll receive the workshop link via email and WhatsApp 24 hours before the program starts."
    },
    {
      question: "How I'll get the bonus items?",
      answer: "All bonus materials will be shared with you via email within 24 hours after the workshop completion."
    },
    {
      question: "Why does this program cost only ₹99?",
      answer: "We want to make this program accessible to as many business owners as possible. The low price point helps us reach more entrepreneurs who can benefit from this knowledge."
    },
    {
      question: "Will I get the recording of the program?",
      answer: "No, this is a live interactive session and recordings won't be provided to ensure active participation and engagement."
    },
    {
      question: "Why is the training during business hours?",
      answer: "The timing is chosen to ensure you can focus completely on learning without daily business distractions."
    },
    {
      question: "Who is this seminar ideal for?",
      answer: "This seminar is perfect for business owners, entrepreneurs, and founders who want to scale their business and implement systematic growth strategies."
    },
    {
      question: "Is this applicable to my industry?",
      answer: "Yes, the principles and strategies taught are universal and can be applied to any industry or business type."
    },
    {
      question: "Can I attend this if I want to start a business but don't have one yet?",
      answer: "Yes, this workshop will give you valuable insights into building a successful business from the ground up."
    },
    {
      question: "What if I have questions about registration, attending, etc?",
      answer: "Our support team is available 24/7. You can email us or call our helpline for immediate assistance."
    },
    {
      question: "If I miss attending this time can I attend this again?",
      answer: "Yes, you may attend it again at a later date, subject to availability."
    },
    {
      question: "What do I need to keep handy during the webinar?",
      answer: "A notebook, pen, and a stable internet connection. We also recommend using a laptop/desktop for the best experience."
    },
    {
      question: "Can I attend this program along with my business partner(s)?",
      answer: "Yes, but each participant needs to register separately to get individual access and materials."
    },
    {
      question: "Is it a LIVE workshop?",
      answer: "Yes, this is a completely LIVE interactive workshop where you can ask questions and get real-time answers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/10 inline-block px-6 py-2 rounded-full mb-6">
            <p className="text-sm font-medium">4 HOUR ONLINE WORKSHOP ON 1ST FEBRUARY 2025</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join and Become Like The Top 1% Successful Business Owners & Entrepreneurs</h1>
          <p className="text-xl mb-8">Before it's too late...</p>
          <div className="flex justify-center gap-4 mb-8">
            <Timer className="w-6 h-6" />
            <span>09:00 AM - 01:00 PM</span>
          </div>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors">
            REGISTER NOW AT ₹99/- ONLY
          </button>
        </div>
      </section>

      {/* Meet Your Coach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Your Coach</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" 
                alt="Rajiv Talreja" 
                className="w-48 h-48 rounded-full object-cover mb-4"
              />
              <h3 className="text-2xl font-bold text-orange-500">RAJIV TALREJA</h3>
              <p className="text-gray-600">India's MSME Business Coach</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "16", label: "Years Of Experience In Training And Coaching" },
                { value: "50M", label: "Entrepreneurs Reached In The Last 6 Years" },
                { value: "500+", label: "Seminars And Workshops Conducted In The Last 6 Years" },
                { value: "500K", label: "Social Media Following" },
                { value: "100K", label: "Paid Customers" },
                { value: "18K+", label: "Live Entrepreneurs Community" },
                { value: "2000+", label: "Coaching Clients" },
                { value: "190+", label: "Industries Worked With" },
                { value: "30+", label: "In-House Business Coaches" },
                { value: "5", label: "Trained In More Than Five Countries" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-orange-500 mb-2">{stat.value}</h4>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Will Change */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Will Change In Your Business?</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative">
              <div className="bg-orange-500 text-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
                <span className="text-lg font-bold">Business Breakthrough</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-dashed border-orange-300 rounded-lg p-4">
                  <p className="text-sm font-medium">Right Psychology Of Running The Business</p>
                </div>
                <div className="border border-dashed border-orange-300 rounded-lg p-4">
                  <p className="text-sm font-medium">Right Systems</p>
                </div>
                <div className="border border-dashed border-orange-300 rounded-lg p-4">
                  <p className="text-sm font-medium">Right Strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Not Join */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who This Workshop Will Help The Best?</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6 text-center">DON'T JOIN IF</h3>
              {[
                "You Are Not A Business Owner",
                "You Are Not An Action Taker",
                "You Are Not Serious About Your Business"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
                  <XCircle className="text-red-500 w-6 h-6" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You Will Learn In 4 Hrs?</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              "7 Foundational Activities Used By Successful Entrepreneurs",
              "3 Ingredients You Need To Focus On To Build A Business That Can Grow Without You",
              "How To Build Your Front-Line Leaders",
              "How To Retain Employees: Strategies And Systems"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
                <span className="text-orange-500 font-bold">{(index + 1).toString().padStart(2, '0')}.</span>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement with Carousel */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">I'm On A MISSION To Help 1 Million Business Owners Achieve Profit & Growth</h2>
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="overflow-hidden rounded-lg">
              <div className="relative">
                <img
                  src={workshopImages[currentSlide]}
                  alt={`Workshop ${currentSlide + 1}`}
                  className="w-full h-[400px] object-cover"
                />
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {workshopImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-orange-500 italic">Because I've Been Through A Lot Of Struggle Myself...</p>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recap Of What You Will Get On Registering</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "6 Tips To Build A High Performance Team",
              "5 Things To Get Right Before You Start Marketing",
              "7 Wrong Sales Mindsets That You Must Avoid In Business",
              "6 Ultimate Ds Every Business Owner Needs To Learn",
              "5 Ts For Consistent Growth",
              "4 Different Ways Innovate Your Business"
            ].map((bonus, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium">{bonus}</p>
                  <p className="text-orange-500">Priced At: 499/-</p>
                </div>
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                  499/-
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price and Timer */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg mb-2">Total Value : ₹7,486/-</p>
            <p className="text-lg mb-4">Regular Price :₹999/-</p>
            <div className="bg-orange-50 p-4 rounded-lg mb-6">
              <p className="text-xl font-bold text-orange-500">Today's Price : ₹99/-</p>
            </div>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors w-full">
              REGISTER NOW AT ₹99/- ONLY
            </button>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Still Not Sure? We got your Back!</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80"
                alt="100% Money Back Guarantee"
                className="w-48"
              />
              <div>
                <h3 className="text-xl font-bold mb-4">Our Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  Get this amazing offer today for just Rs 99, and get a money – back guarantee. Join today, go through our seminar and if you don't like it for any reason, simply send us an email and we'll refund every penny – no questions asked!
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
                  REGISTER NOW AT ₹99/- ONLY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with Answers */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions:</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded-lg cursor-pointer group">
                <summary className="font-medium text-gray-800 list-none flex justify-between items-center">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 transform transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-gray-600 pl-4 border-l-2 border-orange-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors">
            REGISTER NOW AT ₹99/- ONLY
          </button>
          <p className="mt-4 text-sm">Limited seats available!</p>
        </div>
      </section>
    </div>
  );
}

export default App;