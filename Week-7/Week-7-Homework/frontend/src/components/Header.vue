<template>
  <header class="header">
    <Container class="header-inner">
      <nav class="navigation">
        <router-link to="/"> <IconTwitter /></router-link>
        <router-link to="/">
          <IconHomeFill v-if="$route.name === 'Home'" />
          <IconHome v-else />
          Home
        </router-link>
        <router-link to="/explore">
          <IconExploreFill v-if="$route.name === 'Explore'" />
          <IconExplore v-else />
          Explore
        </router-link>
        <router-link to="/notifications">
          <IconNotificationFill v-if="$route.name === 'Notifications'" />
          <IconNotification v-else />
          Notifications
        </router-link>
        <router-link to="/messages">
          <IconMessageFill v-if="$route.name === 'Messages'" />
          <IconMessage v-else />
          Messages
        </router-link>
        <router-link to="/bookmarks">
          <IconBookmarkFill v-if="$route.name === 'Bookmarks'" />
          <IconBookmark v-else />
          Bookmarks
        </router-link>
        <router-link to="/lists">
          <IconListsFill v-if="$route.name === 'Lists'" />
          <IconLists v-else />
          Lists
        </router-link>
        <router-link to="/profile">
          <IconProfileFill v-if="$route.name === 'Profile'" />
          <IconProfile v-else />
          Profile
        </router-link>
        <router-link to="/more">
          <IconMore />
          More
        </router-link>
      </nav>
    </Container>
  </header>
</template>

<script>
import IconHomeFill from '@/icons/menu/home-fill.svg'
import IconHome from '@/icons/menu/home.svg'
import IconExplore from '@/icons/menu/explore.svg'
import IconExploreFill from '@/icons/menu/explore-fill.svg'
import IconNotification from '@/icons/menu/notification.svg'
import IconNotificationFill from '@/icons/menu/notification-fill.svg'
import IconBookmark from '@/icons/menu/bookmark.svg'
import IconBookmarkFill from '@/icons/menu/bookmark-fill.svg'
import IconLists from '@/icons/menu/lists.svg'
import IconListsFill from '@/icons/menu/lists-fill.svg'
import IconMessage from '@/icons/menu/message.svg'
import IconMessageFill from '@/icons/menu/message-fill.svg'
import IconProfile from '@/icons/menu/profile.svg'
import IconProfileFill from '@/icons/menu/profile-fill.svg'
import IconMore from '@/icons/menu/more.svg'
import IconTwitter from '@/icons/menu/twitter.svg'
import Container from './Container.vue'

export default {
  name: 'MainHeader',
  components: {
    IconHome,
    IconHomeFill,
    IconExplore,
    IconExploreFill,
    IconNotification,
    IconNotificationFill,
    IconBookmark,
    IconBookmarkFill,
    IconLists,
    IconListsFill,
    IconMessage,
    IconMessageFill,
    IconProfile,
    IconProfileFill,
    IconMore,
    IconTwitter,
    Container
  }
}
</script>

<style lang="postcss" scoped>
.header {
  border-left: 1px solid rgb(var(--c-border-color));
  width: 25%;
}
.header-inner {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.navigation {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  a {
    margin-bottom: 15px;
  }
  a svg {
    display: inline-block;
    vertical-align: sub;
  }
}
</style>
