import * as React from "react";

type Props = { className?: string } & React.PropsWithChildren;

export const Block: React.FC<Props> = ({ className = "", children }) => (
  <div className={className}>{children}</div>
);
