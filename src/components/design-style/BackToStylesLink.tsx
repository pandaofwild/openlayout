"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";

export function BackToStylesLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Suspense fallback={<LocalizedLink className={className} href="/styles">{children}</LocalizedLink>}>
      <BackToStylesLinkWithSearch className={className}>{children}</BackToStylesLinkWithSearch>
    </Suspense>
  );
}

function BackToStylesLinkWithSearch({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const href = query ? `/styles?${query}` : "/styles";

  return (
    <LocalizedLink className={className} href={href}>
      {children}
    </LocalizedLink>
  );
}
