import Image from 'next/image';

export default function BuildEruwa() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-widest mb-4 block">Our Community</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Build Eruwa <span className="text-[#2B59C3]">With Us</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you&apos;re an indigene at home or abroad, a development partner, or a concerned supporter, there&apos;s a place for you in Eruwa&apos;s progress story.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Choose how you want to contribute to our community&apos;s sustainable development. Your involvement, no matter how small, creates a ripple effect of positive change.
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative pl-8 pt-8">
                <div className="absolute top-0 left-0 w-full h-full bg-[#2B59C3] rounded-3xl -z-10 transform -translate-x-4 -translate-y-4"></div>
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                        src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop" 
                        alt="Community gathering in Eruwa" 
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
