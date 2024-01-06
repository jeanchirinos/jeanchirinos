//@ts-ignore
import confetti from "canvas-confetti";
import personalInfo from "../data/personalInfo.json";
import { useState } from "react";

const { email } = personalInfo;

type Props = {
  emailIcon?: any;
  checkIcon?: any;
};

export function CopyButton(props: Props) {
  const [isCopied, setIsCopied] = useState(false);

  function copy() {
    setIsCopied(true);
    confetti();
    navigator.clipboard.writeText(email);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <button
      onClick={copy}
      className="relative mx-auto flex items-center gap-x-2 overflow-hidden rounded-lg bg-white px-5 py-2 text-black shadow-md shadow-white/50 transition-all hover:bg-zinc-100"
    >
      <div
        className={`${
          isCopied && "opacity-0"
        } flex items-center justify-center gap-x-2`}
      >
        <span>{props.emailIcon}</span>
        <span>{email}</span>
      </div>

      {isCopied && (
        <div className="pointer-events-none absolute inset-0 flex size-full items-center justify-center gap-x-2">
          <span>{props.checkIcon}</span>
          <span>Copiado!</span>
        </div>
      )}
    </button>
  );
}
