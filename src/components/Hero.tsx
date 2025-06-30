
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mountain, Users, Shield, Home } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', { name, email });
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      {/* Navigation Header */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/a3be16ce-2655-43f6-8913-d01e2f9dc81b.png" 
            alt="Pathyk Logo" 
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight font-playful">
                Explore the 
                <span className="text-black block animate-pulse">unexplored</span>
                <span className="text-gray-700 hover:scale-105 transition-transform duration-300 inline-block">solo</span>
              </h1>
              <div className="text-lg md:text-xl font-medium text-gray-800 mb-4 animate-bounce">
                Explore Solo, Experience Together
              </div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Discover offbeat destinations safely with verified local guides, 
                trusted travel buddies, and solo-friendly stays across India
              </p>
            </div>

            {/* Signup Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-playful">
                      Join the Adventure
                    </h3>
                    <p className="text-gray-600">
                      Get early access + ₹500 travel credit
                    </p>
                  </div>
                  
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12 text-lg border-gray-200 focus:border-black focus:ring-black transition-all duration-300 hover:border-gray-400"
                  />
                  
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-lg border-gray-200 focus:border-black focus:ring-black transition-all duration-300 hover:border-gray-400"
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
                  >
                    Join the Waitlist & Get Travel Credit
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8 animate-scale-in">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Mountain className="w-8 h-8 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-playful">
                    Welcome to the journey!
                  </h3>
                  <p className="text-gray-600">
                    We'll notify you when Pathyk launches
                  </p>
                </div>
              )}
            </div>

            {/* Referral Line */}
            <div className="text-center p-4 bg-gradient-to-r from-gray-100 to-slate-100 rounded-xl hover:from-gray-200 hover:to-slate-200 transition-all duration-300 transform hover:scale-105">
              <p className="text-gray-700">
                <span className="font-semibold">Invite 3 friends</span> and unlock early access to 
                <span className="font-semibold text-black"> Pathyk Circles</span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-slate-200 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Solo traveler on mountain trail"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-slate-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gray-300 rounded-full opacity-40 animate-bounce delay-500"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playful">
            Why solo travelers choose Pathyk
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for safe, meaningful solo adventures
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-3">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playful">
              Match with Travel Buddies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with like-minded solo travelers. Share journeys, split costs, and create memories together while staying safe.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-3">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playful">
              Verified Local Guides
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discover hidden gems with background-verified local guides who know the authentic stories and safe paths.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-3">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playful">
              Solo-Friendly Stays
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Book verified accommodations perfect for solo travelers - safe, social, and budget-friendly options.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <img 
              src="/lovable-uploads/a3be16ce-2655-43f6-8913-d01e2f9dc81b.png" 
              alt="Pathyk Logo" 
              className="h-8 w-auto mx-auto mb-4 opacity-80 hover:opacity-100 transition-opacity duration-300 filter invert"
            />
            <p className="text-gray-400">
              Solo travel, safely explored
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Pathyk. Made with ❤️ for solo adventurers in India.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
