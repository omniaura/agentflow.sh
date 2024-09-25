import { A } from "@solidjs/router"

export default function Nav() {
  return (
    <nav class="retro-future-box p-4 mb-8">
      <ul class="flex justify-center space-x-4">
        <li><A href="/" class="neon-text text-xl hover:text-[rgb(var(--accent-pink))]">Home</A></li>
        <li><A href="/about" class="neon-text text-xl hover:text-[rgb(var(--accent-pink))]">About</A></li>
      </ul>
    </nav>
  )
}
