import clsx from "clsx";
import { ReactNode } from "react";

export function SectionHeading({
  number,
  children,
  className,
  ...props
}: {
  number: string;
  children?: ReactNode | ReactNode[];
  className?: string;
  props?: any;
}) {
  return (
    <h2
      className={clsx(
        className,
        "inline-flex items-center rounded-full px-4 py-1 text-primary ring-1 ring-inset ring-primary"
      )}
      {...props}
    >
      <span className="text-[16px] font-medium tracking-tight">{children}</span>
    </h2>
  );
}
