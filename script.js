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
