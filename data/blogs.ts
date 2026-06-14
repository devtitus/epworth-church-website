export interface Blog {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  imageUrl: string;
}

export const blogs: Blog[] = [
  {
    id: "blog-001",
    title: "Navigating Faith in the Modern World",
    date: "2024-03-10",
    excerpt: "Exploring how timeless biblical truths apply perfectly to our fast-paced, technology-driven daily lives.",
    content: "<h1>Navigating Faith in the Modern World</h1><p>Living out our faith in today's context often feels like swimming against the current. The constant influx of information, the demands of the digital age, and the pace of modern society can leave us feeling disconnected.</p><p>However, the Gospel remains invariant. When we anchor ourselves to the practices of daily prayer, community fellowship, and scripture meditation, we find that God's word is just as applicable today as it was centuries ago. We must actively choose to create quiet moments in our routine.</p><p>Remember that Jesus routinely withdrew to solitary places to pray despite the crowds demanding His attention. We can model this in a world full of digital notifications.</p>",
    author: "Rev. Alvin Raj",
    tags: ["Faith", "Modern Life", "Daily Walk"],
    imageUrl: "/home/1.jpg"
  },
  {
    id: "blog-002",
    title: "The Heart of Worship",
    date: "2024-02-28",
    excerpt: "Worship is more than just Sunday songs. It's a lifestyle of reverence towards God in every action.",
    content: "<h1>The Heart of Worship</h1><p>When we think of worship, our minds frequently go straight to music, to Sunday mornings, to raised hands and singing voices. But true worship extends far beyond the sanctuary.</p><p>Paul writes in Romans 12:1 to offer our bodies as a living sacrifice, holy and pleasing to God—this is our true and proper worship. This means how we treat our coworkers, how we manage our finances, and how we care for our families can all be acts of worship.</p><p>Let us challenge ourselves this week to turn the mundane into the sacred by performing our daily tasks with a heart full of gratitude directed toward heaven.</p>",
    author: "Worship Team",
    tags: ["Worship", "Devotion", "Community"],
    imageUrl: "/home/1.jpg"
  },
  {
    id: "blog-003",
    title: "Building Stronger Families",
    date: "2024-02-15",
    excerpt: "Practical insights on structuring home life around Christ, focusing on family devotionals and shared prayers.",
    content: "<h1>Building Stronger Families</h1><p>The family unit is the foundational building block of the church and society. It is within the walls of our homes that the first seeds of faith are planted in the next generation.</p><p>We highly recommend setting aside just 10 minutes an evening for a family devotional. Read a small verse, ask what it means, and pray together. It does not need to be a formal sermon.</p><p>By prioritizing Christ at the center of our households, we create resilient families capable of withstanding the trials of the world.</p>",
    author: "Family Life Ministry",
    tags: ["Family", "Youth", "Discipleship"],
    imageUrl: "/home/1.jpg"
  },
  {
    id: "blog-004",
    title: "Overcoming Anxiety Through Prayer",
    date: "2024-01-20",
    excerpt: "A look into Philippians 4 and how turning our worries into prayers can grant us incomprehensible peace.",
    content: "<h1>Overcoming Anxiety Through Prayer</h1><p>Anxiety is an epidemic in our time. The uncertainties of tomorrow can paralyze us. Yet, scripture offers a profound remedy.</p><p>'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.' (Philippians 4:6).</p><p>This is not a guarantee that the situations causing us stress will immediately vanish, but rather a promise that the peace of God, which transcends all understanding, will guard our hearts and minds. When you feel worry creeping in, immediately turn it into a prayer.</p>",
    author: "Rev. Alvin Raj",
    tags: ["Mental Health", "Prayer", "Faith"],
    imageUrl: "/home/1.jpg"
  }
];

// Sort blogs by date (newest first)
export const sortedBlogs = blogs.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
