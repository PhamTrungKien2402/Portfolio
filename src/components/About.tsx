export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-xs text-muted tracking-[0.15em] uppercase mb-4">01 — About</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
            Về bản
            <br />
            <span className="italic">thân tôi</span>
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-5 text-muted leading-relaxed">
          <p>
            Tôi là <span className="text-ink font-medium">Phạm Trung Kiên</span>, sinh viên năm
            3 ngành Kỹ thuật phần mềm tại <span className="text-ink font-medium">FPT University</span>.
            Hiện tại tôi đang chuẩn bị cho kỳ thực tập (OJT) với định hướng Frontend Development.
          </p>
          <p>
            Tôi thích xây dựng những giao diện sạch, hiệu quả và chú trọng vào trải nghiệm người dùng.
            Tôi đang học React, Next.js và Tailwind CSS trong quá trình phát triển kỹ năng.
          </p>
          <p>
            Ngoài code, tôi quan tâm đến UI/UX design và luôn muốn hiểu sâu hơn về
            cách người dùng tương tác với sản phẩm.
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
            {[
              { label: 'Trường', value: 'FPT University' },
              { label: 'Chuyên ngành', value: 'Kỹ thuật phần mềm' },
              { label: 'Vị trí tìm kiếm', value: 'Frontend Intern' },
              { label: 'Địa điểm', value: 'TP. Hồ Chí Minh' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm text-ink font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
