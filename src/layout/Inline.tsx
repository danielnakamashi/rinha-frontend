import * as React from "react";

type Props = { className?: string } & React.PropsWithChildren;

export const Inline: React.FC<Props> = ({ className = "", children }) => (
  <span className={className}>{children}</span>
);
