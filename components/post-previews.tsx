"use client";

import Script from "next/script";
import { useRef } from "react";
import { posts } from "@/content/portfolio";
import { PlatformIcon } from "@/components/social-links";

type EmbedWindow = Window & { twttr?: { widgets?: { load: (element: HTMLElement) => void } } };

export function PostPreviews() {
  const container = useRef<HTMLDivElement>(null);

  return <>
    <div className="post-grid" ref={container}>
      {posts.map((post) => <article className="post-preview" key={post.id} aria-label={post.topic}>
        <h3 className="post-topic mono">{post.topic}</h3>
        <div className="post-embed">
          <blockquote className="twitter-tweet" data-dnt="true" data-theme="light" data-conversation="none" data-align="center">
            <div className="post-author"><PlatformIcon platform="x" /><span>Aditya <span>@Adity0ux</span></span></div>
            <p>{post.excerpt}</p>
            <a href={`https://x.com/Adity0ux/status/${post.id}`} target="_blank" rel="noopener noreferrer"><time dateTime={post.date}>{post.displayDate}</time> · View post on X ↗</a>
          </blockquote>
        </div>
      </article>)}
    </div>
    <Script src="https://platform.x.com/widgets.js" strategy="lazyOnload" onReady={() => {
      if (container.current) (window as EmbedWindow).twttr?.widgets?.load(container.current);
    }} />
  </>;
}
