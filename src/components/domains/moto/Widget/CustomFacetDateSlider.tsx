"use client";

import { Slider } from "antd";
import { useRange } from "react-instantsearch";
import { useMemo } from "react";
import dayjs from "dayjs";

export default function CustomFacetDateSlider({
  attribute,
  title,
}: {
  attribute: string;
  title?: string;
}) {
  const { start, range, canRefine, refine } = useRange({ attribute });

  // Unix timestamp → "YYYY-MM-DD" форматтай болгох
  const formatDate = (timestamp: number | undefined) =>
    timestamp ? dayjs.unix(timestamp).format("YYYY-MM-DD") : "-";

  const marks = useMemo(() => {
    if (!range.min || !range.max) return {};
    return {
      [range.min]: formatDate(range.min),
      [range.max]: formatDate(range.max),
    };
  }, [range.min, range.max]);

  if (!canRefine || !range.min || !range.max) return null;

  return (
    <div className="space-y-2">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <Slider
        range
        min={range.min}
        max={range.max}
        defaultValue={[start[0] || range.min, start[1] || range.max]}
        tooltip={{ formatter: formatDate }}
        onChangeComplete={([min, max]) => refine([min, max])}
        marks={marks}
      />
    </div>
  );
}
