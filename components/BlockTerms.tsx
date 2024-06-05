export const BlockTerms = () => {
  return (
    <section className="ownContainer ownGrid md:mb-[60px] mb-[32px] md:mt-[32px] mt-[24px] md:gap-y-[60px] gap-y-[32px]">
      <div className="md:col-start-3 md:col-span-8 col-span-full text-gray100Primary">
        <h2 className="text-[22px] md:text-[40px] leading-[1.2em] font-semibold text-center mb-[24px]">
          Terms of Use
        </h2>
        <p className="col-span-full text-[16px] font-normal leading-[1.3em] text-center text-gray50">
          Welcome to our online booking system for sports grounds! By accessing
          or using our platform, you agree to comply with these Terms of Use,
          which govern your access to and use of our services.
        </p>
      </div>
      <div className="md:col-start-3 md:col-span-8 col-span-full flex flex-col gap-y-[24px] md:gap-y-[40px] leading-[1.3em]">
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Acceptance of Terms:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`By accessing or using our platform, you agree to be bound by these Terms of Use. If you do not agree to these terms, you may not access or use our services.`}
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Use of Services:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`Our platform provides users with the ability to search for and book sports grounds online. You agree to use our services only for lawful purposes and in accordance with these Terms of Use.`}
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            User Accounts:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`To access certain features of our platform, you may need to create a user account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.`}
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Booking and Payment:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`When booking a sports ground through our platform, you agree to provide accurate and complete information. Payment for bookings may be required, and you agree to pay all charges associated with your bookings in a timely manner.`}
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Limitation of Liability:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`We are not responsible for any damages or losses arising out of or in connection with your use of our platform, including any errors or omissions in any content or materials, or any loss or damage incurred as a result of the use of any content or materials posted, transmitted, or otherwise made available through our platform.`}
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Governing Law:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which SportSpace is based.`}
          </p>
        </div>
        <div>
          <h3 className="text-[16px] md:text-[32px] leading-[1.3em] font-semibold mb-[16px]">
            Changes to Terms:
          </h3>
          <p className="text-gray50 text-[16px] font-normal">
            {`We reserve the right to modify or revise these Terms of Use at any time without prior notice. Your continued use of our platform after any such changes constitutes your acceptance of the new Terms of Use.`}
          </p>
        </div>
        <div>
          <p className="text-gray50 text-[16px] font-normal">
            {`If you have any questions or concerns about these Terms of Use, please contact us at `}
            <a href="mailto: sportspace@gmail.com">
              <strong>sportspace@gmail.com.</strong>
            </a>
            {` Thank you for using our online booking system for sports grounds!`}
          </p>
        </div>
      </div>
    </section>
  );
};
