"use client";

import { useRange } from "react-instantsearch";
import dayjs from "dayjs";

export default function CustomFacetDate({
  attribute,
  title,
}: {
  attribute: string;
  title?: string;
}) {
  const { start, range, canRefine, refine } = useRange({ attribute });

  const handleChange = (e: any) => {
    e.preventDefault();
    const from = e.target.elements.from.value;
    const to = e.target.elements.to.value;

    const fromUnix = from ? dayjs(from).unix() : undefined;
    const toUnix = to ? dayjs(to).unix() : undefined;

    refine([fromUnix, toUnix]);
  };

  return canRefine ? (
    <form onSubmit={handleChange} className="space-y-2">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <div className="flex flex-col items-center gap-2">
        <input type="date" name="from" className="border rounded px-2 py-1" />
        <span>→</span>
        <input type="date" name="to" className="border rounded px-2 py-1" />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          OK
        </button>
      </div>
    </form>
  ) : null;
}
