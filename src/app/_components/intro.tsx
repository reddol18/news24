'use client';

import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-4 md:mb-12">      <h1 className="text-2xl md:text-1xl font-bold tracking-tighter leading-tight md:pr-8">
        뉴스 리스트
      </h1>
      <h4 className="text-sm md:text-1xl text-center md:text-left mt-5 md:pl-8">
        합리적인 정론지 및 인터넷 언론사의 최신 기사를 모아서 제공합니다
      </h4>
    </section>
  );
}
