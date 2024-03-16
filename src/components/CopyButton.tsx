import confetti from "canvas-confetti";
import personalInfo from "../data/personalInfo.json";
import { useEffect, useState } from "react";

const { email } = personalInfo;

type Props = {
  copyIcon?: any;
  checkIcon?: any;
};

export function CopyButton(props: Props) {
  const [isCopied, setIsCopied] = useState(false);

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "es",
  //       autoDisplay: false,
  //       includedLanguages: "en,es",
  //       layout:
  //         window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
  //     },
  //     "google_translate_element",
  //   );

  //   const div = document.querySelector(".skiptranslate.goog-te-gadget");

  //   div?.replaceChildren(div.childNodes[0]);
  // };

  // useEffect(() => {
  //   const addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
  //   );
  //   document.body.appendChild(addScript);

  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

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
