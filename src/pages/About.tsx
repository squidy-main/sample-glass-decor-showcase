
import { Check } from 'lucide-react';

const About = () => {
  // Sample team members
  const team = [
    {
      name: 'Alex Morgan',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=2787',
    },
    {
      name: 'Jordan Taylor',
      role: 'Head of Curation',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=2522',
    },
    {
      name: 'Morgan Zhang',
      role: 'Design Consultant',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=2680',
    },
  ];

  // Values
  const values = [
    {
      title: 'Quality',
      description: 'We select products based on exceptional craftsmanship and attention to detail.',
    },
    {
      title: 'Sustainability',
      description: 'We prioritize products made with sustainable materials and ethical manufacturing processes.',
    },
    {
      title: 'Innovation',
      description: 'We seek out designs that push boundaries while maintaining practicality and beauty.',
    },
    {
      title: 'Accessibility',
      description: 'We believe great design should be available and accessible to everyone.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=2874"
          alt="About Sample" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light tracking-wide">About Sample</h1>
            <p className="mt-6 text-lg max-w-xl mx-auto">
              A design-focused showcase dedicated to modern minimalist home decor
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Sample was founded in 2020 with a simple mission: to showcase exceptional home decor and design objects that embody beauty, simplicity, and quality. What began as a small online platform has grown into a curated showcase of global design talent.
              </p>
              <p>
                Our team of design enthusiasts travels the world to discover emerging designers and iconic pieces that represent the best of contemporary minimalist design. Each product featured on our platform is carefully selected for its craftsmanship, aesthetic value, and innovative approach.
              </p>
              <p>
                While we don't sell products directly, we connect design lovers with authentic pieces through our network of trusted retailers and designers. Our goal is to inspire and educate, creating a community around thoughtful design and intentional living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass p-8 rounded-lg">
                <div className="bg-black h-10 w-10 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-white h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 rounded-full overflow-hidden aspect-square w-48 h-48 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions or want to learn more about a featured product? We'd love to hear from you.
            </p>
            <a 
              href="mailto:hello@sample.com" 
              className="py-3 px-6 border border-black hover:bg-black hover:text-white transition-colors duration-300 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
