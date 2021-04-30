<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/notifications">Notifications</router-link> |
      <router-link to="/explore">Explore</router-link> |
      <router-link to="/lists">Lists</router-link> |
      <router-link to="/bookmarks">Bookmarks</router-link> |
      <router-link to="/messages">Messages</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style></style>
