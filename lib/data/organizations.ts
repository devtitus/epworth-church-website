export interface Leader {
  name: string;
  title: string;
  image?: string;
}

export interface Activity {
  title: string;
  description: string;
}

export interface Organization {
  slug: string;
  aboutTitle: string;
  aboutContent: string[];
  activitiesTitle: string;
  activities: Activity[];
  leadersTitle: string;
  leaders: Leader[];
  noteTitle: string;
  noteContent: string[];
  noteAuthor: string;
  activitiesGridTitle: string;
  galleryTitle: string;
}

export const organizations: Record<string, Organization> = {
  "sunday-school": {
    slug: "sunday-school",
    aboutTitle: "About Sunday School",
    aboutContent: [
      "Our Sunday School ministry is dedicated to teaching children the foundational truths of God's Word. Through interactive lessons, songs, and activities, we help young minds grow in faith and understanding.",
      "We believe that children are a blessing from the Lord, and we are committed to providing a safe, loving environment where they can learn about Jesus Christ and develop a personal relationship with Him.",
    ],
    activitiesTitle: "What We Do",
    activities: [
      {
        title: "Bible Studies",
        description: "Age-appropriate lessons from Scripture",
      },
      {
        title: "Worship Songs",
        description: "Learning hymns and contemporary Christian music",
      },
      {
        title: "Craft Activities",
        description: "Creative projects to reinforce biblical lessons",
      },
      {
        title: "Memory Verses",
        description: "Memorizing and understanding God's Word",
      },
    ],
    leadersTitle: "Our Team",
    leaders: [
      { name: "Teacher Name", title: "Sunday School Superintendent" },
      { name: "Teacher Name", title: "Class Teacher - Ages 4-6" },
      { name: "Teacher Name", title: "Class Teacher - Ages 7-12" },
    ],
    noteTitle: "A Note From Sunday School",
    noteContent: [
      "Lorem ipsum dolor sit amet consectetur. Accumsan facilisis eget eget egestas quis eu quam aenean. Mattis urna eget ipsum non vivamus placerat placerat. Dictumst dis interdum eros ipsum auctor aliquam. Quam nibh tristique velit tristique volutpat felis dictumst.",
      "Pellentesque vel tellus dui volutpat mattis. Sem consectetur massa feugiat vulputate penatibus sem ornare dignissim. Nam mattis penatibus eu aliquet rhoncus enim nulla. Quis sagittis dolor ut in lacus non. Sed viverra vitae feugiat vestibulum mauris. Accumsan cras lacus vitae nulla.",
      "Malesuada ipsum et eu ipsum lorem. Mauris pulvinar adipiscing duis risus turpis ac scelerisque. Etiam adipiscing cursus vitae lectus sagittis commodo. Mattis lectus habitant ligula aliquam.",
    ],
    noteAuthor: "Sunday School Superintendent",
    activitiesGridTitle: "Know More About Us",
    galleryTitle: "Our Photos",
  },
  emteens: {
    slug: "emteens",
    aboutTitle: "About EMTeens",
    aboutContent: [
      "EMTeens is our youth ministry for teenagers aged 13-18. We provide a safe space for young people to ask questions, explore their faith, and build lasting friendships.",
      "Our goal is to equip teens with the tools they need to navigate the challenges of adolescence while staying rooted in biblical truth and Christian values.",
    ],
    activitiesTitle: "Our Programs",
    activities: [
      {
        title: "Youth Fellowship",
        description: "Weekly meetings for worship and Bible study",
      },
      {
        title: "Service Projects",
        description: "Serving the community together",
      },
      { title: "Retreats", description: "Annual camps and weekend getaways" },
      {
        title: "Mentorship",
        description: "One-on-one guidance from mature believers",
      },
    ],
    leadersTitle: "Youth Leaders",
    leaders: [
      { name: "Leader Name", title: "Youth Pastor" },
      { name: "Leader Name", title: "Youth Coordinator" },
      { name: "Leader Name", title: "Youth Worker" },
    ],
    noteTitle: "A Note From EMTeens",
    noteContent: [
      "Lorem ipsum dolor sit amet consectetur. Accumsan facilisis eget eget egestas quis eu quam aenean. Mattis urna eget ipsum non vivamus placerat placerat. Dictumst dis interdum eros ipsum auctor aliquam. Quam nibh tristique velit tristique volutpat felis dictumst.",
      "Pellentesque vel tellus dui volutpat mattis. Sem consectetur massa feugiat vulputate penatibus sem ornare dignissim. Nam mattis penatibus eu aliquet rhoncus enim nulla. Quis sagittis dolor ut in lacus non. Sed viverra vitae feugiat vestibulum mauris. Accumsan cras lacus vitae nulla.",
      "Malesuada ipsum et eu ipsum lorem. Mauris pulvinar adipiscing duis risus turpis ac scelerisque. Etiam adipiscing cursus vitae lectus sagittis commodo. Mattis lectus habitant ligula aliquam.",
    ],
    noteAuthor: "Youth Pastor",
    activitiesGridTitle: "Know More About Us",
    galleryTitle: "Our Photos",
  },
  myf: {
    slug: "myf",
    aboutTitle: "About MYF",
    aboutContent: [
      "The Methodist Youth Fellowship (MYF) is designed for young adults who want to deepen their faith and develop leadership skills within the church community.",
      "Through fellowship, Bible study, and service opportunities, MYF members grow together in Christ while making a positive impact in our church and beyond.",
    ],
    activitiesTitle: "Get Involved",
    activities: [
      {
        title: "Weekly Meetings",
        description: "Fellowship and spiritual growth",
      },
      {
        title: "Community Service",
        description: "Outreach programs and charity work",
      },
      {
        title: "Leadership Training",
        description: "Developing skills for church leadership",
      },
      {
        title: "Social Events",
        description: "Building friendships through fun activities",
      },
    ],
    leadersTitle: "MYF Leaders",
    leaders: [
      { name: "Leader Name", title: "MYF President" },
      { name: "Leader Name", title: "Vice President" },
      { name: "Leader Name", title: "Secretary" },
    ],
    noteTitle: "A Note From MYF",
    noteContent: [
      "Lorem ipsum dolor sit amet consectetur. Accumsan facilisis eget eget egestas quis eu quam aenean. Mattis urna eget ipsum non vivamus placerat placerat. Dictumst dis interdum eros ipsum auctor aliquam. Quam nibh tristique velit tristique volutpat felis dictumst.",
      "Pellentesque vel tellus dui volutpat mattis. Sem consectetur massa feugiat vulputate penatibus sem ornare dignissim. Nam mattis penatibus eu aliquet rhoncus enim nulla. Quis sagittis dolor ut in lacus non. Sed viverra vitae feugiat vestibulum mauris. Accumsan cras lacus vitae nulla.",
      "Malesuada ipsum et eu ipsum lorem. Mauris pulvinar adipiscing duis risus turpis ac scelerisque. Etiam adipiscing cursus vitae lectus sagittis commodo. Mattis lectus habitant ligula aliquam.",
    ],
    noteAuthor: "MYF President",
    activitiesGridTitle: "Know More About Us",
    galleryTitle: "Our Photos",
  },
  wscs: {
    slug: "wscs",
    aboutTitle: "About WSCS",
    aboutContent: [
      "The Women's Service and Christian Fellowship (WSCS) is a ministry dedicated to the spiritual growth and fellowship of women in our church community.",
      "Through prayer, Bible study, and service projects, WSCS provides a supportive environment where women can encourage one another in their faith journey.",
    ],
    activitiesTitle: "Our Ministry",
    activities: [
      {
        title: "Prayer Meetings",
        description: "Interceding for our church and community",
      },
      { title: "Bible Study", description: "Deep dive into God's Word" },
      { title: "Women's Retreat", description: "Annual spiritual retreats" },
      {
        title: "Community Outreach",
        description: "Serving women and families in need",
      },
    ],
    leadersTitle: "WSCS Committee",
    leaders: [
      { name: "Leader Name", title: "President" },
      { name: "Leader Name", title: "Vice President" },
      { name: "Leader Name", title: "Secretary" },
    ],
    noteTitle: "A Note From WSCS",
    noteContent: [
      "Lorem ipsum dolor sit amet consectetur. Accumsan facilisis eget eget egestas quis eu quam aenean. Mattis urna eget ipsum non vivamus placerat placerat. Dictumst dis interdum eros ipsum auctor aliquam. Quam nibh tristique velit tristique volutpat felis dictumst.",
      "Pellentesque vel tellus dui volutpat mattis. Sem consectetur massa feugiat vulputate penatibus sem ornare dignissim. Nam mattis penatibus eu aliquet rhoncus enim nulla. Quis sagittis dolor ut in lacus non. Sed viverra vitae feugiat vestibulum mauris. Accumsan cras lacus vitae nulla.",
      "Malesuada ipsum et eu ipsum lorem. Mauris pulvinar adipiscing duis risus turpis ac scelerisque. Etiam adipiscing cursus vitae lectus sagittis commodo. Mattis lectus habitant ligula aliquam.",
    ],
    noteAuthor: "WSCS President",
    activitiesGridTitle: "Know More About Us",
    galleryTitle: "Our Photos",
  },
  "methodist-men": {
    slug: "methodist-men",
    aboutTitle: "About Methodist Men",
    aboutContent: [
      "The Methodist Men fellowship brings together men of all ages to grow in faith, build strong friendships, and serve our church and community.",
      "Through regular meetings, study groups, and service projects, we strive to be men of integrity who lead by example in our homes, workplaces, and church.",
    ],
    activitiesTitle: "Our Activities",
    activities: [
      {
        title: "Men's Fellowship",
        description: "Weekly meetings for encouragement and accountability",
      },
      { title: "Bible Study", description: "Studying Scripture together" },
      {
        title: "Service Projects",
        description: "Church maintenance and community service",
      },
      {
        title: "Family Ministry",
        description: "Supporting families and fathers",
      },
    ],
    leadersTitle: "Fellowship Leaders",
    leaders: [
      { name: "Leader Name", title: "President" },
      { name: "Leader Name", title: "Vice President" },
      { name: "Leader Name", title: "Secretary" },
    ],
    noteTitle: "A Note From Methodist Men",
    noteContent: [
      "Lorem ipsum dolor sit amet consectetur. Accumsan facilisis eget eget egestas quis eu quam aenean. Mattis urna eget ipsum non vivamus placerat placerat. Dictumst dis interdum eros ipsum auctor aliquam. Quam nibh tristique velit tristique volutpat felis dictumst.",
      "Pellentesque vel tellus dui volutpat mattis. Sem consectetur massa feugiat vulputate penatibus sem ornare dignissim. Nam mattis penatibus eu aliquet rhoncus enim nulla. Quis sagittis dolor ut in lacus non. Sed viverra vitae feugiat vestibulum mauris. Accumsan cras lacus vitae nulla.",
      "Malesuada ipsum et eu ipsum lorem. Mauris pulvinar adipiscing duis risus turpis ac scelerisque. Etiam adipiscing cursus vitae lectus sagittis commodo. Mattis lectus habitant ligula aliquam.",
    ],
    noteAuthor: "Methodist Men President",
    activitiesGridTitle: "Know More About Us",
    galleryTitle: "Our Photos",
  },
  choir: {
    slug: "choir",
    aboutTitle: "About EMTC Choir",
    aboutContent: [
      "The EMTC Choir leads our congregation in praise and worship through beautiful music. We are blessed with talented singers who use their gifts to glorify God.",
      "Whether it's traditional hymns or contemporary worship songs, our choir helps create an atmosphere of reverence and joy during our services.",
    ],
    activitiesTitle: "Choir Ministry",
    activities: [
      {
        title: "Sunday Worship",
        description: "Leading music during Sunday services",
      },
      {
        title: "Special Programs",
        description: "Christmas, Easter, and special occasion programs",
      },
      {
        title: "Choir Practices",
        description: "Weekly rehearsals to perfect our worship",
      },
      {
        title: "Guest Performances",
        description: "Sharing worship at other churches and events",
      },
    ],
    leadersTitle: "Choir Leadership",
    leaders: [
      { name: "Leader Name", title: "Choir Director" },
      { name: "Leader Name", title: "Assistant Director" },
      { name: "Leader Name", title: "Pianist/Organist" },
    ],
    noteTitle: "A Note From EMTC Choir",
    noteContent: [
      "Lorem ipsum dolor sit amet consectetur. Accumsan facilisis eget eget egestas quis eu quam aenean. Mattis urna eget ipsum non vivamus placerat placerat. Dictumst dis interdum eros ipsum auctor aliquam. Quam nibh tristique velit tristique volutpat felis dictumst.",
      "Pellentesque vel tellus dui volutpat mattis. Sem consectetur massa feugiat vulputate penatibus sem ornare dignissim. Nam mattis penatibus eu aliquet rhoncus enim nulla. Quis sagittis dolor ut in lacus non. Sed viverra vitae feugiat vestibulum mauris. Accumsan cras lacus vitae nulla.",
      "Malesuada ipsum et eu ipsum lorem. Mauris pulvinar adipiscing duis risus turpis ac scelerisque. Etiam adipiscing cursus vitae lectus sagittis commodo. Mattis lectus habitant ligula aliquam.",
    ],
    noteAuthor: "Choir Director",
    activitiesGridTitle: "Know More About Us",
    galleryTitle: "Our Photos",
  },
};

export const organizationList = Object.values(organizations);