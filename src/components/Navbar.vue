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
      >
        <div
          class="offcanvas-header justify-content-end"
          style="background-color: var(--bs-cyan-900)"
        >
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
            <li v-for="nav in props.navs" :key="nav" class="nav-item">
              <a
                class="nav-link underline text-end"
                :href="`#${nav.toLowerCase()}`"
                @click="hideOffcanvas"
              >
                {{ nav }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Offcanvas } from "bootstrap";
import { computed, onMounted } from "vue";
import { inHomePage } from "../util";

const props = defineProps<{ navs: string[] }>();
let offCanvasInstance: Offcanvas;
onMounted(() => {
  offCanvasInstance = new Offcanvas("#offcanvasNavbar");
});
function hideOffcanvas() {
  offCanvasInstance.hide();
}

const navbarPaddingTop = computed(() => {
  return inHomePage.value ? "calc(50vh - 160px)" : "1.5rem";
});
</script>
<style lang="scss">
.navbar {
  background-color: transparent;
  transition: padding-top 1s ease-in-out;
}

$md: 768px;
$xl: 1200px;
$xxl: 1400px;

@media screen and (max-width: $xl) {
  .offcanvas-body {
    background-color: var(--bs-cyan-900);
  }
}

@media screen and (min-width: $md) {
  .offcanvas-body {
    border-radius: var(--bs-border-radius-sm);
  }
}

.navbar {
  @media screen and (min-width: $xl) {
    width: calc(100% / 6);
    padding-top: v-bind("navbarPaddingTop");
  }
  @media screen and (min-width: $xxl) {
    width: calc(100% / 12);
  }
}
</style>
