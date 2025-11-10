import React from 'react';
import CircularText from '../components/CircularText';
import AnimateOnScroll from '../components/AnimateOnScroll';

const menuData = {
  coldCoffees: [
    { name: 'Freddo espresso', price: 'From 2.70€', description: 'The intensity of espresso in a refreshing, velvety version, perfect for a boost.' },
    { name: 'Freddo cappuccino', price: 'From 3.00€', description: 'Iced espresso with cold frothed milk. The European version of cold coffee, cooling you down and waking you up with every sip.' },
    { name: 'Iced latte', price: 'From 3.00€', description: 'Frothed milk, espresso, and ice combine to create a refreshing drink for any time of day.' },
    { name: 'Iced latte caramel', price: 'From 3.80€' },
    { name: 'Iced Americano', price: 'From 2.70€', description: 'What happens when an espresso is combined with cold water and ice? Iced Americano. Pure, bold coffee flavor without anything else, not even milk.' },
    { name: 'Iced mocha', price: 'From 3.50€', description: 'The rich flavor of coffee blends with the sweetness of chocolate, creating a delightful combination. It can be served hot or cold, with or without whipped cream, and it\'s always equally wonderful.' },
    { name: 'Iced white mocha', price: 'From 3.50€', description: 'The rich flavor of coffee blends with the sweetness of chocolate, creating a delightful combination. It can be served hot or cold, with or without whipped cream, and it\'s always equally wonderful.' },
    { name: 'Frappe', price: 'From 2.20€', description: 'Of Greek origin and globally recognized! Frappe means relaxation, it means summer, it means knowing how to enjoy life.' },
  ],
  hotCoffees: [
    { name: 'Espresso', price: 'From 1.60€', description: 'A strong & rich coffee, full of intensity & aroma.' },
    { name: 'Cappuccino', price: 'From 3.30€', description: 'A strong espresso with rich, velvety steamed milk, creating a classic combination of flavor & texture.' },
    { name: 'Espresso lungo', price: 'From 1.50€', description: 'A strong & rich coffee, full of intensity & aroma.' },
    { name: 'Espresso americano', price: 'From 2.70€', description: 'A strong espresso with a smooth taste, diluted with hot water.' },
    { name: 'Latte', price: 'From 3.30€', description: 'Never too late for a latte. Enjoy your favorite creamy espresso with warm frothy milk.' },
    { name: 'Caramel latte', price: 'From 3.80€', description: 'Never too late for a latte. Enjoy your favorite creamy espresso with warm frothy milk.' },
    { name: 'Cypriot coffee', price: 'From 1.40€', description: 'A strong, aromatic coffee that will wake you up or give you a boost, depending on the time you enjoy it. Don’t forget to have a glass of cold water by your side!' },
  ],
  beverages: [
    { name: 'Chocolate', price: 'From 3.20€', description: 'Chocolate is the answer, whatever the question. Enjoy it any time of the day or night, it\'s chocolate, it has no do\'s and don\'ts.' },
    { name: 'White chocolate', price: 'From 3.20€', description: 'Chocolate is the answer, whatever the question. Enjoy it any time of the day or night, it\'s chocolate, it has no do\'s and don\'ts.' },
    { name: 'Tea', price: 'From 2.10€', description: 'Relax, drink your favorite herbal tea and rejuvenate both body and mind.' },
    { name: 'Ice matcha latte', price: 'From 3.50€' },
    { name: 'Matcha latte', price: 'From 3.50€' },
  ],
  chinos: [
    { name: 'Milkshake chocolate', price: '4.50€', description: 'Milkshake, or in other words, \'ice cream you can drink in a glass.\' The synonym of summer comes to your door, bringing along a bit of that carefree vacation vibe, all year long.' },
    { name: 'Milkshake vanilla', price: '4.50€', description: 'Milkshake, or in other words, \'ice cream you can drink in a glass.\' The synonym of summer comes to your door, bringing along a bit of that carefree vacation vibe, all year long.' },
    { name: 'Milkshake strawberry', price: '4.50€', description: 'Milkshake, or in other words, \'ice cream you can drink in a glass.\' The synonym of summer comes to your door, bringing along a bit of that carefree vacation vibe, all year long.' },
    { name: 'Frapuchino 16oz', price: 'From 3.50€', description: 'Frappuccino means relaxation, it means summer, it means knowing how to enjoy.' },
    { name: 'Frapuchino caramel', price: 'From 4.00€' },
  ],
  smoothies: [
    { name: 'Granita strawberry', price: '3.50€', description: 'Αναζητάς κάτι δροσερό, φρουτώδες και αναζωογονητικό; Μην ψάχνεις άλλο, παράγγειλε γρανίτα στην αγαπημένη σου γεύση και απόλαυσε κάθε γουλιά!' },
    { name: 'Granita lemon', price: '3.50€', description: 'Looking for something cool, fruity, and refreshing? Look no further, order a granita in your favorite flavor and enjoy every sip!' },
    { name: 'Smoothie mango', price: '3.90€', description: 'If it’s green, it’s healthy; if it’s pink, it’s like ice cream! Use this as your guide and enjoy nutritious and refreshing smoothies!' },
    { name: 'Smoothie strawberry', price: '3.90€', description: 'Αν είναι πράσινο είναι υγιεινό, αν είναι ροζ, είναι σαν παγωτό! Έχε αυτό σαν οδηγό και απόλαυσε θρεπτικά και δροσιστικά smoothies.' },
  ],
  pastries: [
    { name: 'Sausage pie', price: '2.60€', description: 'Crispy phyllo and a rich sausage filling. Perfect for a snack, lunch, or appetizer, the sausage pie knows how to impress.' },
    { name: 'Triangle cheese pie', price: '2.60€', description: 'Say cheeeeeese! Smile, a delicious cheese pie is on its way to your door. Order the tastiest meal/snack of the day.' },
    { name: 'Olive pie', price: '2.60€', description: 'Εδώ η ελιά πρωταγωνιστεί και το αποτέλεσμα είναι να θες πάντα λίγο ακόμα! Τραγανή, αλμυρή και γεμάτη μεσογειακή γεύση, είναι η τέλεια πίτα που δικαιολογημένα, θες πάντα ολόκληρη.' },
    { name: 'Croissant almond', price: '2.50€' },
  ],
  sandwiches: [
    { name: 'Special', price: '5.40€' },
    { name: 'Lountza halloumi', price: '5.00€' },
  ],
  softDrinks: [
    { name: 'Coca-Cola 330ml', price: '1.80€', description: 'The classic, unique taste you love! Refreshing, delicious, always the best choice!' },
    { name: 'Coca-Cola zero 330ml', price: '1.80€', description: 'The authentic Coca-Cola taste, without sugar! Refreshing, beloved, absolutely delightful!' },
    { name: 'Sprite 330ml', price: '1.80€', description: 'Incredible freshness with a unique lemon-lime taste! Boost your mood with every sip!' },
    { name: 'Sprite zero 330ml', price: '1.80€', description: 'Ultimate lemon-lime freshness, without sugar! Instant revitalization in every sip!' },
    { name: 'Fanta 330ml', price: '1.80€', description: 'An explosion of orange flavor, full of freshness and joy! Pure refreshment in every sip!' },
    { name: 'Keanita 250ml', price: '1.50€' },
    { name: 'Water 500ml', price: '0.69€', description: 'Pure, natural, essential! The hydration you need at any time of the day!' },
    { name: 'Water 1lt', price: '1.20€', description: 'Pure, natural, essential! The hydration you need at any time of the day!' },
    { name: 'Red Bull 250ml', price: '2.50€', description: 'Red Bull Energy Drink is valued internationally by top athletes, students, and professionals in demanding fields, as well as during long periods of driving.' },
    { name: 'Shark 250ml', price: '2.50€', description: 'SHARK is a quality Energy Drink. SHARK Energy Drink is a lifestyle product. SHARK Energy Drink is an inspirational product – one which consumers want to buy and be seen with. SHARK Energy Drink is a stimulation non-alacoholic beverage.' },
    { name: 'Ice tea peach 330ml', price: '1.80€', description: 'Fruity delight with natural refreshment! Perfect for any time of day!' },
    { name: 'Ice tea lemon 330ml', price: '1.80€', description: 'Fruity delight with natural refreshment! Perfect for any time of day!' },
  ],
};

const MenuItem: React.FC<{ name: string; price: string; description?: string }> = ({ name, price, description }) => (
  <div className="py-4 border-b border-gray-200 last:border-b-0">
    <div className="flex justify-between items-baseline">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <span className="text-lg font-medium text-gray-700">{price}</span>
    </div>
    {description && <p className="text-gray-600 mt-1 text-sm">{description}</p>}
  </div>
);

const MenuCategory: React.FC<{ title: string; items: { name: string; price: string; description?: string }[] }> = ({ title, items }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-serif font-bold mb-6 text-center text-noe-yellow">{title}</h2>
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  </div>
);

const MenuPage: React.FC = () => {
  const categories = [
    { title: "Cold Coffees", items: menuData.coldCoffees },
    { title: "Hot Coffees", items: menuData.hotCoffees },
    { title: "Cold & Hot Beverages", items: menuData.beverages },
    { title: "Chinos", items: menuData.chinos },
    { title: "Smoothies & Granitas", items: menuData.smoothies },
    { title: "Pastries", items: menuData.pastries },
    { title: "Hot Sandwiches", items: menuData.sandwiches },
    { title: "Soft Drinks", items: menuData.softDrinks },
  ];

  return (
    <div className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 flex justify-center">
            <CircularText
                text="* NOE COFFEE BAR * FRESHLY BREWED "
                spinDuration={30}
                onHover="slowDown"
            >
                <div className="text-center">
                    <h1 className="text-5xl font-serif font-bold text-noe-dark leading-none">Our</h1>
                    <h1 className="text-5xl font-serif font-bold text-noe-dark leading-none">Menu</h1>
                </div>
            </CircularText>
        </div>
        {categories.map((category, index) => (
            <AnimateOnScroll key={category.title} delay={index * 0.1}>
                <MenuCategory title={category.title} items={category.items} />
            </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;