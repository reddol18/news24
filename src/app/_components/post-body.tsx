'use client';

import {truncateText} from "@/app/utils/truncate-text";

type Props = {
  content: string;
  maxLength?: number;
};

export function PostBody({ content, maxLength = 200 }: Props) {
    const truncated = truncateText(content, maxLength);

    return (
        <p className="text-md leading-relaxed mb-4 justify-end">{truncated}</p>
  );
}
