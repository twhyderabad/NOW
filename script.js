const app = new Vue({
  el: "#app",
  data: {
    eventData: {
      theme: "Embracing possibilities",
      desc: `We talk about getting out of our comfort zone and facing impossible opportunities without fear. But in our journey we realise that there are many more obstacles than we had thought. Many of us stop at these and don’t move forward. But, there are some of us who __‘embrace’__ these __‘possibilities’__ with a giant leap of faith.
      \nN.O.W. stands for Network Of Women, an initiative by ThoughtWorks India to nurture a growing and connected community of women. N.O.W. is a forum for women looking to be part of an open and inclusive community, to come together, learn from each other and be inspired.
      \n **Note: This is going to be an online event! Zoom webinar link will be shared to participants via email.**    
        `,
      date: "23rd May, 2020",
      agenda: [
        {
          name: "Keynote",
          timings: "10:00 AM - 10:20 AM"
        },
        {
          name: "Speaker 1",
          timings: "10:20 AM - 10:50 AM"
        },
        {
          name: "Personal branding",
          timings: "10:50 AM - 11:10 AM"
        },
        {
          name: "Break (Tea + Snacks)",
          timings: "11:10 AM - 11:20 AM"
        },
        {
          name: "Speaker 2",
          timings: "11:20 AM - 11:50 AM"
        },
        {
          name: "Workshop",
          timings: "11:50 AM - 12:50 PM"
        },
        {
          name: "Thank you note",
          timings: "12:50 PM"
        },
      ],
      speakers: [
        {
          name: "Gunjan Shukla",
          description: `Gunjan's growth at ThoughtWorks is linked to the several caps that she has donned, 
          Starting from Business Analyst to Demand Operations Lead for India. She is a senior management 
          professional with proven expertise in building business and delivering technology programs.`,
          imageName: "gunjan.png"
        },

        {
          name: "Mallika Bajaj",
          description: `She is Founder Director and CMO at Little Yellow Beetle Media Pvt Ltd. 
          Mallika completed her BA in Media and Communications at the University of Melbourne and went on to successfully pursue a Masters in Media and Communications from Goldsmiths, University of London, where she acquired knowledge, skills, and the confidence to establish her own company at 23.
          She's the youngest female in Asia to have set up 3 successful tech business's all under 30, Entrepreneur of the Year, India (2019).
          `,
          imageName: "Mallika.png"
        },
        {
          name: "Sweta Pittala",
          description: `Sweta Pittala is a ThoughtWorker with Management Consulting experience in Global markets.  She is a proud mom, mentor, and a coach who thinks strategically to define capabilities that organisations need to achieve superior commercial and customer outcomes. She enjoys problem-solving and applying data insights to business challenges.`,
          imageName: "sweta.jpg"
        },
        {
          name: "Vasuki Balasubramanian",
          description: `Vasuki was born in an orthodox family instead of which she began her movie career at the age of 14 with
          the prestigious director Mr. K.Balachander. She secured a state award for best supporting actress while pursuing BA
          in English literature. She finished her MBA from ICFAI  and worked as an HR recruiter for Google for 3 years.
          Today, she is the director of Ealain Events Pvt. Ltd.. She is also a mother of two. Her passion towards
          successfully exploring multiple fields is inspiring.`,
          imageName: "Vasuki.png"
        },
        {
          name: "Tanuja Abburi",
          description: `Tanuja is known for many noteworthy milestones and contributions towards the development and nurturing of talent. 
          With Executive Management Degree from Cornell University, She has played key leadership roles in organizations like NTT Data, GE, 
          Bank of America with her career spanning more than 20 years in Human resources. She is an entrepreneur and founder of Beyond Pinks, 
          leveraged her passion and expertise in talent development to provide a support system for women to sustain their career,
          return to their jobs and flourish.`,
          imageName: "Tanuja.png"
        },
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
