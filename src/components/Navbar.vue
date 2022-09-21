<template>
  <nav id="navbar" class="navbar navbar-dark navbar-expand-md fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler border-0"
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
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link underline" href="#home"> Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link underline" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link underline" href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  background-color: transparent;
}

@media screen and (max-width: 767px) {
  .offcanvas-body {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity));
  }
}
</style>
