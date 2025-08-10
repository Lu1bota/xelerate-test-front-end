import scss from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${scss.container} ${className || ""}`}>{children}</div>
  );
}
