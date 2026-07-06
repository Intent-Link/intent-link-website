import type { ReactNode } from "react";

interface DocTableProps {
  headers: ReactNode[];
  rows: ReactNode[][];
}

/**
 * Styled table used inside docs prose. Mono uppercase header on the sidebar
 * tint, soft row dividers — matches the prototype's `.doc-table`.
 */
const DocTable = ({ headers, rows }: DocTableProps) => {
  return (
    <div className="my-5 overflow-x-auto">
      <table className="w-full border-collapse text-[13.5px]">
        <thead>
          <tr>
            {headers.map((header, headerIndex) => (
              <th
                key={headerIndex}
                className="border-b border-line bg-sidebar px-3 py-2 text-left font-mono text-[11px] uppercase tracking-[0.03em] text-ink-3"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-line-soft px-3 py-[9px] align-top text-ink-2"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { DocTable };
