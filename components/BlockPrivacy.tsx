export const BlockPrivacy = () => {
  return (
    <section className="ownContainer ownGrid md:mb-[60px] mb-[32px] md:mt-[32px] mt-[24px] md:gap-y-[60px] gap-y-[32px]">
      <div className="md:col-start-3 md:col-span-8 col-span-full text-gray100Primary">
        <h2 className="text-[22px] md:text-[40px] leading-[1.2em] font-semibold text-center mb-[24px]">
          Privacy Policy
        </h2>
        <p className="col-span-full text-[16px] font-normal leading-[1.3em] text-center text-gray50">
          Thank you for choosing our online booking system for sports grounds.
          We are committed to protecting your privacy and personal information.
          This Privacy Policy outlines how we collect, use, disclose, and
          protect your information when you use our service.
        </p>
      </div>
      <div className="md:col-start-3 md:col-span-8 col-span-full flex flex-col gap-y-[24px] md:gap-y-[40px] leading-[1.3em]">
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Information We Collect:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            Personal Information: When you sign up for our service, we may
            collect personal information such as your name, email address, phone
            number,and payment details.<br></br>Usage Information: We may
            collect information about how you use our service, including your
            interactions with the platform and the actions you take.<br></br>
            Device Information: We may collect information about the device you
            use to access our service, such as your IP address, browser type,
            and operating system.
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            How We Use Your Information:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            To provide and maintain our service. To personalize your experience
            and improve our service.<br></br>To communicate with you about your
            bookings, account, and updates to our service.
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Information Sharing:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            We may share your information with third-party service providers who
            assist us in operating our service.<br></br>We may disclose your
            information in response to legal requests or to protect our rights
            and interests.<br></br>We will not sell, rent, or lease your
            personal information to third parties.
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Data Security:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            We implement security measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
            <br></br>Despite our efforts, no method of transmission over the
            internet or electronic storage is completely secure. Therefore, we
            cannot guarantee absolute security.
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Changes to This Privacy Policy:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            We reserve the right to update or change this Privacy Policy at any
            time. Any changes will be effective immediately upon posting on this
            page.
          </p>
        </div>
        <div>
          <p className="text-gray50 text-[16px] font-normal">
            {`If you have any questions or concerns about this Privacy Policy,
            please contact us at `}
            <a href="mailto: sportspace@gmail.com">
              <strong>sportspace@gmail.com.</strong>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
