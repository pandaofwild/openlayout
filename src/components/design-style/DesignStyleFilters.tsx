"use client";

import { designStyleCategories, designStyleTags } from "@/data/designStyles";

type Props = {
  category: string;
  onCategoryChange: (category: string) => void;
  onQueryChange: (query: string) => void;
  onReset: () => void;
  onTagChange: (tag: string) => void;
  query: string;
  tag: string;
};

export function DesignStyleFilters({
  category,
  onCategoryChange,
  onQueryChange,
  onReset,
  onTagChange,
  query,
  tag,
}: Props) {
  return (
    <section className="border border-[#1E1E1E]/18 bg-[#D9D6D0] p-4">
      <div className="grid gap-4 md:grid-cols-[1.2fr_1fr_1fr_auto]">
        <label className="block">
          <span className="text-xs font-bold text-[#1E1E1E]/62">검색</span>
          <input
            className="mt-2 h-11 w-full border border-[#1E1E1E]/25 bg-[#E4E2DD] px-3 text-sm outline-none transition focus:border-[#1E1E1E]"
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="스타일명, 분위기, 업종 검색"
            value={query}
          />
        </label>
        <label className="block">
          <span className="text-xs font-bold text-[#1E1E1E]/62">카테고리</span>
          <select
            className="mt-2 h-11 w-full border border-[#1E1E1E]/25 bg-[#E4E2DD] px-3 text-sm outline-none transition focus:border-[#1E1E1E]"
            onChange={(event) => onCategoryChange(event.target.value)}
            value={category}
          >
            <option value="">전체 카테고리</option>
            {designStyleCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-bold text-[#1E1E1E]/62">태그</span>
          <select
            className="mt-2 h-11 w-full border border-[#1E1E1E]/25 bg-[#E4E2DD] px-3 text-sm outline-none transition focus:border-[#1E1E1E]"
            onChange={(event) => onTagChange(event.target.value)}
            value={tag}
          >
            <option value="">전체 태그</option>
            {designStyleTags.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <button
          className="h-11 self-end border border-[#1E1E1E]/25 px-4 text-sm font-bold transition hover:border-[#1E1E1E] hover:bg-[#E4E2DD]"
          onClick={onReset}
          type="button"
        >
          초기화
        </button>
      </div>
    </section>
  );
}
