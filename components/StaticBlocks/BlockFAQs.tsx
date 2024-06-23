export const BlockFAQs = () => {
  return (
    <section
      className="ownContainer ownGrid md:my-[92px] my-[60px] gap-y-[32px]"
      id="FAQs"
    >
      <div className="col-span-full flex flex-col gap-y-[24px] text-gray100Primary">
        <h2 className=" text-[32px] leading-[38.4px] font-semibold">FAQs</h2>
        <p className="col-span-full text-[16px] font-normal leading-[1.3em]">
          Answers to some of the most common questions.
        </p> 
      </div>
      <div className="md:col-span-6 col-span-full flex flex-col gap-y-[32px] leading-[1.3em]">
        <div>
          <h3 className="text-[22px] font-semibold mb-[16px]">
            How to book the playground?
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`Booking a court or playground is now incredibly simple. Select your preferred location, activity, date, and time, pay directly on the website, and you’re ready to go! Have fun!`}
          </p>
        </div>
        <div>
          <h3 className="text-gray100Primary text-[22px] font-semibold mb-[16px]">
            Is there a fee for booking through your platform?
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`No, we do not charge any additional fees for booking through our platform. You only pay for the usage of the sports ground as per the club's rates.`}
          </p>
        </div>
        <div>
          <h3 className="text-gray100Primary text-[22px] font-semibold mb-[16px]">
            What types of sports grounds can I book?
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`Our platform offers a wide range of sports grounds, including tennis courts, football fields, basketball courts, and more.`}
          </p>
        </div>
        <div>
          <h3 className="text-gray100Primary text-[22px] font-semibold mb-[16px]">
            How far in advance can I book a sports ground?
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`Our platform offers a wide range of sports grounds, including tennis courts, football fields, basketball courts, and more.`}
          </p>
        </div>
        <div>
          <h3 className="text-gray100Primary text-[22px] font-semibold mb-[16px]">
            Can I book multiple time slots in one transaction?
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`Yes, our platform allows you to book multiple time slots for different sports grounds in a single transaction for added convenience.`}
          </p>
        </div>
        <div>
          <h3 className="text-gray100Primary text-[22px] font-semibold mb-[16px]">
            How do I know if my booking is confirmed?
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`Once you complete the booking process and payment, you will receive a confirmation email and/or notification on our platform, indicating that your booking is confirmed.`}
          </p>
        </div>
      </div>
    </section>
  );
};
