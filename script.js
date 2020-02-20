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
          name: "Energiser",
          timings: "11:45 AM - 12:15 PM"
        },
        {
          name: "Speaker 3",
          timings: "12:15 PM - 01:00 PM"
        },
        {
          name: "Lunch",
          timings: "01:00 PM - 02:00 PM"
        },
        {
          name: "Workshop",
          timings: "02:00 PM - 03:00 PM"
        },
        {
          name: "OpenMic, Feedback & Networking",
          timings: "03:00 PM"
        }
      ],
      speakers: [
        {
          name: "Aruna kappagantula",
          description: `Aruna kappagantula is a serial social entrepreneur, Her first enterprise“
          Bamboo house India”(BHI) which specializes in  creating low cost bamboo shelters, resulting in a sustainable livelihood,  
          “Recycled India” works in creating plastic waste to low cost shelters which otherwise would end up in landfills and water bodies.
          BHI business models have been globally recognized with universities like Harvard, Cornell, Kellogg. 
          She has been featured in over 1000 magazines, newspapers and TV channels. Her innovative business models have touched more than 75000 livelihoods till date.
          `,
          imageName: "Aruna.png"
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
          name: "Tanuja Abburi",
          description: `Tanuja is known for many noteworthy milestones and contributions towards the development and nurturing of talent. 
          With Executive Management Degree from Cornell University, She has played key leadership roles in organizations like NTT Data, GE, 
          Bank of America with her career spanning more than 20 years in Human resources. She is an entrepreneur and founder of Beyond Pinks, 
          leveraged her passion and expertise in talent development to provide a support system for women to sustain their career,
          return to their jobs and flourish.`,
          imageName: "Tanuja.png"
        },
        {
          name: "Vasuki Balasubramanian",
          description: `Vasuki is born in to an orthodox family, began her movie career at the age of 14 with the prestigious director Mr. K.Balachander.
          Managed academics and cinema successfully and completed BA English literature and secured a state award  for best supporting actress.
          Finished her MBA with ICFAI and a mother of two kids, Experienced the IT industry  while working as an HR recruiter in Google for 3 years. 
          Today, she is the director of Ealain Events Private LTD, her passion towards successfully exploring multiple fields would always let someone be inspired.`,
          imageName: "Vasuki.png"
        },
        {
          name: "Gunjan Shukla",
          description: `Gunjan's growth at ThoughtWorks is linked to the several caps that she has donned,
          Starting from Business Analyst to Demand Operations Lead for India. She is a senior management professional with
          proven expertise in building business and delivering technology programs. `,
          imageName: "gunjan.png"
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
