import { defineStore } from 'pinia';

export const useProjectStore = defineStore({
  id: 'project-store',
  state: () => ({
    projects: [
      {
        id: 'dd-studio-sizzle-reel',
        title: 'DD Studio Sizzle Reel',
        my_credits:
          'Producer, Filming (with others), Drone Piloting, Editing, Graphics',
        production_company: 'DD Studio',
        project_year: '2020',
        description: `DD Studio is the video wing of Direct Development (DD) that I established when I joined their team full-time. DD traditionally 
                      offered web design, dev, and marketing services, 
                      and this was our launch into offering video services. This video was created at the launch of DD Studio to be both a demo reel of sorts,
                      as well as an ad to sell the new services to new and existing clients.`,
        resourceLink:
          'https://vimeo.com/555344804?embedded=true&source=video_title&owner=22904072',
        thumbnail: 'assets/images/projects/DD_Studio_Sizzle_Reel.png',
      },
      {
        id: 'welcome-to-mercyworks',
        title: 'Welcome to MercyWorks',
        my_credits: 'Filming (with others), Drone Piloting, Editing, Graphics',
        production_company: 'DD Studio',
        project_year: '2019',
        description: `MercyWorks is a brand of Missionhurst, a catholic charity that works with the poor and underprivileged around the world. 
                      In the summer of 2018, another DD Studio videographer and I traveled to Guatemala to gather footage of the programs there to be used
                      in fundraising efforts for DD’s broader marketing efforts for the client. 
                      This general overview video of MercyWorks is one of my favorite videos that I’ve completed to date.`,
        resourceLink:
          'https://vimeo.com/415984224?embedded=true&source=vimeo_logo&owner=22904072',
        thumbnail: 'assets/images/projects/Welcome_to_MercyWorks.png',
      },
      {
        id: 'enrollify-roadshow-series',
        title: 'Enrollify Roadshow Series',
        my_credits: 'Filming, Editing, Graphics',
        production_company: 'DD Studio',
        project_year: '2021',
        description: `Our goal was to film and edit daily recap videos for a three-day-long podcasting roadshow we embarked on around the New England area. The catch? Each recap was to be posted the next day. Zach, the host of the Roadshow, and I both were completely winded by the end of the trip, but the sense of accomplishment from successfully completing and posting all three recaps on schedule is one of the highlights in my career so far.

        Episode 3 is my personal favorite of the three days as we both dialed into a tight rhythm, but feel free to check out episodes 1 & 2 below as well.`,
        resourceLink:
          'https://vimeo.com/555344804?embedded=true&source=video_title&owner=22904072',
        has_additional_resources: true,
        additional_resources: [
          'https://vimeo.com/638217035?embedded=true&source=vimeo_logo&owner=22904072',
          'https://vimeo.com/638217003?embedded=true&source=vimeo_logo&owner=22904072',
        ],
        thumbnail: 'assets/images/projects/Enrollify_Roadshow_Series.png',
      },
      {
        id: 'verity-student-product-promo',
        title: 'Verity Student Animated Product Video',
        my_credits: 'Producer, Editing, Animation',
        production_company: 'DD Studio',
        project_year: '2020',
        description: `VerityIQ is an education technology company that created a robust CRM (Customer Relationship Management) for the higher ed space. Then, in 2020, they launched their second product, an SIS (Student information system) that DD had been hired to market the launch of. My job was to create a video to capture the features and advantages of the product in a short animated explainer video. The DD Studio team and I got to work came out with this video that the team at Verity was very happy with.

        `,
        resourceLink:
          'https://vimeo.com/555347055?embedded=true&source=vimeo_logo&owner=22904072',
        thumbnail: 'assets/images/projects/verify.png',
      },
      {
        id: 'bard-college-environmental-justice',
        title: 'Bard College: Environmental Justice',
        my_credits: 'Producer, Editing, Animation',
        production_company: 'DD Studio',
        project_year: '2020',
        description: ``,
        resourceLink:
          'https://vimeo.com/555342616?embedded=true&source=vimeo_logo&owner=22904072',
        thumbnail: 'assets/images/projects/bard.png',
      },
      {
        id: 'unacast-conference-highlight',
        title: 'Unacast Conference Highlight',
        my_credits: 'Filming (with others), Editing, Graphics',
        production_company: 'FYN Creative',
        project_year: '2017',
        description: ``,
        resourceLink: 'https://vimeo.com/234422382',
        thumbnail: 'assets/images/projects/unacast.png',
      },
      {
        id: 'umd-biocomputational-engineering-program-explainer',
        title: 'UMD Biocomputational Engineering',
        my_credits: 'Producer, Editing, Animation',
        production_company: 'DD Studio',
        project_year: '2020',
        description: ``,
        resourceLink: 'https://vimeo.com/555346725',
        thumbnail: 'assets/images/projects/umd.jpg',
      },
      {
        id: 'wvu-graduate-discover-day',
        title: 'WVU Graduate Discover Day',
        my_credits:
          'Producer, Filming (with others), Drone Piloting, Editing, Graphics',
        production_company: 'DD Studio',
        project_year: '2019',
        description: ``,
        resourceLink: 'https://vimeo.com/415985322',
        thumbnail: 'assets/images/projects/wvu.png',
      },
      {
        id: 'ande-conference-highlight',
        title: 'ANDE Conference Highlight',
        my_credits: 'Producer, Filming (with others), Editing, Graphics',
        production_company: 'Daniel Bonner',
        project_year: '2019',
        description: ``,
        resourceLink: 'https://vimeo.com/415983443',
        thumbnail: 'assets/images/projects/ande.png',
      },
      {
        id: 'leadership-greater-washington-leader-of-the-years',
        title: 'Leadership Greater Washington: “Leader of the Years”',
        my_credits: 'Filming (with others), Editing, Graphics',
        production_company: 'FYN Creative',
        project_year: '2018',
        description: ``,
        resourceLink: 'https://vimeo.com/264429784',
        thumbnail: 'assets/images/projects/leadership.png',
      },
      {
        id: 'nova-wrestling-club-giving-drive',
        title: 'NOVA Wrestling Club Giving Drive',
        my_credits: 'Producer, Filming Editing, Graphics',
        production_company: 'Daniel Bonner',
        project_year: '2020',
        description: ``,
        resourceLink: 'https://vimeo.com/638476193',
        thumbnail: 'assets/images/projects/nova.png',
      },
    ],
  }),
  actions: {},
  getters: {
    getProjectById(state) {
      return (projectID) =>
        state.projects.find((proj) => proj.id === projectID);
    },
    getProjectNeighborIds(state) {
      return (projectID) => {
        const project = state.projects.find((proj) => proj.id === projectID);
        const index = state.projects.indexOf(project);

        const neighborIds = {
          previous: index === 0 ? null : state.projects[index - 1].id,
          next:
            index === state.projects.length - 1
              ? null
              : state.projects[index + 1].id,
        };

        return neighborIds;
      };
    },
  },
});
