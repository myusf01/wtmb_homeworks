<template>
  <div class="home">
    <div class="timeline">
      <CustomText class="a1">Hele Hele Dünya</CustomText>
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
      <CustomText class="a1"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        et, dolores recusandae eius cumque quaerat. Natus repellat repudiandae,
        delectus pariatur, voluptate, dolorum adipisci recusandae illo accusamus
        consequuntur harum laudantium. Mollitia.</CustomText
      >
    </div>
    <div class="widgets">
      <CustomText class="a1"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque
        adipisci doloribus culpa quasi vero perspiciatis a est dolorem
        temporibus rem omnis repellat neque optio aut, architecto esse iure
        minus.</CustomText
      >
    </div>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Home',
  components: {
    CustomText
  }
}
</script>

<style>
.a1 {
  color: var(--c-theme);
}
.home {
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;

  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 350px;
    grid-gap: 30px;
  }
}
.timeline {
  max-width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.widgets {
  display: none;
  @media (--d) {
    display: block;
  }
}
CustomText {
  display: inline-block;
}
</style>
