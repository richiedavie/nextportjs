"use client";

import {
  createElement,
  useEffect,
  useMemo,
  useState,
  type ElementType,
  type HTMLAttributes,
} from "react";

type TextTypeProps = HTMLAttributes<HTMLElement> & {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
};

export function TextType({
  text,
  as: Component = "span",
  typingSpeed = 52,
  initialDelay = 150,
  pauseDuration = 1800,
  deletingSpeed = 28,
  loop = true,
  className,
  showCursor = true,
  cursorCharacter = "|",
  cursorClassName,
  ...props
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textItems = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    const currentText = textItems[textIndex] ?? "";

    if (!isDeleting && characterIndex < currentText.length) {
      const timeout = window.setTimeout(() => {
        setDisplayedText(currentText.slice(0, characterIndex + 1));
        setCharacterIndex((index) => index + 1);
      }, characterIndex === 0 ? initialDelay : typingSpeed);

      return () => window.clearTimeout(timeout);
    }

    if (!isDeleting && characterIndex === currentText.length) {
      if (!loop && textIndex === textItems.length - 1) return;

      const timeout = window.setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && characterIndex > 0) {
      const timeout = window.setTimeout(() => {
        setCharacterIndex((index) => index - 1);
        setDisplayedText(currentText.slice(0, characterIndex - 1));
      }, deletingSpeed);

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setIsDeleting(false);
      setTextIndex((index) => (index + 1) % textItems.length);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [
    characterIndex,
    deletingSpeed,
    displayedText,
    initialDelay,
    isDeleting,
    loop,
    pauseDuration,
    textIndex,
    textItems,
    typingSpeed,
  ]);

  return createElement(
    Component,
    { ...props, className: `inline-block whitespace-pre-wrap ${className ?? ""}`.trim() },
    <span>{displayedText}</span>,
    showCursor ? (
      <span className={`text-type-cursor ml-1 inline-block ${cursorClassName ?? ""}`.trim()}>
        {cursorCharacter}
      </span>
    ) : null,
  );
}
