import { useParallax } from "../hooks/useParallax";

export default function ParallaxImg({ speed = 0.1, className = "", style, ...imgProps }) {
  const ref = useParallax(speed);
  return <img ref={ref} className={className} style={style} {...imgProps} />;
}
