import { useState } from "react";
import { Heart, MessageCircle, Eye, Truck, Star, Phone, Instagram, Facebook, Shield, Award, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const whatsappNumber = "919380556214";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const sendWhatsAppMessage = (message: string) => {
    window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Enhanced Header with Logo */}
      <header className="bg-white shadow-lg border-b-4 border-pink-300">
        <div className="max-w-6xl mx-auto py-6 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-8 w-8 text-white fill-current" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Bubbli.in</h1>
                <p className="text-pink-600 font-medium">Personalized Puzzle Gifts</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-green-600">
                <Shield className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">100% Safe</span>
              </div>
              <div className="flex items-center text-blue-600">
                <Award className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center text-purple-600">
                <Users className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">500+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-pink-100 to-pink-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            Capture Your Memories
            <span className="block text-pink-600">in a Puzzle!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your favorite photos into beautiful personalized puzzles. 
            Perfect gifts that bring joy piece by piece.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 mb-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1 text-green-500" />
              <span>Child Safe Materials</span>
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1 text-blue-500" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
              <span>5.0 Rating</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => sendWhatsAppMessage("Hi! I'd like to know more about your personalized puzzles 🧩")}
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Order on WhatsApp
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            ✅ Free Preview Before Production | 🚚 Fast Delivery | 💯 100% Satisfaction Guarantee
          </p>
        </div>
      </section>

      {/* Puzzle Shape Selection */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Choose Your Perfect Puzzle Shape
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Heart-Shaped Puzzle */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-pink-200 hover:border-pink-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-32 h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center">
                  <Heart className="h-16 w-16 text-pink-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Heart-Shaped Puzzle</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Perfect for romantic gifts and special occasions
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>• 75 pieces</li>
                  <li>• High-quality cardboard</li>
                  <li>• Glossy finish</li>
                  <li>• Comes with gift box</li>
                </ul>
                <Button 
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg text-lg font-semibold"
                  onClick={() => sendWhatsAppMessage("I'm interested in the Heart-Shaped Puzzle! Can you tell me more about pricing and delivery? 💝")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order Heart Puzzle
                </Button>
              </CardContent>
            </Card>

            {/* Rectangle Puzzle */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-pink-200 hover:border-pink-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-32 h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center">
                  <div className="w-16 h-12 bg-pink-600 rounded-lg"></div>
                </div>
                <CardTitle className="text-2xl text-gray-800">Rectangle Puzzle</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Classic design for any photo or memory
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-600 mb-6 space-y-2">
                  <li>• 100 pieces</li>
                  <li>• Premium quality cardboard</li>
                  <li>• Matte finish</li>
                  <li>• Elegant packaging</li>
                </ul>
                <Button 
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg text-lg font-semibold"
                  onClick={() => sendWhatsAppMessage("I'd like to order a Rectangle Puzzle! What are the dimensions and pricing? 🧩")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order Rectangle Puzzle
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Order - Simplified */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Create Your Puzzle?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Simply send us your photo on WhatsApp and we'll handle everything!
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Send Your Photo</h3>
                <p className="text-gray-600">WhatsApp us your favorite photo</p>
              </div>
              
              <div className="text-4xl text-green-500">→</div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Approve Preview</h3>
                <p className="text-gray-600">We send you a free preview</p>
              </div>
              
              <div className="text-4xl text-blue-500">→</div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Receive Puzzle</h3>
                <p className="text-gray-600">Get your custom puzzle delivered</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-xl rounded-full shadow-lg"
                onClick={() => sendWhatsAppMessage("Hi! I want to create a personalized puzzle. Here's my photo: [Please attach your photo]")}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Start Your Order Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Send Your Photo</h3>
                <p className="text-gray-600">
                  Upload your favorite photo through WhatsApp or our secure form
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Approve the Preview</h3>
                <p className="text-gray-600">
                  We'll send you a free preview to ensure you love the design
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Get Delivery</h3>
                <p className="text-gray-600">
                  Receive your beautiful personalized puzzle at your doorstep
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  "We ordered a heart-shaped puzzle with our wedding photo for our first anniversary. 
                  The quality was amazing and it made such a thoughtful gift! The preview they sent 
                  was exactly what we received."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-pink-600 font-semibold">R&P</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Raj & Priya</p>
                    <p className="text-gray-600">Wedding Anniversary Gift</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-lg">
                  "I was worried about the safety for my 5-year-old, but the pieces are perfectly 
                  sized and the edges are smooth. She loves putting together her own photo puzzle! 
                  Great quality and child-safe materials."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-pink-600 font-semibold">AM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Anika's Mom</p>
                    <p className="text-gray-600">Child-Safe Puzzle Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="sizes" className="border border-pink-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-pink-600">
                What puzzle sizes are available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pt-2">
                We offer heart-shaped puzzles (approximately 8"x8") and rectangle puzzles (10"x8"). 
                Both sizes are perfect for displaying and framing after completion.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pieces" className="border border-pink-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-pink-600">
                How many pieces does each puzzle have?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pt-2">
                Heart-shaped puzzles have 75 pieces, while rectangle puzzles have 100 pieces. 
                Both are designed to be challenging yet enjoyable for ages 8 and above.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="delivery" className="border border-pink-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-pink-600">
                What's the delivery timeline?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pt-2">
                After photo approval, we typically complete production within 3-5 business days. 
                Delivery takes an additional 2-3 days depending on your location. Rush orders available!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="safety" className="border border-pink-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-pink-600">
                Are the puzzles safe for children?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base pt-2">
                Absolutely! All our puzzles are made with child-safe, non-toxic materials. 
                The pieces are sized appropriately to avoid choking hazards and have smooth, rounded edges.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Bubbli.in</h3>
              <p className="text-gray-300 mb-4">
                Creating beautiful personalized puzzles that capture your most precious memories.
              </p>
              <Button 
                variant="outline" 
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                onClick={() => sendWhatsAppMessage("Hi! I'd like to know more about Bubbli.in puzzles!")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat with Us
              </Button>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <a href={whatsappLink} className="hover:text-green-400 transition-colors">
                    +91 93805 56214
                  </a>
                </p>
                <p>WhatsApp Orders Only</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Bubbli.in. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
