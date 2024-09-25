import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="text-center mx-auto p-4">
      <title>Home</title>
      <h1 class="neon-text text-4xl font-bold mb-8">
        AgentFlow
      </h1>
      <p class="mb-8 text-xl">
        Welcome to your powerful and easy-to-use developer tool!
      </p>
      <Counter />
    </main>
  );
}
