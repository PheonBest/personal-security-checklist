import { component$, useResource$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Icon from "~/components/core/icon";
import { projects, socials, intro, contributing, license } from './about-content';
import { marked } from "marked";

export default component$(() => {

  interface Contributor {
    login: string;
    avatar_url: string;
    avatarUrl: string;
    html_url: string;
    contributions: number;
    name: string;
  }

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };

  const contributorsResource = useResource$<Contributor[]>(async () => {
    const url = 'https://api.github.com/repos/lissy93/personal-security-checklist/contributors?per_page=100';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch contributors');
    }
    return await response.json();
  });

  const sponsorsResource = useResource$<Contributor[]>(async () => {
    const url = 'https://github-sponsors.as93.workers.dev/lissy93';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch sponsors');
    }
    return await response.json();
  });


  return (
    <div class="m-4 md:mx-16">
      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">About the Security Checklist</h2>
        {intro.map((paragraph, index) => (
          <p class="mb-2" key={index}>{paragraph}</p>
        ))}        
      </article>
      <div class="divider"></div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About | Digital Defense",
  meta: [
    {
      name: "description",
      content: "This project aims to give you practical guidance on how to improve your digital security, and protect your privacy online",
    },
  ],
};
