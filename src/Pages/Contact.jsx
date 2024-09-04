const Contact = () => {
  return (
    <div>
      <section className=" bg-transparent">
        <div className="py-8 lg:py-16 px-4 lg:px-0 mx-auto max-w-screen-md">
          <h6 className="text-center text-white contact-heading">
            Contact With Us
          </h6>
          <p className="mb-8 lg:mb-8  text-center text-gray-400 ">
          Talk with our experts and learn what we could do for you
          </p>
          <form action="#" className="space-y-3 ">
            <div className="grid grid-cols-2 gap-3 ">
              <div>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm  text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5  bg-[#18181B] border-none text-white focus:ring-primary-500  shadow-sm-light"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm  text-lg rounded-lg focus:ring-primary-500 outline-none focus:border-0 block w-full p-2.5  bg-[#18181B] border-none text-white focus:ring-primary-500   shadow-sm-light"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">

              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-lg  rounded-lg shadow-sm focus:ring-primary-500 outline-none  bg-[#18181B] border-none text-white focus:ring-primary-500  focus:border-none"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#594FEE] p-3 rounded-lg"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
