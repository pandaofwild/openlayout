"use client";

import { useMemo, useState } from "react";
import { useStylePreset, stylePresets } from "@/components/style-preset/StylePresetProvider";
import { cn } from "@/lib/utils";

const paletteLabels = [
  ["base", "Base"],
  ["surface", "Surface"],
  ["text", "Text"],
  ["primary", "Primary"],
  ["accent", "Accent"],
  ["accent2", "Accent 2"],
  ["accent3", "Accent 3"],
] as const;

export function StylePresetPanel() {
  const {
    activePreset,
    customPreset,
    generateCustomPreset,
    palette,
    prompt,
    resetCustomPreset,
    selectedSlug,
    setPrompt,
    setSelectedSlug,
  } = useStylePreset();
  const categories = useMemo(
    () => [...new Set(stylePresets.map((preset) => preset.category))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState(
    categories.includes(activePreset.category) ? activePreset.category : categories[0],
  );
  const visiblePresets = stylePresets.filter((preset) => preset.category === activeCategory);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
      <section className="min-w-0 border border-[#1E1E1E]/20 bg-[#F0EEE8]/78 p-4 md:p-5">
        <div className="flex flex-col gap-3 border-b border-[#1E1E1E]/18 pb-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="raw-label text-[#DB4A2B]">Design format categories</p>
            <h3 className="mt-2 font-display text-4xl font-bold uppercase leading-[0.84] tracking-[-0.05em] text-[#1E1E1E] md:text-5xl">
              Visual format
            </h3>
          </div>
          <div className="text-right text-xs font-bold uppercase tracking-[0.12em] text-[#1E1E1E]/54">
            {activePreset.category}
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                className={cn(
                  "shrink-0 border px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] transition",
                  active
                    ? "border-[#1E1E1E] bg-[#1E1E1E] text-[#E4E2DD]"
                    : "border-[#1E1E1E]/20 bg-[#E4E2DD] text-[#1E1E1E] hover:border-[#1E1E1E]",
                )}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {visiblePresets.map((preset) => {
            const active = !customPreset && selectedSlug === preset.slug;

            return (
              <button
                className={cn(
                  "group min-w-0 border p-3 text-left transition",
                  active
                    ? "border-[#1E1E1E] bg-[#1E1E1E] text-[#E4E2DD]"
                    : "border-[#1E1E1E]/18 bg-[#E4E2DD] text-[#1E1E1E] hover:border-[#1E1E1E]",
                )}
                key={preset.slug}
                onClick={() => {
                  setActiveCategory(preset.category);
                  setSelectedSlug(preset.slug);
                }}
                type="button"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold uppercase tracking-[0.12em]">
                      {preset.nameKo}
                    </p>
                    <p className={cn("mt-1 text-xs", active ? "text-[#E4E2DD]/62" : "text-[#1E1E1E]/58")}>
                      {preset.nameEn}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    {[preset.palette.accent, preset.palette.accent2, preset.palette.accent3].map((color) => (
                      <span
                        className="h-4 w-4 border border-current/20"
                        key={`${preset.slug}-${color}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <p className={cn("mt-3 line-clamp-2 text-xs leading-5", active ? "text-[#E4E2DD]/72" : "text-[#1E1E1E]/64")}>
                  {preset.summary}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <aside className="min-w-0 border border-[#1E1E1E]/20 bg-[#1E1E1E] p-4 text-[#E4E2DD] md:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="raw-label text-[#F8A348]">Prompt mix</p>
            <h3 className="mt-2 font-display text-4xl font-bold uppercase leading-[0.84] tracking-[-0.05em]">
              Palette
            </h3>
          </div>
          {customPreset ? (
            <button
              className="border border-[#E4E2DD]/25 px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#E4E2DD] transition hover:bg-[#E4E2DD] hover:text-[#1E1E1E]"
              onClick={resetCustomPreset}
              type="button"
            >
              Reset
            </button>
          ) : null}
        </div>

        <textarea
          className="mt-5 min-h-32 w-full resize-y border border-[#E4E2DD]/20 bg-[#E4E2DD]/8 p-3 text-sm leading-6 text-[#E4E2DD] outline-none transition placeholder:text-[#E4E2DD]/35 focus:border-[#F8A348]"
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="예: 고급 한옥 호텔, 따뜻한 미니멀, 짙은 먹색과 금색 포인트"
          value={prompt}
        />
        <button
          className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 border border-[#F8A348] bg-[#F8A348] px-4 text-sm font-bold uppercase tracking-[0.1em] text-[#1E1E1E] transition hover:bg-[#E4E2DD]"
          onClick={generateCustomPreset}
          type="button"
        >
          <SparkIcon />
          Generate palette
        </button>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {paletteLabels.map(([key, label]) => {
            const color = palette[key];

            return (
              <div className="border border-[#E4E2DD]/16 bg-[#E4E2DD]/8 p-2" key={key}>
                <span
                  className="block h-12 border border-[#E4E2DD]/18"
                  style={{ backgroundColor: color }}
                />
                <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#E4E2DD]/48">
                  {label}
                </span>
                <span className="mt-1 block font-mono text-xs text-[#E4E2DD]/82">{color}</span>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3 9.8 9.8 3 12l6.8 2.2L12 21l2.2-6.8L21 12l-6.8-2.2L12 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
