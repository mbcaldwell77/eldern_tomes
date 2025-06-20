import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BookOpen, Star, Mail, ExternalLink, Sparkles, Zap } from 'lucide-react'
import logo from './assets/aeldern_tomes_logo_concept.png'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Handle contact form submission
    console.log('Contact form submitted:', { email, message })
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Ældern Tomes" className="h-12 w-12" />
              <h1 className="text-2xl font-bold text-silver">Ældern Tomes</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-green transition-colors">Home</a>
              <a href="#about" className="hover:text-green transition-colors">About</a>
              <a href="#ebay" className="hover:text-green transition-colors">eBay Store</a>
              <a href="#blog" className="hover:text-green transition-colors">Blog</a>
              <a href="#tools" className="hover:text-green transition-colors">Tools</a>
              <a href="#contact" className="hover:text-green transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-silver">
              Collectible Books for the 
              <span className="text-green"> Discerning </span>
              <span className="text-gold">Collector</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Specializing in first edition fantasy and science fiction, Star Wars Legends hardcovers, 
              rare RPG books, and collectible TCG items. Every listing is photographed, described with 
              edition-accurate detail, and shipped within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Our eBay Store
              </Button>
              <Button size="lg" variant="outline" className="border-green text-green hover:bg-green/10">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-center text-silver">About Ældern Tomes</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 text-muted-foreground">
                  Ældern Tomes is an independent online bookstore run by Michael Caldwell, 
                  built on a foundation of careful curation, honest listings, and a deep 
                  understanding of collector needs.
                </p>
                <p className="text-lg mb-6 text-muted-foreground">
                  Operating primarily through eBay, we set ourselves apart with SEO-optimized 
                  titles, condition-verified listings, and a no-stock-photo policy that gives 
                  buyers full confidence in what they're getting.
                </p>
                <p className="text-lg text-muted-foreground">
                  Behind the scenes, we're building something bigger—tools, community features, 
                  and collector resources that will transform how serious collectors discover 
                  and acquire their treasures.
                </p>
              </div>
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-green">Our Specialties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="mr-2 mb-2">Fantasy First Editions</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">Science Fiction Classics</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">Star Wars Legends</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">Rare RPG Books</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">Pokémon Cards</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2">SFBC Hardcovers</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* eBay Store Section */}
      <section id="ebay" className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 text-silver">Our eBay Store</h3>
            <p className="text-lg mb-8 text-muted-foreground">
              Browse our current listings on eBay, where every item is photographed, 
              described with edition-accurate detail, and backed by our commitment to quality.
            </p>
            <Card className="bg-card border-border/50 p-8">
              <div className="flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-gold mr-3" />
                <span className="text-2xl font-bold text-silver">Trusted Seller</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Quick customer service, clear return policies, and a personal touch 
                that's increasingly rare in resale.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Store on eBay
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-center text-silver">Blog & News</h3>
            <p className="text-lg mb-12 text-center text-muted-foreground">
              Updates, thoughts on collecting, and insights from the world of rare books and collectibles.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-green">Coming Soon</CardTitle>
                  <CardDescription>Our blog is currently in development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're preparing a collection of articles about collecting, 
                    market insights, and the stories behind rare finds.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-green">Stay Updated</CardTitle>
                  <CardDescription>Be the first to know</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Subscribe to our newsletter to get notified when we publish 
                    new articles and market updates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Tools Section */}
      <section id="tools" className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 text-silver">Future Tools & Apps</h3>
            <p className="text-lg mb-12 text-muted-foreground">
              We're building innovative tools to revolutionize the collecting experience.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green">
                    <Sparkles className="mr-2 h-5 w-5" />
                    ScryVault
                  </CardTitle>
                  <CardDescription>ISBN Scanner App for Book Resellers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A powerful mobile app that instantly identifies books, provides 
                    market values, and streamlines inventory management for resellers.
                  </p>
                  <Badge variant="outline" className="mt-4 border-gold text-gold">Coming Soon</Badge>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green">
                    <Zap className="mr-2 h-5 w-5" />
                    More Tools
                  </CardTitle>
                  <CardDescription>Collector Resources & Community Features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Additional tools and features are in development to serve the 
                    collecting community with better discovery and management capabilities.
                  </p>
                  <Badge variant="outline" className="mt-4 border-gold text-gold">In Development</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-center text-silver">Contact & Community</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-green">Get in Touch</h4>
                <p className="text-lg mb-6 text-muted-foreground">
                  Have questions about our collection, need help finding a specific item, 
                  or want to discuss potential partnerships? We'd love to hear from you.
                </p>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-6 text-green">Join Our Community</h4>
                <p className="text-lg mb-6 text-muted-foreground">
                  Stay connected with fellow collectors and be the first to know about 
                  new arrivals, tools, and community features.
                </p>
                <Card className="bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-silver">Newsletter Signup</CardTitle>
                    <CardDescription>Get updates on new arrivals and tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input placeholder="Enter your email" className="flex-1" />
                      <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src={logo} alt="Ældern Tomes" className="h-8 w-8" />
              <span className="text-xl font-bold text-silver">Ældern Tomes</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Collectible books for the discerning collector
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Ældern Tomes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

