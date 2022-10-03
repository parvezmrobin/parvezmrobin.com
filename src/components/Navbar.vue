<template>
  <nav
    id="navbar"
    class="navbar navbar-dark navbar-expand-md fixed-top pt-xl-4"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler border-0 ms-auto"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="offcanvasNavbar"
        class="offcanvas offcanvas-end"
        tabindex="-1"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header bg-dark">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul
            class="navbar-nav justify-content-end flex-grow-1 pe-3 ps-xl-3 flex-xl-column"
          >
            <li v-for="nav in navs" :key="nav" class="nav-item">
              <a
                class="nav-link underline"
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

<script lang="ts" setup="">
import { Offcanvas } from "bootstrap";
import { onMounted } from "vue";

const navs = [
  "Home",
  "Skills",
  "Experience",
  "Education",
  "Projects",
  "Certifications",
  "Achievements",
  "Activities",
];
let offCanvasInstance: Offcanvas;
onMounted(() => {
  offCanvasInstance = new Offcanvas("#offcanvasNavbar");
});
function hideOffcanvas() {
  offCanvasInstance.hide();
}
</script>
<style lang="scss">
.navbar {
  background-color: transparent;
}

$md: 768px;
$xl: 1200px;
$xxl: 1400px;

@media screen and (max-width: $md) {
  .offcanvas-body {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity));
  }
}

@media screen and (min-width: $xl) {
  .navbar {
    width: calc(100% / 6);
  }
}
</style>
