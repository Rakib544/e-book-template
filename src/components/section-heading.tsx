import clsx from "clsx";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadElement> {}

export function SectionHeading(props: HeadingProps) {
  const { className, children } = props;
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
