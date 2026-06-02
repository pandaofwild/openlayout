import type { DesignStyle, DesignStylePalette } from "@/data/designStyles";

const darkPattern = /dark|cyber|neon|noir|black|midnight|다크|네온|사이버|누아르|검정|어두/i;
const softPattern = /soft|pastel|warm|minimal|calm|gentle|파스텔|소프트|따뜻|미니멀|차분/i;
const luxuryPattern = /luxury|classic|gold|premium|old money|럭셔리|클래식|골드|프리미엄|올드머니/i;
const naturalPattern = /organic|nature|botanical|eco|craft|natural|오가닉|자연|보태니컬|에코|수공예|크래프트/i;

function hashText(input: string) {
  let hash = 2166136261;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function hslToHex(hue: number, saturation: number, lightness: number) {
  const normalizedHue = (((hue % 360) + 360) % 360) / 360;
  const normalizedSaturation = saturation / 100;
  const normalizedLightness = lightness / 100;

  const hueToRgb = (p: number, q: number, t: number) => {
    let value = t;
    if (value < 0) value += 1;
    if (value > 1) value -= 1;
    if (value < 1 / 6) return p + (q - p) * 6 * value;
    if (value < 1 / 2) return q;
    if (value < 2 / 3) return p + (q - p) * (2 / 3 - value) * 6;
    return p;
  };

  let red: number;
  let green: number;
  let blue: number;

  if (normalizedSaturation === 0) {
    red = normalizedLightness;
    green = normalizedLightness;
    blue = normalizedLightness;
  } else {
    const q =
      normalizedLightness < 0.5
        ? normalizedLightness * (1 + normalizedSaturation)
        : normalizedLightness + normalizedSaturation - normalizedLightness * normalizedSaturation;
    const p = 2 * normalizedLightness - q;
    red = hueToRgb(p, q, normalizedHue + 1 / 3);
    green = hueToRgb(p, q, normalizedHue);
    blue = hueToRgb(p, q, normalizedHue - 1 / 3);
  }

  return [red, green, blue]
    .map((channel) =>
      Math.round(channel * 255)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")
    .toUpperCase()
    .padStart(6, "0")
    .replace(/^/, "#");
}

function readableMuted(text: string, dark: boolean) {
  return dark ? hslToHex(hashText(text) % 360, 14, 68) : hslToHex(hashText(text) % 360, 12, 38);
}

export function createPromptStylePreset(prompt: string, basePreset: DesignStyle): DesignStyle {
  const seedText = `${basePreset.slug}:${prompt.trim() || basePreset.imagePrompt}`;
  const seed = hashText(seedText);
  const hue = seed % 360;
  const secondHue = hue + 34 + (seed % 28);
  const thirdHue = hue + 176 + (seed % 42);
  const isDark = darkPattern.test(seedText) || basePreset.palette.base.toLowerCase() === "#080a14";
  const isSoft = softPattern.test(seedText);
  const isLuxury = luxuryPattern.test(seedText);
  const isNatural = naturalPattern.test(seedText);

  let palette: DesignStylePalette;

  if (isLuxury) {
    palette = {
      base: "#F3EBDD",
      surface: "#FFF8EA",
      text: "#17120D",
      mutedText: "#706553",
      primary: "#17120D",
      accent: hslToHex(40 + (seed % 18), 58, 43),
      accent2: hslToHex(44 + (seed % 14), 68, 66),
      accent3: hslToHex(350 + (seed % 18), 38, 30),
      border: "#2A2118",
    };
  } else if (isNatural) {
    palette = {
      base: hslToHex(70 + (seed % 34), 23, 86),
      surface: hslToHex(58 + (seed % 24), 36, 94),
      text: "#243024",
      mutedText: "#66715E",
      primary: "#243024",
      accent: hslToHex(92 + (seed % 38), 36, 42),
      accent2: hslToHex(28 + (seed % 24), 48, 62),
      accent3: hslToHex(350 + (seed % 30), 38, 68),
      border: "#35422F",
    };
  } else if (isDark) {
    palette = {
      base: hslToHex(hue, 34, 7),
      surface: hslToHex(hue + 8, 32, 13),
      text: "#F6F7FB",
      mutedText: readableMuted(seedText, true),
      primary: "#F6F7FB",
      accent: hslToHex(hue, 92, 58),
      accent2: hslToHex(secondHue, 88, 60),
      accent3: hslToHex(thirdHue, 82, 64),
      border: hslToHex(hue, 72, 62),
    };
  } else if (isSoft) {
    palette = {
      base: hslToHex(hue, 28, 91),
      surface: hslToHex(hue + 8, 38, 97),
      text: "#28231F",
      mutedText: readableMuted(seedText, false),
      primary: "#28231F",
      accent: hslToHex(hue, 52, 56),
      accent2: hslToHex(secondHue, 48, 68),
      accent3: hslToHex(thirdHue, 50, 76),
      border: "#342E28",
    };
  } else {
    palette = {
      base: hslToHex(hue, 24, 88),
      surface: hslToHex(hue + 10, 34, 95),
      text: "#161616",
      mutedText: readableMuted(seedText, false),
      primary: "#161616",
      accent: hslToHex(hue, 78, 48),
      accent2: hslToHex(secondHue, 72, 58),
      accent3: hslToHex(thirdHue, 68, 68),
      border: "#161616",
    };
  }

  return {
    ...basePreset,
    slug: "custom-prompt",
    nameKo: "프롬프트 팔레트",
    nameEn: "Prompt Palette",
    category: "Custom",
    summary: prompt.trim() || basePreset.summary,
    tags: [...new Set(["custom", "palette", ...basePreset.tags.slice(0, 3)])],
    palette,
    imagePrompt: `${prompt.trim() || basePreset.imagePrompt}, clean composition, high-quality design reference image, no logo, no watermark`,
  };
}
