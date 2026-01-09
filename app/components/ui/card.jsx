export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        w-90
        h-55
        border border-primary-ex-light
        rounded-2xl
        p-4
        flex
        flex-col
        gap-7
        ${className}
      `}
    >
      {children}
    </div>
  );
}
