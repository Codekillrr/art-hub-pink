import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArtworkCard } from "@/components/artwork-card";
import { ArtistSpotlight } from "@/components/artist-spotlight";
import { AnimatedBackground } from "@/components/animated-background";
import { FeaturedCollection } from "@/components/featured-collection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-pink-950/30 via-transparent to-pink-950/20 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative flex justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container  px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-pink-400 to-pink-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)] leading-tight py-2">
                Digital Art Reimagined
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed max-md:text-balance lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the intersection of creativity and technology through
                our curated collection of digital masterpieces
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
              <Link href="/gallery">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                  Explore Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/artists">
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-500 hover:bg-pink-950"
                >
                  Meet Our Artists
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-[5%] w-24 h-24 rounded-full bg-pink-500/30 blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-[10%] w-32 h-32 rounded-full bg-pink-600/20 blur-xl animate-float-medium"></div>
        <div className="absolute top-1/3 right-[15%] w-16 h-16 rounded-full bg-pink-400/25 blur-xl animate-float-fast"></div>
        <div className="absolute bottom-1/3 left-[15%] w-20 h-20 rounded-full bg-pink-300/20 blur-xl animate-float-medium"></div>
      </section>

      {/* Featured Artworks */}
      <section className="py-12 flex justify-center md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-950/30 to-transparent pointer-events-none"></div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Featured <span className="text-pink-500">Artworks</span>
              </h2>
              <p className="text-gray-400 md:text-xl">
                Discover trending digital masterpieces
              </p>
            </div>
            <Link
              href="/gallery"
              className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
            >
              View all artworks
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ArtworkCard
              title="Neon Dreams"
              artist="Pixel Queen"
              imageSrc="/placeholder.svg?height=400&width=400"
              likes={342}
              href="/artwork/neon-dreams"
            />
            <ArtworkCard
              title="Digital Dystopia"
              artist="CyberArtist"
              imageSrc="/placeholder.svg?height=400&width=400"
              likes={289}
              href="/artwork/digital-dystopia"
            />
            <ArtworkCard
              title="Ethereal Fragments"
              artist="VirtualVisions"
              imageSrc="/placeholder.svg?height=400&width=400"
              likes={421}
              href="/artwork/ethereal-fragments"
            />
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="py-12 flex justify-center md:py-24 bg-gradient-to-b from-black via-pink-950/40 to-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
            Artist <span className="text-pink-500">Spotlight</span>
          </h2>

          <ArtistSpotlight
            name="Maya Digitalis"
            bio="Creating at the intersection of traditional art and digital innovation. Maya's work explores themes of identity in the digital age."
            avatarSrc="/placeholder.svg?height=200&width=200"
            artworks={[
              "/placeholder.svg?height=300&width=300",
              "/placeholder.svg?height=300&width=300",
              "/placeholder.svg?height=300&width=300",
            ]}
          />
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-12 flex justify-center md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Featured <span className="text-pink-500">Collection</span>
            </h2>
            <p className="text-gray-400 md:text-xl max-w-[800px] mx-auto">
              &quot;Cyberpunk Visions&quot; - A curated collection exploring
              neon-lit dystopian futures and digital consciousness
            </p>
          </div>

          <FeaturedCollection />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 flex justify-center md:py-24 bg-pink-950/30 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"></div>
        <div className="container px-4 md:px-6">
          <Card className="bg-black/60 border border-pink-500/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white">
                    Stay in the <span className="text-pink-500">Loop</span>
                  </h3>
                  <p className="text-gray-400">
                    Subscribe to our newsletter for exclusive art drops, artist
                    interviews, and community events
                  </p>
                </div>
                <div className="space-y-4">
                  <form className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 min-w-0 px-4 py-2 bg-black border border-pink-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                      required
                    />
                    <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-gray-500">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
