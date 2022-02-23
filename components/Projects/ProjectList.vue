<template>
  <section class="projects-list">
    <ProjectPreview
      v-for="(proj, index) in projects"
      :key="proj.id"
      :id="proj.id"
      :thumbnail="proj.thumbnail"
      :title="proj.title"
      :gridAreaName="'p' + ++index"
    />
  </section>
</template>


<script>
import ProjectPreview from "@/components/projects/ProjectPreview";
export default {
  components: {
    ProjectPreview,
  },
  setup() {
    const projects = [
      {
        id: "DD_Studio_Sizzle_Reel",
        title: "DD Studio Sizzle Reel",
        my_credits:
          "Producer, Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2020",
        description: `DD Studio is the video wing of Direct Development (DD) that I established when I joined their team full-time. DD traditionally 
                      offered web design, dev, and marketing services, 
                      and this was our launch into offering video services. This video was created at the launch of DD Studio to be both a demo reel of sorts,
                      as well as an ad to sell the new services to new and existing clients.`,
        resourceLink:
          "https://vimeo.com/555344804?embedded=true&source=video_title&owner=22904072",
        thumbnail: "assets/images/projects/DD_Studio_Sizzle_Reel.png",
      },
      {
        id: "Welcome_to_MercyWorks",
        title: "Welcome to MercyWorks",
        my_credits: "Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2019",
        description: `MercyWorks is a brand of Missionhurst, a catholic charity that works with the poor and underprivileged around the world. 
                      In the summer of 2018, another DD Studio videographer and I traveled to Guatemala to gather footage of the programs there to be used
                      in fundraising efforts for DD’s broader marketing efforts for the client. 
                      This general overview video of MercyWorks is one of my favorite videos that I’ve completed to date.`,
        resourceLink:
          "https://vimeo.com/415984224?embedded=true&source=vimeo_logo&owner=22904072",
        thumbnail: "assets/images/projects/Welcome_to_MercyWorks.png",
      },
      {
        id: "DD_Studio_Sizzle_Reel",
        title: "DD Studio Sizzle Reel",
        my_credits:
          "Producer, Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2020",
        description: `DD Studio is the video wing of Direct Development (DD) that I established when I joined their team full-time. DD traditionally 
                      offered web design, dev, and marketing services, 
                      and this was our launch into offering video services. This video was created at the launch of DD Studio to be both a demo reel of sorts,
                      as well as an ad to sell the new services to new and existing clients.`,
        resourceLink:
          "https://vimeo.com/555344804?embedded=true&source=video_title&owner=22904072",
        thumbnail: "assets/images/projects/DD_Studio_Sizzle_Reel.png",
      },
      {
        id: "Welcome_to_MercyWorks",
        title: "Welcome to MercyWorks",
        my_credits: "Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2019",
        description: `MercyWorks is a brand of Missionhurst, a catholic charity that works with the poor and underprivileged around the world. 
                      In the summer of 2018, another DD Studio videographer and I traveled to Guatemala to gather footage of the programs there to be used
                      in fundraising efforts for DD’s broader marketing efforts for the client. 
                      This general overview video of MercyWorks is one of my favorite videos that I’ve completed to date.`,
        resourceLink:
          "https://vimeo.com/415984224?embedded=true&source=vimeo_logo&owner=22904072",
        thumbnail: "assets/images/projects/Welcome_to_MercyWorks.png",
      },
      {
        id: "DD_Studio_Sizzle_Reel",
        title: "DD Studio Sizzle Reel",
        my_credits:
          "Producer, Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2020",
        description: `DD Studio is the video wing of Direct Development (DD) that I established when I joined their team full-time. DD traditionally 
                      offered web design, dev, and marketing services, 
                      and this was our launch into offering video services. This video was created at the launch of DD Studio to be both a demo reel of sorts,
                      as well as an ad to sell the new services to new and existing clients.`,
        resourceLink:
          "https://vimeo.com/555344804?embedded=true&source=video_title&owner=22904072",
        thumbnail: "assets/images/projects/DD_Studio_Sizzle_Reel.png",
      },
      {
        id: "DD_Studio_Sizzle_Reel",
        title: "DD Studio Sizzle Reel",
        my_credits:
          "Producer, Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2020",
        description: `DD Studio is the video wing of Direct Development (DD) that I established when I joined their team full-time. DD traditionally 
                      offered web design, dev, and marketing services, 
                      and this was our launch into offering video services. This video was created at the launch of DD Studio to be both a demo reel of sorts,
                      as well as an ad to sell the new services to new and existing clients.`,
        resourceLink:
          "https://vimeo.com/555344804?embedded=true&source=video_title&owner=22904072",
        thumbnail: "assets/images/projects/DD_Studio_Sizzle_Reel.png",
      },
      {
        id: "DD_Studio_Sizzle_Reel",
        title: "DD Studio Sizzle Reel",
        my_credits:
          "Producer, Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2020",
        description: `DD Studio is the video wing of Direct Development (DD) that I established when I joined their team full-time. DD traditionally 
                      offered web design, dev, and marketing services, 
                      and this was our launch into offering video services. This video was created at the launch of DD Studio to be both a demo reel of sorts,
                      as well as an ad to sell the new services to new and existing clients.`,
        resourceLink:
          "https://vimeo.com/555344804?embedded=true&source=video_title&owner=22904072",
        thumbnail: "assets/images/projects/DD_Studio_Sizzle_Reel.png",
      },
      {
        id: "Welcome_to_MercyWorks",
        title: "Welcome to MercyWorks",
        my_credits: "Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2019",
        description: `MercyWorks is a brand of Missionhurst, a catholic charity that works with the poor and underprivileged around the world. 
                      In the summer of 2018, another DD Studio videographer and I traveled to Guatemala to gather footage of the programs there to be used
                      in fundraising efforts for DD’s broader marketing efforts for the client. 
                      This general overview video of MercyWorks is one of my favorite videos that I’ve completed to date.`,
        resourceLink:
          "https://vimeo.com/415984224?embedded=true&source=vimeo_logo&owner=22904072",
        thumbnail: "assets/images/projects/Welcome_to_MercyWorks.png",
      },
      {
        id: "DD_Studio_Sizzle_Reel",
        title: "DD Studio Sizzle Reel",
        my_credits:
          "Producer, Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2020",
        description: `DD Studio is the video wing of Direct Development (DD) that I established when I joined their team full-time. DD traditionally 
                      offered web design, dev, and marketing services, 
                      and this was our launch into offering video services. This video was created at the launch of DD Studio to be both a demo reel of sorts,
                      as well as an ad to sell the new services to new and existing clients.`,
        resourceLink:
          "https://vimeo.com/555344804?embedded=true&source=video_title&owner=22904072",
        thumbnail: "assets/images/projects/DD_Studio_Sizzle_Reel.png",
      },
      {
        id: "Welcome_to_MercyWorks",
        title: "Welcome to MercyWorks",
        my_credits: "Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2019",
        description: `MercyWorks is a brand of Missionhurst, a catholic charity that works with the poor and underprivileged around the world. 
                      In the summer of 2018, another DD Studio videographer and I traveled to Guatemala to gather footage of the programs there to be used
                      in fundraising efforts for DD’s broader marketing efforts for the client. 
                      This general overview video of MercyWorks is one of my favorite videos that I’ve completed to date.`,
        resourceLink:
          "https://vimeo.com/415984224?embedded=true&source=vimeo_logo&owner=22904072",
        thumbnail: "assets/images/projects/Welcome_to_MercyWorks.png",
      },
      {
        id: "DD_Studio_Sizzle_Reel",
        title: "DD Studio Sizzle Reel",
        my_credits:
          "Producer, Filming (with others), Drone Piloting, Editing, Graphics",
        production_company: "DD Studio",
        project_year: "2020",
        description: `DD Studio is the video wing of Direct Development (DD) that I established when I joined their team full-time. DD traditionally 
                      offered web design, dev, and marketing services, 
                      and this was our launch into offering video services. This video was created at the launch of DD Studio to be both a demo reel of sorts,
                      as well as an ad to sell the new services to new and existing clients.`,
        resourceLink:
          "https://vimeo.com/555344804?embedded=true&source=video_title&owner=22904072",
        thumbnail: "assets/images/projects/DD_Studio_Sizzle_Reel.png",
      },
    ];

    return { projects };
  },
};
</script>

<style lang="scss" scoped>
.projects-list {
  display: grid;
  grid-template-columns: 1fr repeat(6, 240px) 1fr;
  grid-template-rows: repeat(5, 390px);
  // grid-template-rows: repeat(auto-fill, 390px);
  grid-gap: 34px;

  // legend:
  // h - half
  // t - third
  // ot - one third
  // tt - two thirds

  // heres how 11 projects are layed out
  // "[h1 h1 h1] [h2 h2 h2]"
  // "[tt1 tt1 tt1 tt1] [ot1 ot1]"
  // "[ot2 ot2] [tt2 tt2 tt2 tt2]"
  // "[h3 h3 h3] [h4 h4 h4]"
  // "[t1 t1] [t1 t2] [t3 t3]"

  grid-template-areas:
    ". p1 p1 p1 p2 p2 p2 ."
    ". p3 p3 p3 p3  p4 p4 ."
    ". p5 p5 p6 p6 p6 p6 ."
    ". p7 p7 p7 p8 p8 p8 ."
    ". p9 p9 p10 p10 p11 p11 .";
}
</style>