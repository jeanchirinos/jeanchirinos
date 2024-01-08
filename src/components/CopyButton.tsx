//@ts-ignore
import confetti from "canvas-confetti";
import personalInfo from "../data/personalInfo.json";
import { useState } from "react";

const { email } = personalInfo;

type Props = {
  copyIcon?: any;
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
      className="relative mx-auto flex items-center gap-x-2 overflow-hidden rounded-lg border border-transparent bg-white px-5 py-2 text-black  transition-all hover:border-white hover:bg-transparent hover:text-white"
    >
      <div
        className={`${
          isCopied && "opacity-0"
        } flex items-center justify-center gap-x-2`}
      >
        <span>{email}</span>
        <span>{props.copyIcon}</span>
      </div>

      {isCopied && (
        <div className="pointer-events-none absolute inset-0 flex size-full items-center justify-center gap-x-2">
          <span>Copiado!</span>
          <span>{props.checkIcon}</span>
        </div>
      )}
    </button>
  );
}
