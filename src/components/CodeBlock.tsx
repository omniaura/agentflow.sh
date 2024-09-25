import { CgCheck, CgCopy } from "solid-icons/cg";
import { createSignal, JSX } from "solid-js";
import toast from "solid-toast";

export default function CodeBlock(props: { code: string, language: string, notice?: JSX.Element }) {
    const [isCopied, setIsCopied] = createSignal(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(props.code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 500);
        toast.success("Copied!");
    };

    return (
        <div class="flex flex-row items-center justify-center">
            <pre class="code-block font-code">
                <code class={`language-${props.language}`}>
                    {props.code}
                </code>
                {<hr class="my-4" />}
                {props.notice}
            </pre>
            <button
                onClick={copyToClipboard}
                class="button-primary px-4 py-2 rounded-full ml-4">
                {isCopied() ? <CgCheck /> : <CgCopy />}
            </button>
        </div>
    );
}
