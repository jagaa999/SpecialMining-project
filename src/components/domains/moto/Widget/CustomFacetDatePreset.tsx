"use client";

import { Slider, Radio } from "antd";
import { useRange } from "react-instantsearch";
import dayjs from "dayjs";
import { useMemo, useState } from "react";

const presets = [
  {
    label: "Өнөөдөр",
    value: "today",
    getRange: () => {
      const start = dayjs().startOf("day").unix();
      const end = dayjs().endOf("day").unix();
      return [start, end];
    },
  },
  {
    label: "Сүүлийн 7 хоног",
    value: "7days",
    getRange: () => {
      const start = dayjs().subtract(7, "day").startOf("day").unix();
      const end = dayjs().endOf("day").unix();
      return [start, end];
    },
  },
  {
    label: "Сүүлийн 30 хоног",
    value: "30days",
    getRange: () => {
      const start = dayjs().subtract(30, "day").startOf("day").unix();
      const end = dayjs().endOf("day").unix();
      return [start, end];
    },
  },
  {
    label: "Энэ жил",
    value: "thisyear",
    getRange: () => {
      const start = dayjs().startOf("year").unix();
      const end = dayjs().endOf("year").unix();
      return [start, end];
    },
  },
  { label: "Custom", value: "custom", getRange: () => null }, // Slider ашиглана
];

export default function CustomFacetDatePreset({
  attribute,
  title,
}: {
  attribute: string;
  title?: string;
}) {
  const { start, range, canRefine, refine } = useRange({ attribute });
  const [selectedPreset, setSelectedPreset] = useState("custom");
  const [customRange, setCustomRange] = useState<[number, number]>([
    start[0] || Number(range.min),
    start[1] || Number(range.max),
  ]);

  const formatDate = (ts: number | undefined) =>
    ts ? dayjs.unix(ts).format("YYYY-MM-DD") : "-";

  const marks = useMemo(() => {
    if (!range.min || !range.max) return {};
    return {
      [range.min]: formatDate(range.min),
      [range.max]: formatDate(range.max),
    };
  }, [range.min, range.max]);

  const handlePresetChange = (value: string) => {
    setSelectedPreset(value);
    const preset = presets.find((p) => p.value === value);
    if (preset && preset.getRange()) {
      const [min, max] = preset.getRange()!;
      refine([min, max]);
    }
  };

  const handleSliderChange = (val: [number, number]) => {
    setCustomRange(val);
    if (selectedPreset !== "custom") {
      setSelectedPreset("custom");
    }
  };

  const handleSliderAfterChange = (val: [number, number]) => {
    refine(val);
  };

  if (!canRefine || !range.min || !range.max) return null;

  return (
    <div className="space-y-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      <Radio.Group
        value={selectedPreset}
        onChange={(e) => handlePresetChange(e.target.value)}
        className="flex flex-col gap-2">
        {presets.map((p) => (
          <Radio key={p.value} value={p.value}>
            {p.label}
          </Radio>
        ))}
      </Radio.Group>

      {selectedPreset === "custom" && (
        <Slider
          range
          min={range.min}
          max={range.max}
          value={customRange}
          marks={marks}
          tooltip={{ formatter: formatDate }}
          // onChange={handleSliderChange}
          // onChangeComplete={handleSliderAfterChange}
        />
      )}
    </div>
  );
}
