export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Pham Trung Kien
        </p>
        <p className="text-xs text-muted">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
