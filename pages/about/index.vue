<template>
  <section class="about">
    <Title>Daniel Bonner | About</Title>
    <div class="about__preview">
      <div class="about__heading">
        <h2 class="about__title">About</h2>
        <img
          class="about__headshot"
          src="~/assets/images/daniel-bonner-portrait+2021.jpg"
          alt="Dan's Headshot"
        />
      </div>
      <div class="about__text">
        <h3>Hi I’m Dan,</h3>
        <p>
          a video producer in Washington D.C. with 7 years of experience in
          production and a specialty in editing and motion graphics animation.
        </p>
      </div>
    </div>
    <SharedCarousel />
    <SharedCard :text="text" :smallText="smallText" :imageSrc="imageSrc" />
    <SharedCard
      flipped="true"
      :text="text1"
      :smallText="smallText1"
      :imageSrc="imageSrc1"
    />
    <SharedGetInTouch />
  </section>
</template>

<script setup>
const text = `Over the last 3 years, I've been at Direct Development, a digital marketing agency that 
    works with higher education and non-profit clients. 
    In 2019, I established a video wing of the agency, called DD Studio, to meet the growing demand for video 
    services among our clients. Ever since then, 
    we've focused on transitioning our existing client accounts from content pieces like eBooks and pillar pages 
    to a variety of video deliverables.`;

const smallText = `In Guatemala on a shoot for MercyWorks. Photo by Francisco Garcia.`;
const imageSrc = `Screen+Shot+2021-10-25+at+4.49.30+PM.jpg`;

const text1 = `Prior to Direct Development, I was a full-time freelancer, working with a variety of clients of my own, 
    as well as with several production companies.
    Many of those projects were serving higher education and government clients, where I covered conferences and events,
    as well as producing video short promo videos and documentaries.
    In addition to freelancing on video projects, I did a lot of work in graphic design, creating websites, logos, branding, and animation.`;

const smallText1 = `Photo by Daniel Bonner. On-set at American University with Kevin O’Connell of FYN Creative.`;
const imageSrc1 = `IMG_1050.jpg`;
</script>

<style lang="scss" scoped>
.about {
  &__preview {
    display: flex;
    justify-content: space-between;
    padding: 6.6vmax 4vw;
  }

  &__heading {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }

  &__text {
    width: 50%;
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 2rem;
      font-weight: 400;
    }
    p {
      font-size: 1.25rem;
      max-width: 30ch;
    }
  }

  &__title {
    margin: 0;
    font-size: 2.75rem;
    font-weight: 100;
    width: 30%;
  }

  &__headshot {
    max-width: 360px;
  }
}
</style>
