<template>
  <header class="header">
    <nav class="navigation">
      <router-link to="/"> <IconTwitter /></router-link>
      <router-link to="/" class="mobile">
        <IconHomeFill v-if="$route.name === 'Home'" />
        <IconHome v-else />
        <span class="header-text">Home</span>
      </router-link>
      <router-link to="/explore" class="mobile">
        <IconExploreFill
          class="desktop-explore"
          v-if="$route.name === 'Explore'"
        />
        <IconExplore class="desktop-explore" v-else />
        <IconSearch class="mobile-explore" />
        <span class="header-text">Explore</span>
      </router-link>
      <router-link to="/notifications" class="mobile">
        <IconNotificationFill v-if="$route.name === 'Notifications'" />
        <IconNotification v-else />
        <span class="header-text">Notifications</span>
      </router-link>
      <router-link to="/messages" class="mobile">
        <IconMessageFill v-if="$route.name === 'Messages'" />
        <IconMessage v-else />
        <span class="header-text">Messages</span>
      </router-link>
      <router-link to="/bookmarks">
        <IconBookmarkFill v-if="$route.name === 'Bookmarks'" />
        <IconBookmark v-else />
        <span class="header-text">Bookmarks</span>
      </router-link>
      <router-link to="/lists">
        <IconListsFill v-if="$route.name === 'Lists'" />
        <IconLists v-else />
        <span class="header-text">Lists</span>
      </router-link>
      <router-link to="/profile">
        <IconProfileFill v-if="$route.name === 'Profile'" />
        <IconProfile v-else />
        <span class="header-text">Profile</span>
      </router-link>
      <!-- POPUP -->
      <router-link to="/more">
        <IconMore />
        <span class="header-text">More</span>
      </router-link>
    </nav>
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
import IconSearch from '@/icons/common/search.svg'
// import Container from './Container.vue'

export default {
  name: 'MainHeader',
  components: {
    IconSearch,
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
    IconTwitter
  }
}
</script>

<style lang="postcss" scoped>
.header {
  position: fixed;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  border: none;

  width: 100px;
  @media (--d) {
    width: 250px;
  }
  @media (--t) {
    position: relative;
    padding: 30px;
    border-right: 1px solid #2f3336;
  }
}

.navigation {

  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #2f3336;
  background-color: #fff;


  .header-text {
    display: none;
  }

  .mobile {
    display: inline-block;
  }
  a {
    display: none;
  }
  .mobile-explore {
    display: inline-block;
  }
  .desktop-explore {
    display: none;
  }

  @media (--t) {
    padding: 0 12px 0 12px;

    border: 0;
    height: auto;
    position: static;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      margin-bottom: 15px;
    }
    a svg {
      display: flex;
      justify-content: center;
      vertical-align: sub;
    }

  }

  @media (--d) {
    border: 0;
    height: auto;
    position: static;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    a {
      display: flex;

      margin-bottom: 15px;
    }
    a svg {
      display: flex;
      vertical-align: sub;
    }
    span {
      display: block;
    }
    .header-text {
      display: flex;
      align-items: center;
      padding-left: 5px;
    }
    .mobile-explore {
      display: none;
    }
    .mobile {
      display: flex;
    }
    .desktop-explore {
      display: flex;
    }
  }
}
</style>
