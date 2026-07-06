export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto w-full px-6 py-6 border-t border-neutral-800">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Abduli Pütz</p>

        <p>Built with React Vite & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
