import { useReveal } from "../hooks/useReveal";

/**
 * Drop-in replacement for [data-reveal] / [data-reveal="fade"] elements.
 * `as` lets you pick the wrapping tag; `variant` selects fade vs default.
 */
export default function Reveal({
  as: Tag = "div",
  variant,
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      data-reveal={variant || "true"}
      className={className}
      style={{ "--reveal-delay": `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
