"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { designStyles } from "@/data/designStyles";

type GenerationResult = {
  cacheBust?: number;
  error?: string;
  model?: string;
  path?: string;
  prompt?: string;
  revisedPrompt?: string | null;
  style?: {
    nameEn: string;
    nameKo: string;
    slug: string;
  };
};

export function DesignStyleImageGenerator() {
  const [slug, setSlug] = useState("minimalism");
  const [prompt, setPrompt] = useState("");
  const [quality, setQuality] = useState("medium");
  const [size, setSize] = useState("1024x1024");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const selectedStyle = useMemo(
    () => designStyles.find((style) => style.slug === slug) ?? designStyles[0],
    [slug],
  );

  async function generateImage() {
    setIsGenerating(true);
    setResult(null);

    try {
      const response = await fetch("/api/design-style-images", {
        body: JSON.stringify({ prompt, quality, size, slug }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const payload = (await response.json()) as GenerationResult;

      setResult(
        response.ok
          ? { ...payload, cacheBust: Date.now() }
          : { error: payload.error ?? "이미지 생성에 실패했습니다." },
      );
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : "이미지 생성에 실패했습니다." });
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <section className="border border-[#1E1E1E]/18 bg-[#F0EEE8] p-5">
        <div className="grid gap-4">
          <label className="block">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1E1E1E]/58">
              디자인 형식
            </span>
            <select
              className="mt-2 h-11 w-full border border-[#1E1E1E]/25 bg-[#E4E2DD] px-3 text-sm outline-none focus:border-[#1E1E1E]"
              onChange={(event) => setSlug(event.target.value)}
              value={slug}
            >
              {designStyles.map((style) => (
                <option key={style.slug} value={style.slug}>
                  {style.nameKo} / {style.nameEn}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1E1E1E]/58">
                품질
              </span>
              <select
                className="mt-2 h-11 w-full border border-[#1E1E1E]/25 bg-[#E4E2DD] px-3 text-sm outline-none focus:border-[#1E1E1E]"
                onChange={(event) => setQuality(event.target.value)}
                value={quality}
              >
                {["auto", "low", "medium", "high"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1E1E1E]/58">
                크기
              </span>
              <select
                className="mt-2 h-11 w-full border border-[#1E1E1E]/25 bg-[#E4E2DD] px-3 text-sm outline-none focus:border-[#1E1E1E]"
                onChange={(event) => setSize(event.target.value)}
                value={size}
              >
                {["1024x1024", "1536x1024", "1024x1536", "auto"].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1E1E1E]/58">
              추가 프롬프트
            </span>
            <textarea
              className="mt-2 min-h-36 w-full resize-y border border-[#1E1E1E]/25 bg-[#E4E2DD] p-3 text-sm leading-6 outline-none focus:border-[#1E1E1E]"
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="예: ecommerce hero image, no visible text, premium lighting"
              value={prompt}
            />
          </label>

          <button
            className="h-11 border border-[#1E1E1E] bg-[#1E1E1E] px-4 text-sm font-bold uppercase tracking-[0.1em] text-[#E4E2DD] transition hover:bg-[#DB4A2B] disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isGenerating}
            onClick={generateImage}
            type="button"
          >
            {isGenerating ? "생성 중" : "이미지 생성"}
          </button>
        </div>
      </section>

      <section className="border border-[#1E1E1E]/18 bg-[#1E1E1E] p-5 text-[#E4E2DD]">
        <p className="raw-label text-[#F8A348]">Image prompt</p>
        <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.84] tracking-[-0.05em]">
          {selectedStyle?.nameEn}
        </h2>
        <p className="mt-4 text-sm leading-6 text-[#E4E2DD]/68">{selectedStyle?.imagePrompt}</p>

        {result?.error ? (
          <div className="mt-6 border border-[#DB4A2B] bg-[#DB4A2B]/12 p-4 text-sm leading-6 text-[#FFB6A6]">
            {result.error}
          </div>
        ) : null}

        {result?.path ? (
          <div className="mt-6">
            <Image
              alt={`${result.style?.nameKo ?? "디자인 형식"} generated reference`}
              className="aspect-square w-full border border-[#E4E2DD]/20 object-cover"
              height={1024}
              src={`${result.path}?v=${result.cacheBust ?? 0}`}
              unoptimized
              width={1024}
            />
            <p className="mt-3 font-mono text-xs text-[#E4E2DD]/60">{result.path}</p>
          </div>
        ) : null}
      </section>
    </div>
  );
}
