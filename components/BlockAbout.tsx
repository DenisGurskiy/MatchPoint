export const BlockAbout = () => {
  return (
    <section className="ownContainer ownGrid mt-[32px] md:mt-[60px] mb-[60px]">
      <div className="md:col-span-5 col-span-full text-gray100Primary">
        <h2 className="text-[22px] md:text-[32px] leading-[1.2em] font-semibold">
          Welcome to SPORTSPACE
        </h2>
      </div>
      <div className="md:col-start-6 col-span-full md:col-end-13 text-gray50 text-[16px] font-normal flex flex-col gap-y-[24px] leading-[1.3em]">
        <p>
          {`Our platform is designed to make it easy and convenient for you to
          find and book sports grounds for your favorite activities. Whether
          you're looking for a football field, tennis court, or any other sports
          facility, we provide a seamless booking experience.`}
        </p>
        <p>
          {`Our mission is to simplify the process of booking sports grounds,
          saving you time and effort. With our user-friendly interface, you can
          quickly search for available venues in your area, compare options, and
          reserve the perfect spot for your game or event.`}
        </p>
        <p>
          {`We believe that access to quality sports facilities should be
          hassle-free. That's why we've partnered with a wide range of sports
          grounds to ensure you have plenty of choices. Our platform also offers
          features such as real-time availability, secure payment options, and
          instant booking confirmations.`}
        </p>
        <p>
          {`Join us in making sports more accessible and enjoyable. Explore, book,
          and play with ease using our comprehensive booking system. Thank you
          for choosing us for your sports ground needs.`}
        </p>
      </div>
    </section>
  );
};
