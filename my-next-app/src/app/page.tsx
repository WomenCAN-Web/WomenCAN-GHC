import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>WomenCan-GHC Donation Page</title>
        <meta name="description" content="Support Women in Technology" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>

      <main className="min-h-screen text-white bg-gradient-to-b from-black to-purple-900">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-5">
          <h1 className="text-2xl font-bold">WomenCAN/GHC</h1>
          <div>
            <a href="#about" className="px-4 py-2 text-white">About Us</a>
            <a href="#events" className="px-4 py-2 text-white">Events</a>
            <a href="#gallery" className="px-4 py-2 text-white">Gallery</a>
          </div>
        </nav>

        {/* About Us Section */}
        <section id="about" className="p-5">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p>Empowering Women in Technology.</p>
        </section>

        {/* Events Section */}
        <section id="events" className="p-5">
          <h2 className="text-3xl font-bold">Events</h2>
          <p>Join our tech events and workshops.</p>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="p-5">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <p>Check out our latest events and activities.</p>
        </section>

        {/* Donation Button */}
        <div className="flex justify-center p-5">
          <a
            href="YOUR_DONATION_WEBSITE_URL" // Replace with your actual donation page URL
            className="px-4 py-2 font-bold text-black bg-purple-300 rounded hover:bg-purple-400 focus:outline-none focus:shadow-outline"
          >
            Donate Now
          </a>
        </div>

        {/* Contributors Gallery */}
        <section id="contributors" className="p-5 text-white">
  <h2 className="text-3xl font-bold">Contributors Gallery</h2>
  <p>Showcasing our valued contributors.</p>
  <div className="contributor-container">
    <div className="rounded-full">
      <Image src="/images/test.jpg" alt="Contributor Name" width={150} height={150} />
    </div>
    <div className="contributor-name">Contributor Name</div>
  </div>
</section>

        {/* Footer Section */}
        <footer className="w-full p-4 bg-black mt-5">
          <div className="text-center text-gray-500">
            <p>Email: info@womencan-ghc.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </footer>
      </main>
    </>
  );
}
