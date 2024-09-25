import { BsDownload } from "solid-icons/bs";
import { CgSoftwareDownload } from "solid-icons/cg";
import { FaBrandsInstalod } from "solid-icons/fa";
import { Toaster } from "solid-toast";
import CodeBlock from "~/components/CodeBlock";
import { installCommand, demoCommand } from "~/components/onboarding/constants";

export default function Home() {
  return (
    <main class="text-center mx-auto p-4">
      <title>Home</title>
      <h1 class="font-heading neon-text text-8xl font-bold mb-8">
        AgentFlow
      </h1>
      <h3 class="font-code mb-6 text-xl neon-text-blue">
        Language Agnostic Code Gen for Prompt Engineers
      </h3>

      <CodeBlock code={installCommand} language="bash" notice={<p class="text-sm text-gray-500">
        Make sure you have <a class="underline text-blue-500" href="https://go.dev/" target="_blank" rel="noopener noreferrer">
          Go</a>.</p>} />
      {/* <CodeBlock code={demoCommand} language="bash" /> */}
      <Toaster position="bottom-center" />
    </main>
  );
}
