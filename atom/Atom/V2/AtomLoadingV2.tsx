export default function AtomLoadingV2({
  className = "",
  customClassName = "",
  style,
  customStyle,
  divNumberV2,
  children,
}: {
  className?: string;
  customClassName?: string;
  style?: any;
  customStyle?: any;
  divNumberV2?: string;
  children?: any;
}) {
  return (
    <div
      className={`animate-pulse bg-slate-200 ${customClassName}} ${className}`}
      style={{ minWidth: "20px", minHeight: "10px", ...customStyle, ...style }}
      div-number-v2={divNumberV2}>
      {children}
    </div>
  );
}
