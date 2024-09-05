const PrivacyPolyicy = () => {
  return (
      <section className="py-8 lg:py-0 lg:my-16 px-4 lg:px-0 mx-auto max-w-screen-md ">
        <div className="privacyheading">
          <h6 className="text-[50px] font-bold mb-4 text-white">Privacy</h6>
        </div>
        <div className="privacycontent">
          <div className="leading-8 font-[400] text-[18px] flex flex-col gap-4">
            <p>
              Welcome to Revneo.com! This Privacy Policy explains how we
              collect, use, and disclose your personal information when you use
              our application and services. We take your privacy seriously and
              are committed to protecting your information. Please read this
              policy carefully to understand our practices regarding your data.
            </p>
            <ol className="privacypolicylist flex flex-col gap-4">
                <li><b className="text-lg">Information We Collect:</b></li>
              <li className="flex flex-col gap-2">
                <b className="text-lg">a. Personal Information:</b>
                When you use Revneo.com, we may collect personal information
                that you provide voluntarily, such as your name, email address,
                and contact details. We may also collect information you provide
                when you contact our customer support or participate in surveys
                or promotions.
              </li>
              {/*  */}
              <li className="flex flex-col gap-2">
                <b className="text-lg">b. Usage Information:</b>
                <p>
                  We may collect non-personal information about your usage of
                  Revneo.com, such as device information, IP address, browser
                  type, and operating system.
                </p>
                <p>
                  We may also collect data on how you interact with the
                  application, including the features you use and the settings
                  you configure.
                </p>
              </li>
              {/*  */}
              <li className="flex flex-col gap-2">
                <b className="text-lg">c. Legal Compliance:</b>
                <p>
                  We may use or disclose your information to comply with
                  applicable laws, regulations, or legal processes.
                </p>
                <b className="text-lg">Data Retention:</b>
                <p>
                  We will retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
                <b className="text-lg">Data Security:</b>
                <p>
                  We implement appropriate technical and organizational measures
                  to safeguard your personal information from unauthorized
                  access, disclosure, alteration, or destruction.
                </p>
                <b className="text-lg">Third-Party Services and Links:</b>
                <p>
                  Revneo.com may contain links to third-party websites,
                  services, or advertisements. We are not responsible for the
                  privacy practices or content of these third parties. We
                  encourage you to review their privacy policies before
                  providing any personal information.
                </p>
                <b className="text-lg">{"Children's"} Privacy:</b>
                <p>
                  Revneo.com is not intended for children under the age of 13.
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
                  support@revneo.com
                </p>
                <p>
                  By using Revneo.com, you consent to the collection, use, and
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

export default PrivacyPolyicy;
