import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function ContactUs() {
  return (
    <>
      <NavBar />
      <div className="bg-orange-100 text-center py-10 px-20 lg:py-24 lg:px-32">
        <div className="font-bold text-[60px]">Contact Us</div>
        <div>
          We would love to hear from you! Please fill out the form below to get
          with us.
        </div>
      </div>

      <div className="flex my-10 py-4">
        <div className="px-12">
          <div className="flex *:space-y-2 space-x-4">
            <div>
              First Name <span>*</span>
              <input
                className="border border-black w-full"
                type="text"
                name="FirstName"
                id="FirstName"
              />
            </div>
            <div>
              Last Name <span>*</span>
              <input
                className="border border-black w-full"
                type="text"
                name="LastName"
                id="LastName"
              />
            </div>
          </div>
          <div>
            Email <span>*</span>
            <input
              className="border border-black w-full"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            Message <span>*</span>
            <input
              className="border border-black w-full h-[150px]"
              type="text"
              name="message"
              id="message"
            />
          </div>

          <button
            className="bg-green-600 my-2 py-2  border border-black w-full text-white hover:bg-green-500 hover:text-black"
            type="button"
          >
            Submit
          </button>
        </div>

        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className="border-l border-black px-10 space-y-10">
          <div className="mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>Our Location</div>
            <div>ITC</div>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <div>Email Us</div>
            <div>info@group3coffeeshop.com</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
