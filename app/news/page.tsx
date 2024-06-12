import { NewCardBlock } from "@/components/NewCardBlock";
import { BackButton } from "@/components/ui/backButton";

export default function News() {
  const newsCards = [
    {
      title: "Expanded Service to Lviv and Odesa",
      description:
        "We are excited to announce that SportSpace is now available in Lviv and Odesa. Find your perfect spot today!",
      image: "new_1.png",
      date: "10/06/2024",
      text: `We are thrilled to announce the expansion of our services to include the vibrant cities of Lviv and Odesa! This exciting development means that more sports enthusiasts in Ukraine can now easily access and book their favorite sports facilities through our platform. Our goal has always been to provide convenient and efficient booking solutions, and this expansion is a significant step towards achieving that vision. Whether you’re in Lviv, with its rich cultural heritage, or Odesa, known for its beautiful Black Sea coast, you can now enjoy seamless access to a wide range of sports facilities. From tennis courts and soccer fields to swimming pools and fitness centers, our platform offers a diverse selection of venues to cater to all your sporting needs. With our user-friendly interface and real-time booking capabilities, securing a spot has never been easier. We invite all sports lovers in Lviv and Odesa to explore our services and take advantage of the ease and convenience we provide. Stay active, stay healthy, and enjoy your favorite sports with our expanded service. Thank you for your continued support as we strive to bring you the best booking experience possible. We look forward to serving the communities of Lviv and Odesa and helping you stay fit and active!`,
    },
    {
      title: "New Sports Ground Openings in Kyiv",
      description:
        "Stay tuned for updates on the latest sports grounds opening in Kyiv. More options for your favorite activities!",
      image: "new_2.png",
      date: "10/06/2024",
      text: `We are thrilled to announce the expansion of our services to include the vibrant cities of Lviv and Odesa! This exciting development means that more sports enthusiasts in Ukraine can now easily access and book their favorite sports facilities through our platform. Our goal has always been to provide convenient and efficient booking solutions, and this expansion is a significant step towards achieving that vision. Whether you’re in Lviv, with its rich cultural heritage, or Odesa, known for its beautiful Black Sea coast, you can now enjoy seamless access to a wide range of sports facilities. From tennis courts and soccer fields to swimming pools and fitness centers, our platform offers a diverse selection of venues to cater to all your sporting needs. With our user-friendly interface and real-time booking capabilities, securing a spot has never been easier. We invite all sports lovers in Lviv and Odesa to explore our services and take advantage of the ease and convenience we provide. Stay active, stay healthy, and enjoy your favorite sports with our expanded service. Thank you for your continued support as we strive to bring you the best booking experience possible. We look forward to serving the communities of Lviv and Odesa and helping you stay fit and active!`,
    },
    {
      title: "Discounts on Bookings This Summer",
      description:
        "Enjoy special summer discounts on bookings for sports grounds. Book now and save!",
      image: "new_3.png",
      date: "10/06/2024",
      text: `We are thrilled to announce the expansion of our services to include the vibrant cities of Lviv and Odesa! This exciting development means that more sports enthusiasts in Ukraine can now easily access and book their favorite sports facilities through our platform. Our goal has always been to provide convenient and efficient booking solutions, and this expansion is a significant step towards achieving that vision. Whether you’re in Lviv, with its rich cultural heritage, or Odesa, known for its beautiful Black Sea coast, you can now enjoy seamless access to a wide range of sports facilities. From tennis courts and soccer fields to swimming pools and fitness centers, our platform offers a diverse selection of venues to cater to all your sporting needs. With our user-friendly interface and real-time booking capabilities, securing a spot has never been easier. We invite all sports lovers in Lviv and Odesa to explore our services and take advantage of the ease and convenience we provide. Stay active, stay healthy, and enjoy your favorite sports with our expanded service. Thank you for your continued support as we strive to bring you the best booking experience possible. We look forward to serving the communities of Lviv and Odesa and helping you stay fit and active!`,
    },
    {
      title: "Expanded Service to Lviv and Odesa",
      description:
        "We are excited to announce that SportSpace is now available in Lviv and Odesa. Find your perfect spot today!",
      image: "new_4.png",
      date: "10/06/2024",
      text: `We are thrilled to announce the expansion of our services to include the vibrant cities of Lviv and Odesa! This exciting development means that more sports enthusiasts in Ukraine can now easily access and book their favorite sports facilities through our platform. Our goal has always been to provide convenient and efficient booking solutions, and this expansion is a significant step towards achieving that vision. Whether you’re in Lviv, with its rich cultural heritage, or Odesa, known for its beautiful Black Sea coast, you can now enjoy seamless access to a wide range of sports facilities. From tennis courts and soccer fields to swimming pools and fitness centers, our platform offers a diverse selection of venues to cater to all your sporting needs. With our user-friendly interface and real-time booking capabilities, securing a spot has never been easier. We invite all sports lovers in Lviv and Odesa to explore our services and take advantage of the ease and convenience we provide. Stay active, stay healthy, and enjoy your favorite sports with our expanded service. Thank you for your continued support as we strive to bring you the best booking experience possible. We look forward to serving the communities of Lviv and Odesa and helping you stay fit and active!`,
    },
    {
      title: "New Sports Ground Openings in Kyiv",
      description:
        "Stay tuned for updates on the latest sports grounds opening in Kyiv. More options for your favorite activities!",
      image: "new_5.png",
      date: "10/06/2024",
      text: `We are thrilled to announce the expansion of our services to include the vibrant cities of Lviv and Odesa! This exciting development means that more sports enthusiasts in Ukraine can now easily access and book their favorite sports facilities through our platform. Our goal has always been to provide convenient and efficient booking solutions, and this expansion is a significant step towards achieving that vision. Whether you’re in Lviv, with its rich cultural heritage, or Odesa, known for its beautiful Black Sea coast, you can now enjoy seamless access to a wide range of sports facilities. From tennis courts and soccer fields to swimming pools and fitness centers, our platform offers a diverse selection of venues to cater to all your sporting needs. With our user-friendly interface and real-time booking capabilities, securing a spot has never been easier. We invite all sports lovers in Lviv and Odesa to explore our services and take advantage of the ease and convenience we provide. Stay active, stay healthy, and enjoy your favorite sports with our expanded service. Thank you for your continued support as we strive to bring you the best booking experience possible. We look forward to serving the communities of Lviv and Odesa and helping you stay fit and active!`,
    },
    {
      title: "Discounts on Bookings This Summer",
      description:
        "Enjoy special summer discounts on bookings for sports grounds. Book now and save!",
      image: "new_6.png",
      date: "10/06/2024",
      text: `We are thrilled to announce the expansion of our services to include the vibrant cities of Lviv and Odesa! This exciting development means that more sports enthusiasts in Ukraine can now easily access and book their favorite sports facilities through our platform. Our goal has always been to provide convenient and efficient booking solutions, and this expansion is a significant step towards achieving that vision. Whether you’re in Lviv, with its rich cultural heritage, or Odesa, known for its beautiful Black Sea coast, you can now enjoy seamless access to a wide range of sports facilities. From tennis courts and soccer fields to swimming pools and fitness centers, our platform offers a diverse selection of venues to cater to all your sporting needs. With our user-friendly interface and real-time booking capabilities, securing a spot has never been easier. We invite all sports lovers in Lviv and Odesa to explore our services and take advantage of the ease and convenience we provide. Stay active, stay healthy, and enjoy your favorite sports with our expanded service. Thank you for your continued support as we strive to bring you the best booking experience possible. We look forward to serving the communities of Lviv and Odesa and helping you stay fit and active!`,
    },
  ];

  return (
    <section className="ownContainer ownGrid flex flex-col gap-y-[24px] mt-[24px] mb-[32px] md:mb-[60px]">
      <BackButton className="col-span-full row-span-1" />
      <div className="md:col-start-4 md:col-span-8 col-span-full text-gray100Primary">
        <h2 className="text-[22px] md:text-[32px] leading-[1.2em] font-semibold mb-[24px]">
          News
        </h2>
        <p className="col-span-full text-[16px] font-normal leading-[1.3em]">
          Stay updated with the latest news and activities
        </p>
      </div>
      <div className="ownGrid">
        {newsCards.map((card) => (
          <NewCardBlock
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}
