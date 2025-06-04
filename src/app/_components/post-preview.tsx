'use client';

import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Source from "./source";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import {PostBody} from "@/app/_components/post-body";

type Props = {
  title: string;
  thumbnail: string;
  postdate: Date;
  source: string;
  url: string;
  content: string;
  category: string;
};

export function PostPreview({
  title,
  thumbnail,
  postdate,
  source,
  url,
    content,
    category

}: Props) {
  return (
      <div className="grid grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 h-full">
              <div className="mb-5">
                  <CoverImage slug={url} title={title} src={thumbnail} />
              </div>
          </div>
          <div className="col-span-3">
              <h3 className="text-3xl mb-3 leading-snug">
                  <Link href={url} target="_blank" className="hover:underline">
                      {title}
                  </Link>
              </h3>
              <div className="text-lg mb-4">
                  <DateFormatter dateString={postdate.toISOString()} />
              </div>
              <PostBody content={content}></PostBody>
              <Source name={source} category={category} />
          </div>
      </div>
  );
}
