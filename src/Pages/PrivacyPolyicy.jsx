const PrivacyPolicy = () => {
  return (
      <section className="py-8  lg:py-0 lg:my-32 px-4 lg:px-0 mx-auto max-w-screen-md ">
        <div className="privacyheading">
          <h6 className="text-[50px] font-bold mb-4 text-white">Privacy Policy</h6>
        </div>
        <div className="privacycontent">
          <div className="leading-8 font-[400] text-[18px] flex flex-col gap-4">
            <p>
              Welcome to BrittoSoft.com! This Privacy Policy explains how we
              collect, use, and disclose your personal information when you use
              our services. We are committed to protecting your privacy and ensuring that
              your personal information is handled securely. Please read this policy carefully 
              to understand how we manage your data.
            </p>
            <ol className="privacypolicylist flex flex-col gap-4">
              <li><b className="text-lg">Information We Collect:</b></li>
              <li className="flex flex-col gap-2">
                <b className="text-lg">a. Personal Information:</b>
                When you use BrittoSoft.com, we may collect personal information
                that you provide voluntarily, such as your name, email address,
                and contact details. This may also include information provided
                when you contact us for support, or engage with surveys or promotions.
              </li>
              <li className="flex flex-col gap-2">
                <b className="text-lg">b. Usage Information:</b>
                <p>
                  We may collect non-personal information about your usage of
                  BrittoSoft.com, such as device information, IP address, browser
                  type, and operating system.
                </p>
                <p>
                  Additionally, we may collect data on how you interact with
                  our services, including the features you use and the settings
                  you configure.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <b className="text-lg">c. Legal Compliance:</b>
                <p>
                  We may use or disclose your information to comply with
                  applicable laws, regulations, or legal processes.
                </p>
                <b className="text-lg">Data Retention:</b>
                <p>
                  We retain your personal information only as long as necessary
                  to fulfill the purposes outlined in this Privacy Policy, unless
                  a longer retention period is required by law.
                </p>
                <b className="text-lg">Data Security:</b>
                <p>
                  We implement appropriate technical and organizational measures
                  to safeguard your personal information from unauthorized access,
                  disclosure, alteration, or destruction.
                </p>
                <b className="text-lg">Third-Party Services and Links:</b>
                <p>
                  BrittoSoft.com may contain links to third-party websites, services,
                  or advertisements. We are not responsible for the privacy practices
                  or content of these third parties. We encourage you to review their
                  privacy policies before providing any personal information.
                </p>
                <b className="text-lg">{"Children's"} Privacy:</b>
                <p>
                  BrittoSoft.com is not intended for children under the age of 13.
                  We do not knowingly collect personal information from
                  children. If we become aware of any personal information
                  collected from a child, we will take steps to delete it.
                </p>
                <b className="text-lg">Updates to Privacy Policy:</b>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. We will notify
                  you of any material updates by posting the revised policy on
                  our website or through other communication channels.
                </p>
                <b className="text-lg">Contact Us:</b>
                <p>
                  If you have any questions or concerns regarding this Privacy
                  Policy or our privacy practices, please contact us at 
                  <a href="mailto:info@brittosoft.com"> info@brittosoft.com</a>
                </p>
                <p>
                  By using BrittoSoft.com, you consent to the collection, use, and
                  disclosure of your personal information as described in this
                  Privacy Policy.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
  );
};

export default PrivacyPolicy;
