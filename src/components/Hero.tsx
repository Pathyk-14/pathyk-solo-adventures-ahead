
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Explore the 
                <span className="text-orange-600 block">unexplored</span>
                <span className="text-amber-600">solo</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Discover offbeat destinations safely with verified local guides, 
                trusted travel buddies, and solo-friendly stays across India
              </p>
            </div>

            {/* Signup Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-orange-100">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
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
                    className="h-12 text-lg border-gray-200 focus:border-orange-400"
                  />
                  
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 text-lg border-gray-200 focus:border-orange-400"
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Join the Waitlist & Get Travel Credit
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8 animate-scale-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Welcome to the journey!
                  </h3>
                  <p className="text-gray-600">
                    We'll notify you when Pathyk launches
                  </p>
                </div>
              )}
            </div>

            {/* Referral Line */}
            <div className="text-center p-4 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl">
              <p className="text-gray-700">
                <span className="font-semibold">Invite 3 friends</span> and unlock early access to 
                <span className="font-semibold text-orange-700"> Pathyk Circles</span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt="Solo traveler on mountain trail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-amber-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why solo travelers choose Pathyk
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for safe, meaningful solo adventures
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Match with Travel Buddies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with like-minded solo travelers. Share journeys, split costs, and create memories together while staying safe.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Verified Local Guides
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discover hidden gems with background-verified local guides who know the authentic stories and safe paths.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-orange-400">Path</span>yk
            </h3>
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
