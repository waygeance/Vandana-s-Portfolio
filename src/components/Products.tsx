import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    name: 'Banana Bread Loaf',
    description: 'Moist, golden-yellow slices of freshly baked banana bread.',
    image: '/cake1.jpeg'
  },
  {
    name: 'Mini Focaccia Breads',
    description: 'Savory Italian flatbreads topped with roasted tomatoes, olives, and fresh rosemary.',
    image: '/cake2.jpg'
  },
  {
    name: 'Doraemon Custom Cake',
    description: 'Light blue frosted birthday cake featuring custom Doraemon decorations and white chocolate stars.',
    image: '/cake3.jpeg'
  },
  {
    name: 'Chocolate Strawberry Truffle',
    description: 'Rich dark chocolate cake topped with fresh, glazed strawberries and gold sprinkles.',
    image: '/cake5.jpeg' 
  },
  {
    name: 'Custom Mermaid Cake',
    description: 'Stunning two-tier pastel cake detailed with edible golden seashells and a mermaid tail.',
    image: '/cake6.jpeg'
  },
  {
    name: 'Fruit & Custard Parfaits',
    description: 'Individual layered dessert cups with creamy yellow custard, fresh fruit, and clear jelly.',
    image: '/cake7.jpg'
  },
  {
    name: 'Panna Cotta & Fruit Jelly',
    description: 'Elegant glass dessert featuring a diagonal layer of vanilla panna cotta and golden fruit jelly.',
    image: '/cake8.jpg'
  },
{
    name: 'Fresh Fruit & Cream Cake',
    description: 'Light sponge cake covered in ribbed white frosting, topped with fresh strawberries, grapes, and a kiwi border.',
    image: '/cake11.jpg'
  },
  {
    name: 'Croquembouche Tower',
    description: 'A spectacular tower of caramel-dipped cream puffs, elegantly wrapped in a delicate spun sugar web.',
    image: '/cake12.jpg'
  },
  {
    name: 'Korean Garlic Cheese Breads',
    description: 'Soft buns scored and generously filled with a rich, savory cream cheese and herb garlic butter mixture.',
    image: '/cake13.jpeg'
  },
  {
    name: 'Savory Bao Buns',
    description: 'Soft and fluffy steamed folded bao buns packed with a delicious, deeply flavored savory filling.',
    image: '/cake15.jpeg'
  },
  {
    name: 'Classic Sliced Loaf',
    description: 'A beautifully baked, golden-brown bread loaf, freshly sliced and ready to serve.',
    image: '/cake16.jpeg'
  },
  {
    name: 'Number 70 Cream Tart Cake',
    description: 'Custom number cake beautifully decorated with piped buttercream rosettes and walnuts.',
    image: '/cake9.jpg'
  },
  {
    name: 'Assorted Bakery Spread',
    description: 'A fresh selection featuring braided Challah bread, chocolate muffins, and fudge brownies.',
    image: '/cake10.jpg'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-[var(--ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl font-bold mb-4 text-[var(--espresso)]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Products
          </h2>
          <div className="w-24 h-1 bg-[var(--terracotta)] mx-auto rounded-full" />
          <p 
            className="text-lg text-[var(--charcoal)]/80 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Discover our range of handcrafted cakes and pastries made with love
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 
                  className="text-xl font-bold mb-2 text-[var(--espresso)] group-hover:text-[var(--terracotta)] transition-colors"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {product.name}
                </h3>
                <p 
                  className="text-[var(--charcoal)]/70 text-sm mb-6 flex-grow leading-relaxed"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {product.description}
                </p>
                
                {/* Order Button */}
                <motion.a
                  href={`https://wa.me/917385048892?text=Hi! I'm interested in ordering: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-[var(--terracotta)] text-white text-center py-2 rounded-lg font-medium hover:bg-[var(--burnt-orange)] transition-colors mt-auto"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Order Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 
              className="text-2xl font-bold mb-4 text-[var(--espresso)]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Don't see what you're looking for?
            </h3>
            <p 
              className="text-[var(--charcoal)]/80 mb-6"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              We specialize in custom cakes and pastries. Contact us to create your perfect dessert!
            </p>
            <motion.a
              href="https://wa.me/917385048892?text=Hi! I'd like to inquire about a custom cake"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[var(--terracotta)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--burnt-orange)] transition-all"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Request Custom Cake
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}