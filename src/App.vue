<template>
  <!-- navigator 태그 -->
  <nav>
    <!-- Home 으로 -->
    <router-link to="/">Home</router-link> |

    <!-- About page으로 -->
    <router-link to="/about">About</router-link> |

    <!-- Data binding page으로 -->
    <router-link to="/databinding/string">Data Binding String</router-link> |
    <router-link to="/databinding/html">Data Binding Html</router-link> |
    <router-link to="/databinding/input">Data Binding Input</router-link> |
    <router-link to="/databinding/select">Data Binding Select</router-link> |
    <router-link to="/databinding/checkbox">Data Binding Checkbox</router-link>
    | <router-link to="/databinding/radio">Data Binding Radio</router-link> |
    <router-link to="/databinding/attribute"
      >Data Binding Attribute</router-link
    >
    | <router-link to="/databinding/list">Data Binding List</router-link> |
    <router-link to="/databinding/class">Data Binding Class</router-link>
  </nav>

  <!-- router-link의 페이지가 보여지는 부분 -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
