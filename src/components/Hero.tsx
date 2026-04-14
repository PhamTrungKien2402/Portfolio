export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full pt-24 pb-16">
        {/* Label */}
        <p className="animate-fade-up delay-100 text-sm text-muted tracking-[0.15em] uppercase mb-6">
          Frontend Developer · FPTU
        </p>

        {/* Name */}
        <h1 className="animate-fade-up delay-200 font-display text-6xl md:text-8xl text-ink leading-[1.05] mb-8">
          Pham
          <br />
          <span className="italic text-accent">Trung Kien</span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up delay-300 text-lg text-muted max-w-xl leading-relaxed mb-12">
          Sinh viên FPTU đang tìm kiếm cơ hội OJT trong lĩnh vực Frontend.
          Đam mê xây dựng giao diện đẹp và trải nghiệm người dùng tốt.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up delay-400 flex items-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-ink text-paper text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-200"
          >
            Xem dự án
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-ink text-ink text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Liên hệ tôi
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up delay-600 mt-24 flex items-center gap-3">
          <div className="w-8 h-px bg-muted" />
          <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
