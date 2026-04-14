const contacts = [
  { label: 'Email', value: 'kienphamfptu@email.com', href: 'mailto:kienphamfptu@email.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/kien-pham-aa9196403', href: 'https://linkedin.com/in/kien-pham-aa9196403' },
  { label: 'GitHub', value: 'github.com/PhamTrungKien2402', href: 'https://github.com/PhamTrungKien2402' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-xs text-muted tracking-[0.15em] uppercase mb-4">04 — Contact</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-6">
            Liên hệ
            <br />
            <span className="italic">với tôi</span>
          </h2>
          <p className="text-muted leading-relaxed max-w-sm">
            Tôi đang tìm kiếm cơ hội OJT trong lĩnh vực Frontend Development.
            Nếu bạn có cơ hội phù hợp, hãy liên hệ với tôi nhé!
          </p>
        </div>

        {/* Right — Contact Links */}
        <div className="space-y-0">
          {contacts.map((contact, i) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 border-t border-border hover:border-accent transition-colors"
            >
              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">{contact.label}</p>
                <p className="text-sm text-ink group-hover:text-accent transition-colors">
                  {contact.value}
                </p>
              </div>
              <span className="text-muted group-hover:text-accent transition-colors text-lg">
                ↗
              </span>
            </a>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
