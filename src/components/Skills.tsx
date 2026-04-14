const skillGroups = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git & GitHub', 'VS Code', 'Figma (cơ bản)', 'REST API', 'Responsive Design'],
  },
  {
    category: 'Đang học',
    skills: ['TypeScript', 'React Query', 'Framer Motion', 'Testing (Jest)'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border bg-ink">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs text-muted tracking-[0.15em] uppercase mb-4">02 — Skills</p>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-tight">
              Kỹ năng &
              <br />
              <span className="italic">công nghệ</span>
            </h2>
          </div>
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="border border-white/10 p-6">
              <h3 className="text-xs text-muted uppercase tracking-widest mb-5">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-paper/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
