import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

export function RocketIcon({ size = 24, title, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M12 2c3.5 1.5 6 5 6 9.5 0 4.5-3 8.5-6 10.5-3-2-6-6-6-10.5C6 7 8.5 3.5 12 2z"
        fill="currentColor"
      />
    </svg>
  );
}
