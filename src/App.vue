<script setup lang="ts">
const paths = import.meta.glob("./components/*.vue") as any;
const components = Object.keys(paths)
  .map((c: string) => c.replace(".vue", ""))
  .map((c: string) => c.replace("./components/", ""))
  .map((c: string) => `/${c}`)
  .map((c: string) => {
    const name = c.split("/")[1];
    return {
      name,
      link: c,
    };
  });
</script>

<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/" class="theme-label">
        <img
          class="image__oruga"
          src="https://oruga.io/logo.png"
          alt="Logo Oruga Default Theme" />
        <b>Oruga Default Theme</b>
      </router-link>
      <hr />
      <router-link v-for="item in components" :key="item.name" :to="item.link">
        {{ item.name }}
      </router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "./assets/utils/variables";

#app {
  display: flex;
  width: 100%;

  main {
    flex-grow: 1;
    margin: 2rem;
  }

  section {
    margin: 1rem 0;

    h3 {
      font-size: 1.75rem;
    }

    .buttons > *:not(:last-child) {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  #nav {
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    width: 15%;
    background-color: $grey-light;

    .theme-label {
      font-size: 1.5rem;
      text-align: center;
      padding: 1rem 0;
    }

    a {
      font-weight: bold;
      color: white;
      text-decoration: none;
      padding: 1px 0 1px 10px;
      font-size: 1em;

      &.router-link-exact-active {
        color: $primary;
      }
    }
  }
}

.image__oruga {
  height: 64px;
  display: flex;
  margin: 0 auto;
}

@media (max-width: 576px) {
  #app {
    #nav {
      display: none;
    }
  }
}
</style>
