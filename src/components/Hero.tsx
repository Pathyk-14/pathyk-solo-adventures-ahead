
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Compass, Home, Users, TreeDeciduous } from 'lucide-react';
import DoodleArrow from './DoodleArrow';

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
      {/* Navigation Header */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-start">
          <img 
            src="/lovable-uploads/988dc2b4-7922-4f06-b13a-25c73b433413.png" 
            alt="Pathyk Logo" 
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 leading-tight font-playful">
              Explore Solo.
              <br />
              <span className="text-orange-700 animate-pulse">Experience Together.</span>
            </h1>
          </div>

          {/* Signup Form */}
          <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-200 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 relative">
            <DoodleArrow />
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-14 text-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:border-orange-300 rounded-xl"
                />
                
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 text-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 hover:border-orange-300 rounded-xl"
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 font-playful"
                >
                  Join the Adventure
                </Button>
              </form>
            ) : (
              <div className="text-center py-8 animate-scale-in">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Compass className="w-8 h-8 text-orange-700" />
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

          {/* Call to Action Text */}
          <div className="text-center">
            <p className="text-xl text-amber-800 font-medium font-playful">
              Join now for early access + exclusive travel credits 💸🌍
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-6">
              <span className="text-2xl">🧭</span>
            </div>
            <h3 className="text-sm font-semibold text-amber-900 font-playful leading-tight">
              Curated Offbeat Circuits
            </h3>
          </div>

          {/* Feature 2 */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-6">
              <span className="text-2xl">🏡</span>
            </div>
            <h3 className="text-sm font-semibold text-amber-900 font-playful leading-tight">
              Verified Local Rentals & Hostels
            </h3>
          </div>

          {/* Feature 3 */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-6">
              <span className="text-2xl">👯‍♂️</span>
            </div>
            <h3 className="text-sm font-semibold text-amber-900 font-playful leading-tight">
              Travel Buddy Finder<br />(Pathyk Circles)
            </h3>
          </div>

          {/* Feature 4 */}
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:rotate-6">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-sm font-semibold text-amber-900 font-playful leading-tight">
              Tree Planting Rewards<br />(EarthLine)
            </h3>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-orange-200">
            {/* Solo traveler illustration placeholder */}
            <div className="w-20 h-20 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl animate-bounce">🎒</span>
            </div>
            <blockquote className="text-xl text-amber-900 font-medium mb-4 font-playful italic">
              "This is exactly what solo travel in India needed. Can't wait. ✨"
            </blockquote>
            <p className="text-amber-700 font-semibold">- Solo Explorer</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-12 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <p className="text-2xl font-bold text-amber-100 font-playful mb-2">
              Launching October 2025
            </p>
            <p className="text-amber-200">
              A passport to mindful solo travel
            </p>
          </div>
          <p className="text-amber-300 text-sm">
            © 2024 Pathyk. Made with ❤️ for solo adventurers in India.
          </p>
        </div>
        
        {/* Logo in bottom right */}
        <div className="absolute bottom-4 right-4">
          <img 
            src="/lovable-uploads/988dc2b4-7922-4f06-b13a-25c73b433413.png" 
            alt="Pathyk Logo" 
            className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </footer>
    </div>
  );
};

export default Hero;
