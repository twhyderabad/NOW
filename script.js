const app = new Vue({
  el: "#app",
  data: {
    eventData: {
      theme: "Embracing possibilities",
      desc: `\nWe talk about getting out of our comfort zone and facing impossible opportunities without fear. But in our journey we realise that there are many more obstacles than we had thought. Many of us stop at these and don’t move forward. But, there are some of us who __‘Embrace’__ these __possibilities__ with a giant leap of faith.
      \n We at Thoughtworks believe in (tell the vision)\nN.O.W. stands for Network Of Women, an initiative by ThoughtWorks India to nurture a growing and connected community of women. N.O.W. is a forum for women looking to be part of an open and inclusive community, to come together, learn from each other and be inspired.    
        `,
      date: "7th March, 2020",
      agenda: [
        {
          name: "Registrations",
          timings: "9:00 AM - 9:30 AM"
        },
        {
          name: "Keynote",
          timings: "9:30 AM - 10:00 AM"
        },
        {
          name: "Speaker 1",
          timings: "10:00 AM - 10:45 AM"
        },
        {
          name: "Break (Tea + Snacks)",
          timings: "10:45 AM - 11:00 AM"
        },
        {
          name: "Speaker 2",
          timings: "11:00 AM - 11:45 AM"
        },
        {
          name: "Ice Breaker",
          timings: "11:45 AM - 12:00 PM"
        },
        {
          name: "Lunch",
          timings: "12:00 PM - 12:30 PM"
        },
        {
          name: "Panel Discussion",
          timings: "01:30 PM - 02:30 PM"
        },
        {
          name: "Feedback & Networking",
          timings: "02:30 PM"
        }
      ],
      speakers: [
        {
          name: "Nayana Udipi",
          description: `Nayana Udipi is currently part of ThoughtWorks' India marketing team. Prior to ThoughtWorks, Nayana worked
          with Sangama, an NGO that works to secure the rights of sexual minorities. Nayana's progressive thought is a
          regular feature at LGBTQI related conferences, workshops and panel discussions.`,
          imageName: "NOW-Insta_TW-NOW-Nayana.jpg"
        },
        {
          name: "Dr. Shanta Thoutam",
          description: `Shanta is the Vice President of Corporate Innovation & Business Development at T-hub. As a Woman Innovation
          Leader in the largest Incubator of India, she has been supporting not only the overall entrepreneurial
          ecosystem to thrive, but also the Women Entrepreneurs, Women in Tech, and Girls in Tech on how to carve a
          niche for themselves.`,
          imageName: "NOW-Insta_TW-NOW-Shanta.jpg"
        },
        {
          name: "Rema Rajeshwari",
          description: `The Telangana Superintendent of Police wields her baton and pen with equal ease. Through her collaborative
          policing efforts, she encourages women to break gender stereotypes and empower them to emerge as leaders.
          She writes widely on policing, women, children, and the less fortunate with a passion for scholarly
          accuracy.`,
          imageName: "NOW-Insta_TW-NOW-Rema.jpg"
        },
        {
          name: "Dr. Vijaya Krishnan",
          description: `Dr. Vijaya Krishnan is a Certified Professional Midwife (CPM), and the co-founder and Director of The
          Sanctum, a Natural Birth Centre. She believes strongly that respectful maternity care is the most important
          key in helping women to have an informed and empowered child birth.`,
          imageName: "NOW-Insta_TW-NOW-Vijaya.jpg"
        },
        {
          name: "Anupama Dalmia",
          description: `Anupama Dalmia is a multiple award winning blogger, author, influencer, creative writing mentor and a
          multi-faceted entrepreneur. Her journey of having resigned from a lucrative IT job to pursue her passions
          and build a career from scratch has been covered extensively to motivate people to believe in themselves and
          never say “never”.`,
          imageName: "NOW-Insta_TW-NOW-Anupama.jpg"
        }
      ]
    }
  },
  computed: {
    desc() {
      return this.formatMarkdown(this.eventData.desc);
    }
  },
  methods: {
    formatMarkdown: str => marked(str, { sanitize: true })
  }
});
