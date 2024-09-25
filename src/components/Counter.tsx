import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <div class="retro-future-box p-6 rounded-lg text-center">
      <h2 class="neon-text text-2xl mb-4">Counter</h2>
      <p class="text-3xl mb-4">{count()}</p>
      <button
        class="button-primary px-4 py-2 rounded-full mr-2"
        onClick={() => setCount(count() + 1)}
      >
        Increment
      </button>
      <button
        class="button-primary px-4 py-2 rounded-full"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}
