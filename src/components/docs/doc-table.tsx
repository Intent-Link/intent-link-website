import type { ReactNode } from "react";
import { testIds } from "@/constants/test-ids";

interface DocTableProps {
  children: ReactNode;
}

/** Styled table used inside docs prose. */
const DocTable = ({ children }: DocTableProps) => {
  return (
    <div data-testid={testIds.docTable.root} className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  );
};

export { DocTable };
