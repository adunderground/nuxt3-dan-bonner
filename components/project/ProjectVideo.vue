<template lang="">
  <div class="project-video" v-html="html">
  </div>
</template>
<script>
export default {
  props: ['videoLink'],
  setup(props) {
    const html =
      `
    <iframe src="${props.videoLink}?h=034b50d2dc&color=ff9933" frameborder="0" width="100%" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    `

    //         src="https://player.vimeo.com/video/638476193?h=034b50d2dc&color=ff9933"
    // <iframe src="${props.videoLink}?h=034b50d2dc" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    
    
    // `
    // <div style="padding:56.25% 0 0 0;position:relative;">
    // <iframe src="https://player.vimeo.com/video/638476193?h=034b50d2dc" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    // </div>       https://player.vimeo.com/638476193?h=034b50d2dc
    // `


    // <div style="padding:56.25% 0 0 0;position:relative;">
    // <iframe src="https://player.vimeo.com/video/638476193?h=034b50d2dc" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
    // <p><a href="https://vimeo.com/638476193">NOVA Wrestling Club - Giving Drive 2020</a> from <a href="https://vimeo.com/danielbonner">Daniel Bonner</a> on <a href="https://vimeo.com">Vimeo</a>.</p>?

    // <iframe src="https://player.vimeo.com/video/638476193?h=034b50d2dc&color=ff9933" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    // <p><a href="https://vimeo.com/638476193">NOVA Wrestling Club - Giving Drive 2020</a> from <a href="https://vimeo.com/danielbonner">Daniel Bonner</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

    return { html }
  }
}
</script>

<style lang="scss">
.project-video {
  display: flex;
  justify-content: center;
  height: 55vh;

  // max-width: 35vw;
  // max-height: 50vh;
}
</style>
