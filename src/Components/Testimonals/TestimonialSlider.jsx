const TestimonialSlider = () => {
  return (
    <div>
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className=""
      >
        <div className="mx-auto max-w-7xl  ">
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2"
          >
    
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl lg:bg-black/30 bg-black border-[1px] border-gray-800  lg:backdrop-blur-sm p-6 shadow-xl shadow-slate-900/10">
               
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-white">
                        As a professional athlete, I rely on high-performance
                        gear for my training. This site offers a great selection
                        of top-notch products.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-white">
                          Leland Kiehn
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt=""
                          className="h-14 w-14 object-cover text-transparent"
                    
                          src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            {/* Comment2------------ */}
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl lg:bg-black/30 bg-black border-[1px] border-gray-800  lg:backdrop-blur-sm p-6 shadow-xl shadow-slate-900/10">
               
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-white">
                        As a professional athlete, I rely on high-performance
                        gear for my training. This site offers a great selection
                        of top-notch products.
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-white">
                          Leland Kiehn
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img
                          alt=""
                          className="h-14 w-14 object-cover text-transparent"
                    
                          src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
