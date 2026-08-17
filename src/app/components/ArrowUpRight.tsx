type ArrowUpRightProps = {
  className?: string;
};

export function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" />
    </svg>
  );
}
