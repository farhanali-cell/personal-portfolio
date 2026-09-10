export default function DeviceMockup({ desktop, tablet, mobile, alt }) {
  return (
    <div className="relative w-full h-56 flex items-center justify-center overflow-hidden">
      {/* Desktop — back layer */}
      <div
        className="absolute left-4 top-4 w-[78%] rounded-lg overflow-hidden
                       border border-white/10 shadow-2xl bg-[#0d0d0d]"
      >
        {/* browser bar */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/4 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <img
          src={desktop}
          alt={`${alt} desktop view`}
          className="w-full h-28 object-cover object-top"
        />
      </div>

      {/* Tablet — middle layer */}
      <div
        className="absolute right-2 bottom-1 w-[30%] rounded-xl overflow-hidden
                       border-2 border-white/15 shadow-2xl bg-[#0d0d0d]"
      >
        <img
          src={tablet}
          alt={`${alt} tablet view`}
          className="w-full h-32 object-cover object-top"
        />
      </div>

      {/* Mobile — front layer */}
      <div
        className="absolute right-[26%] -bottom-1.5 w-[16%] rounded-2xl overflow-hidden
                       border-2 border-white/25 shadow-2xl bg-[#0d0d0d]"
      >
        <img
          src={mobile}
          alt={`${alt} mobile view`}
          className="w-full h-44 object-cover object-top"
        />
      </div>
    </div>
  );
}
