<template>
  <nav id="navbar" class="navbar navbar-dark navbar-expand-md fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler border-0 ms-auto"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        id="offcanvasNavbar"
        class="offcanvas offcanvas-end"
        tabindex="-1"
        aria-labelledby="offcanvasNavbarLabel"
        style="--bs-offcanvas-color: transparent"
      >
        <div class="offcanvas-header justify-content-end">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body">
          <ul
            class="navbar-nav justify-content-end flex-grow-1 pe-3 ps-xl-3 flex-xl-column"
          >
            <li
              v-for="nav in props.navs"
              :key="nav"
              class="nav-item"
              :class="{
                'd-md-none d-xl-inline-block':
                  nav.toLowerCase() === 'certifications',
              }"
            >
              <a
                class="nav-link underline text-end"
                :href="`#${nav.toLowerCase()}`"
                @click="hideOffcanvas"
              >
                {{ nav }}
              </a>
            </li>

            <li class="nav-item d-md-none d-lg-inline-block text-end">
              <div
                class="color-choice btn-group rounded-1 border border-1 border-secondary"
                style="margin-top: 13px"
              >
                <button
                  v-for="color in colors"
                  :key="color"
                  ref="offCanvasEl"
                  class="btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  :data-bs-title="`${ucFirst(color)} Theme`"
                  :title="`${ucFirst(color)} Theme`"
                  :style="{
                    backgroundColor: `var(--bg-${color}-default)`,
                  }"
                  @click="setColor(color)"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Offcanvas, Tooltip } from "bootstrap";
import { computed, onMounted, ref } from "vue";
import { inHomePage } from "../util";

const props = defineProps<{ navs: string[] }>();

const colors = ["blue", "green", "red", "yellow", "lime", "purple"];

let offCanvasInstance: Offcanvas;
const offCanvasEl = ref<HTMLButtonElement[]>([]);

onMounted(() => {
  offCanvasInstance = new Offcanvas("#offcanvasNavbar");

  for (const el of offCanvasEl.value) {
    new Tooltip(el, { trigger: "hover" });
  }
});

function hideOffcanvas() {
  offCanvasInstance.hide();
}

// noinspection JSUnusedGlobalSymbols
const navbarPaddingTop = computed(() => {
  return inHomePage.value ? "calc(50vh - 160px)" : "1.5rem";
});

function setColor(color: string) {
  const body = window.document.querySelector("body");
  if (body) {
    body.classList.remove(...colors);
    body.classList.add(color);
  }
}

function ucFirst(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";

.navbar {
  background-color: transparent;
  transition: padding-top 1s ease-in-out;
}

@media screen and (max-width: map-get($grid-breakpoints, xl)) {
  .offcanvas-header,
  .offcanvas-body {
    background-color: var(--bg-default);
  }
}

@media screen and (min-width: map-get($grid-breakpoints, md)) {
  .offcanvas-body {
    border-radius: var(--bs-border-radius-sm);
  }
}

.navbar {
  @media screen and (min-width: map-get($grid-breakpoints, xl)) {
    width: calc(100% / 6);
    padding-top: v-bind("navbarPaddingTop");
  }
  @media screen and (min-width: map-get($grid-breakpoints, xxl)) {
    width: calc(100% / 12);
  }
}

.nav-link {
  position: relative;
  left: 0;
  transition:
    color,
    left 500ms;
  &:hover {
    color: var(--bs-teal);
    left: 0.25rem;
  }
}

.color-choice {
  @media screen and (min-width: map-get($grid-breakpoints, xl)) {
    position: fixed;
    top: 0;
    right: 0;
  }
}
</style>
