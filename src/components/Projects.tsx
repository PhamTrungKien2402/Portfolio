const projects = [
  {
    number: '01',
    title: 'Hệ thống bán kính mắt (Eyewear Management System)',
    description:
      'Dự án môn SWP391 kì 5 hệ thống bán mắt kính online. Tôi đã tham gia vào thiết kế và phát triển, giải quyết vấn được vấn đề thời gian, giúp dễ dàng lựa chọn sản phẩm cho khách hàng.',
    tags: ['React', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/Natsuto213/eyewear-management-frontend',
    live: 'https://eyewear-management-frontend.vercel.app',
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs text-muted tracking-[0.15em] uppercase mb-4">03 — Projects</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Dự án
            <br />
            <span className="italic">đã thực hiện</span>
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <div
              key={project.number}
              className="group border-t border-border py-10 grid md:grid-cols-[80px_1fr_auto] gap-6 items-start hover:bg-white/50 transition-colors -mx-6 px-6"
            >
              {/* Number */}
              <span className="text-sm text-muted font-mono pt-1">{project.number}</span>

              {/* Content */}
              <div>
                <h3 className="font-display text-2xl text-ink mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 max-w-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-ink transition-colors tracking-wide uppercase"
                >
                  GitHub ↗
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted hover:text-accent transition-colors tracking-wide uppercase"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 border-t border-border pt-8">
          <a
            href="https://github.com/Natsuto213/eyewear-management-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-ink transition-colors inline-flex items-center gap-2"
          >
            Xem thêm trên GitHub
            <span className="text-accent">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
