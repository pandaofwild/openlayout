"use client";

import { useMemo, useState } from "react";
import { designStyles } from "@/data/designStyles";
import { useStylePreset } from "@/components/style-preset/StylePresetProvider";
import { DesignStyleCard } from "@/components/design-style/DesignStyleCard";
import { DesignStyleFilters } from "@/components/design-style/DesignStyleFilters";

export function DesignStyleLibrary() {
  const { customPreset, selectedSlug, setSelectedSlug } = useStylePreset();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  const filteredStyles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return designStyles.filter((style) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [
          style.nameKo,
          style.nameEn,
          style.summary,
          style.description,
          style.category,
          ...style.tags,
          ...style.goodFor,
          ...style.useCases,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCategory = category === "" || style.category === category;
      const matchesTag = tag === "" || style.tags.includes(tag);

      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [category, query, tag]);

  function resetFilters() {
    setQuery("");
    setCategory("");
    setTag("");
  }

  return (
    <div className="space-y-10">
      <DesignStyleFilters
        category={category}
        onCategoryChange={setCategory}
        onQueryChange={setQuery}
        onReset={resetFilters}
        onTagChange={setTag}
        query={query}
        tag={tag}
      />
      <div className="flex flex-col gap-3 border-y border-[#1E1E1E]/20 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="raw-label text-[#1E1E1E]/62">
          {filteredStyles.length}개 디자인 형식 표시 중
        </p>
        <p className="text-sm font-medium text-[#1E1E1E]/62">
          {customPreset ? "프롬프트 팔레트가 적용 중입니다." : `${selectedSlug} 적용 중`}
        </p>
      </div>
      {filteredStyles.length > 0 ? (
        <div className="grid gap-x-4 gap-y-14 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredStyles.map((style) => (
            <DesignStyleCard
              isSelected={!customPreset && selectedSlug === style.slug}
              key={style.slug}
              onSelect={setSelectedSlug}
              style={style}
            />
          ))}
        </div>
      ) : (
        <div className="border border-[#1E1E1E]/18 bg-[#F0EEE8] p-8">
          <p className="font-display text-5xl font-bold uppercase leading-none tracking-[-0.05em] text-[#1E1E1E]">
            No style
          </p>
          <p className="mt-4 text-sm leading-6 text-[#1E1E1E]/68">
            조건에 맞는 디자인 형식이 없습니다. 검색어나 필터를 초기화해 다시 확인하세요.
          </p>
        </div>
      )}
    </div>
  );
}
