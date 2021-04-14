<script>
export default {
    name: 'TweetCard',
    props: ['tweet']
}
</script>

<style scoped>
.card {
    display: inline-block;
    text-align: left;
    padding: 20px;
    border: 1px solid #ddd;
    margin: 20px;
    min-width: 200px;
}
.card-title {
    display: inline-block;
    text-align: center;

    padding-bottom: 25px;
    color: grey;

}
.profile-pic{
    display: inline-block;
    border-radius: 100%;
}

</style>

<template lang="pug">
div.card 
    img.profile-pic(:src="`https://picsum.photos/50?random=${tweet.user._id}`", alt="alt")
    h2.card-title {{tweet.user.name}}
    p @{{tweet.user.username}} 
    p {{tweet.text}}

</template>



