"use client";

import { getRelatedDesignStyles } from "@/data/designStyles";
import { useStylePreset } from "@/components/style-preset/StylePresetProvider";
import { DesignStyleCard } from "@/components/design-style/DesignStyleCard";

export function RelatedDesignStyles({ slugs }: { slugs: string[] }) {
  const { customPreset, selectedSlug, setSelectedSlug } = useStylePreset();
  const styles = getRelatedDesignStyles(slugs);

  if (styles.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-display text-5xl font-bold uppercase leading-[0.86] tracking-[-0.05em] text-[#1E1E1E] md:text-6xl">
          Related styles
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-[#1E1E1E]/65">
          같은 범주와 샘플 유형을 기준으로 함께 비교하기 좋은 디자인 형식입니다.
        </p>
      </div>
      <div className="grid gap-x-4 gap-y-12 md:grid-cols-3">
        {styles.map((style) => (
          <DesignStyleCard
            isSelected={!customPreset && selectedSlug === style.slug}
            key={style.slug}
            onSelect={setSelectedSlug}
            style={style}
          />
        ))}
      </div>
    </section>
  );
}
