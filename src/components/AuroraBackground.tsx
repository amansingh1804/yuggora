import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
  className?: string;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
  showRadialGradient = false,
  ...props
}) => {
  return (
    <div
      className={`relative w-full bg-white text-neutral-900 overflow-x-hidden ${className}`}
      {...props}
    >
      {/* Exact Aceternity Aurora Light-Mode Engine */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`aurora-layer pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform ${
            showRadialGradient ? "aurora-mask" : ""
          }`}
        />
      </div>

      {/* Page Content Layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
