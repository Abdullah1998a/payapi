import illustrationPhoneMockup from "../../assets/images/home/desktop/illustration-phone-mockup.svg";

export default function Header() {
  return (
    <header className="h-[calc(100vh-100px)] flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl text-balance text-[#3a5974] leading-tight mb-8">
          Start building with our APIs for absolutely free.
        </h1>
        <div className="flex flex-col px-6 sm:px-0 gap-4 text-center md:text-left">
          <form className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:items-center sm:mx-auto md:mx-0 relative">
            <input
              type="email"
              name="email"
              className="w-full sm:w-3/4 py-[0.7rem] outline-none border-none px-6 sm:pe-[150px] rounded-full shadow-lg"
              required
              placeholder="Enter email address"
            />
            <button
              type="submit"
              className="btn w-full sm:w-auto static sm:absolute sm:right-0 sm:translate-x-4 md:-translate-x-3/4"
            >
              Schedule a Demo
            </button>
          </form>
          <p className="text-sm px-6">
            Have any questions?{" "}
            <a className="duration-200 hover:underline text-[#3a5974]" href="#">
              Contact Us
            </a>
            .
          </p>
        </div>
      </div>
      <div>
        <img
          className="w-3/4 md:w-11/12 -translate-x-12"
          src={illustrationPhoneMockup}
          alt="illustration phone mockup"
        />
      </div>
    </header>
  );
}
