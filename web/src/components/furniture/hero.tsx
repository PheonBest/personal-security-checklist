import { component$ } from "@builder.io/qwik";

import Icon from "~/components/core/icon";

export default component$(() => {
  return (
    <div class="hero mb-8 mx-auto xl:max-w-7xl max-w-6xl w-full xl:px-10">
      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="flex flex-col w-full place-items-center">
          <div class="max-w-2xl flex flex-col place-items-center">
            <p>ECHR</p>
            <h1 class="text-5xl font-bold">Personal Security Checklist</h1>
            <p class="subtitle pb-6">Your guide to securing your digital life and protecting your privacy</p>
            <Icon class="mb-4" icon="shield" width={120} height={120}  />
          </div>
          <p style="margin-left: auto;"><i>Credits: contributors of <a class="link link-primary" href="https://github.com/lissy93/personal-security-checklist">personal-security-checklist</a></i></p>
        </div>
      </div>
    </div>
  );
});
