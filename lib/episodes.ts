export interface AudioFile {
  src: string;
  type: string;
}

export interface Link {
  href: string;
  label: string;
}

export interface Episode {
  /** e.g. "ep1" – also used as the URL segment */
  slug: string;
  number: number;
  title: string;
  date: string;
  description: string;
  /** path relative to /public – e.g. "/ep1/thumb.jpg" */
  thumb: string;
  /** Participants shown on the episode page (filenames without extension) */
  participants: string[];
  /** Audio episode – provide audioFiles */
  audioFiles?: AudioFile[];
  /** Optional legacy SoundCloud link */
  soundcloudUrl?: string;
  /** Optional link dump shown below the player */
  linkDump?: Link[];
  /** YouTube episode – provide youtubeId */
  youtubeId?: string;
  /** Full YouTube allow string when the embed has extra permissions */
  youtubeAllow?: string;
}

export const episodes: Episode[] = [
  {
    slug: "ep11",
    number: 11,
    title: "Episode 11",
    date: "29th December 2022",
    description: "The SamCast is finding out what makes them happy.",
    thumb: "/ep11/thumb.png",
    participants: ["darragh", "killian", "kevin", "austin", "glenn", "sam"],
    youtubeId: "gfE6mCRcrgU",
    youtubeAllow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  },
  {
    slug: "ep10",
    number: 10,
    title: "Episode 10",
    date: "22nd July 2021",
    description: "The SamCast is playing Narrative Telephone.",
    thumb: "/ep10/thumb.png",
    participants: ["darragh", "emma", "anne", "sam", "austin", "glenn", "kevin"],
    youtubeId: "58s3SvBkKzw",
    youtubeAllow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  },
  {
    slug: "ep9",
    number: 9,
    title: "Episode 9",
    date: "31st December 2020",
    description:
      "Austin is running the show on this year's SamCast and it's our longest one yet.",
    thumb: "/ep9/thumb.jpg",
    participants: ["austin", "emma", "darragh", "anne", "glenn", "killian", "kevin"],
    audioFiles: [{ src: "/ep9/samcast2020.mp3", type: "audio/mpeg" }],
  },
  {
    slug: "ep8",
    number: 8,
    title: "Episode 8",
    date: "7th December 2019",
    description: "The SamCast game show is back",
    thumb: "/ep8/thumb.jpg",
    participants: ["darragh", "emma", "kevin", "killian", "glenn"],
    audioFiles: [
      { src: "/ep8/samcast8.ogg", type: "audio/ogg" },
      { src: "/ep8/samcast8.mp3", type: "audio/mpeg" },
    ],
  },
  {
    slug: "ep7",
    number: 7,
    title: "Episode 7",
    date: "31st December 2018",
    description:
      "Something is not quite right in 2018's last minute SamCast",
    thumb: "/ep7/thumb.jpg",
    participants: [
      "sam",
      "austin",
      "emma",
      "kevin",
      "glenn",
      "anne",
      "jhd",
      "darragh",
      "killian",
    ],
    audioFiles: [{ src: "/ep7/samcast7.ogg", type: "audio/ogg" }],
  },
  {
    slug: "ep6",
    number: 6,
    title: "Episode 6",
    date: "1st May 2017",
    description: "Emma's Travel Vlog",
    thumb: "/ep6/thumb.jpg",
    participants: ["emma", "sam", "glenn"],
    youtubeId: "1udjZvW9xEw",
    youtubeAllow:
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  },
  {
    slug: "ep5",
    number: 5,
    title: "Episode 5",
    date: "9th March 2016",
    description: "Sam vs Killian: 1v1 in Dota 2",
    thumb: "/ep5/thumb.jpg",
    participants: [
      "darragh",
      "kevin",
      "anne",
      "glenn",
      "emma",
      "sam",
      "killian",
    ],
    youtubeId: "J5txxfh7hz0",
  },
  {
    slug: "ep4",
    number: 4,
    title: "Episode 4",
    date: "30th November 2015",
    description: "We play video games on this year's SamCast",
    thumb: "/ep4/thumb.png",
    participants: [
      "darragh",
      "kevin",
      "anne",
      "sam",
      "austin",
      "jhd",
      "killian",
    ],
    youtubeId: "xSNLY8Aq-hg",
  },
  {
    slug: "ep3",
    number: 3,
    title: "Episode 3",
    date: "3rd December 2013",
    description:
      "Space and Ice. Possible spoilers for Gravity, Sherlock and Thor: The Dark World.",
    thumb: "/media/mancast.png",
    participants: ["emma", "kevin", "austin", "darragh", "sam"],
    audioFiles: [
      { src: "/ep3/samcast3.ogg", type: "audio/ogg" },
      { src: "/ep3/samcast3.mp3", type: "audio/mpeg" },
    ],
    linkDump: [
      {
        href: "",
        label: "Not sure if there's anything that needs to be linked this time.",
      },
    ],
  },
  {
    slug: "ep2",
    number: 2,
    title: "Episode 2",
    date: "29th September 2013",
    description:
      "Darragh is sick, Emma gets talked over, Glenn has a squeaky chair and we cure HIV",
    thumb: "/ep2/thumb.jpg",
    participants: [
      "emma",
      "kevin",
      "glenn",
      "anne",
      "jhd",
      "darragh",
      "sam",
    ],
    audioFiles: [
      { src: "/ep2/samcast2.ogg", type: "audio/ogg" },
      { src: "/ep2/samcast2.mp3", type: "audio/mpeg" },
    ],
    linkDump: [
      { href: "http://en.wikipedia.org/wiki/Octal", label: "Octal" },
      {
        href: "https://www.youtube.com/watch?v=0PmCU_Y9YDU",
        label: "Richard Hammond Crash",
      },
      {
        href: "http://i.dailymail.co.uk/i/pix/2010/09/28/article-1315518-0B60D492000005DC-924_468x417.jpg",
        label: "Segway CEO Die-agram",
      },
      {
        href: "http://i.imgur.com/kjt9cLn.jpg",
        label: "Emma's Warning Sign",
      },
      { href: "http://i.imgur.com/dG4UNP8.jpg", label: "Pug on a horse" },
      { href: "http://i.imgur.com/v5Eftay.jpg", label: "Derpy Pug" },
      {
        href: "http://images.fineartamerica.com/images-medium-large/serene-pug-in-sun-max-adams.jpg",
        label: "Serene Pug",
      },
      { href: "http://i.imgur.com/7MdhIQh.png", label: "Glenn's Inbred" },
      {
        href: "http://www.funnysigns.net/files/falling-cows.jpg",
        label: "Falling Cows",
      },
    ],
  },
  {
    slug: "ep1",
    number: 1,
    title: "Episode 1",
    date: "26th August 2013",
    description:
      "Premiere Episode of the SamCast: Steins;Gate and Bottled Water.",
    thumb: "/ep1/thumb.jpg",
    participants: [
      "glenn",
      "anne",
      "killian",
      "sam",
      "darragh",
      "emma",
      "kevin",
    ],
    audioFiles: [
      { src: "/ep1/samcast1.ogg", type: "audio/ogg" },
      { src: "/ep1/samcast1.mp3", type: "audio/mpeg" },
    ],
    soundcloudUrl: "http://snd.sc/16qQz0p",
    linkDump: [
      {
        href: "http://www.twitch.tv/sing_sing",
        label: "Sing's Twitch",
      },
      {
        href: "http://www.imdb.com/title/tt0862467/",
        label: "Valhalla Rising",
      },
      { href: "http://blog.dota2.com/", label: "Dota 2" },
      {
        href: "http://www.reddit.com/r/DotA2/comments/1kcwwm/singsing_i_think_i_win_the_puppey_war/",
        label: "Emma vs SingSing",
      },
      {
        href: "http://en.wikipedia.org/wiki/Fatal_Attraction#Bunny_boiler",
        label: "Bunny Boiler",
      },
      {
        href: "http://en.wikipedia.org/wiki/List_of_Steins;Gate_episodes",
        label: "Steins;Gate",
      },
      {
        href: "https://www.youtube.com/watch?v=gjTzz8cOxBU",
        label: "Steins;Gate Killian's Video",
      },
      {
        href: "http://www.twitch.tv/fiquem",
        label: "Emma's Twitch Stream",
      },
      {
        href: "http://en.wikipedia.org/wiki/Slippery_nipple",
        label: "Slippery Nipple Cocktail",
      },
      { href: "http://en.wikipedia.org/wiki/Poland", label: "Poland" },
      {
        href: "http://en.wikipedia.org/wiki/Kaizers_Orchestra",
        label: "Kaizers Orchestra",
      },
      {
        href: "http://www.urbandictionary.com/define.php?term=silver%20fox",
        label: "Silver Fox",
      },
      {
        href: "https://lh6.googleusercontent.com/-VSaNCiNnn8w/TYlUsFAI31I/AAAAAAAAAD8/tc2IKd5N-_s/s320/walrus.jpg",
        label: "Walrus Mustache",
      },
      {
        href: "http://en.wikipedia.org/wiki/Jamie_Hyneman",
        label: "Jaime Hyneman",
      },
      {
        href: "http://en.wikipedia.org/wiki/Europa_Universalis_IV",
        label: "Europa Universalis 4",
      },
      { href: "https://www.humblebundle.com/", label: "Humble Bundle" },
      {
        href: "http://en.wikipedia.org/wiki/Burnout_Paradise",
        label: "Burnout Paradise",
      },
      {
        href: "http://en.wikipedia.org/wiki/Burnout_3:_Takedown",
        label: "Burnout 3",
      },
      {
        href: "http://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Ocarina_of_Time",
        label: "Ocarina of Time",
      },
      {
        href: "http://en.wikipedia.org/wiki/The_Elder_Scrolls_III:_Morrowind",
        label: "Morrowind",
      },
      {
        href: "http://en.wikipedia.org/wiki/Bethesda_Game_Studios",
        label: "Bethesda Game Studios",
      },
      {
        href: "http://en.wikipedia.org/wiki/Cowboy_Bebop",
        label: "Cowboy Bebop",
      },
      { href: "http://i.imgur.com/1dY80Bd.jpg", label: "Saminerals" },
    ],
  },
];

/** Look up a single episode by its slug (e.g. "ep1"). */
export function getEpisode(slug: string): Episode | undefined {
  return episodes.find((ep) => ep.slug === slug);
}
