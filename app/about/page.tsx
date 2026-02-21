import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind The SamCast.",
  openGraph: {
    title: "About Us | The SamCast",
    description: "Meet the team behind The SamCast.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

const people = [
  {
    name: "Samuel Mardirosian",
    photo: "/media/peeps/sam.jpg",
    bio: "Our often absent leader and host. Sam loves bugs and books.",
  },
  {
    name: "Darragh Hickey",
    photo: "/media/peeps/darragh.jpg",
    bio: "Darragh tells his barber he is from Cincinatti, Ohio. This is a lie.",
  },
  {
    name: "Dr. Emma Carrigan",
    photo: "/media/peeps/emma.jpg",
    bio: "Among Emma's greatest achievements she lists finishing her PhD and having a better time than Sam in SuperHexagon",
  },
  {
    name: "Glenn Jackson",
    photo: "/media/peeps/glenn.jpg",
    bio: "Glenn has been referred to as the group mom, the grumpy one and the jazz guy.",
  },
  {
    name: "Anne Wang, MD",
    photo: "/media/peeps/anne.jpg",
    bio: "Anne doesn't actually hold an MD, but a BSc. Someone should tell the hospital she works at.",
  },
  {
    name: "Kevin Cardiff",
    photo: "/media/peeps/kevin.jpg",
    bio: "Kevin brings a voice of reason and a wealth of Fire Emblem knowledge to the group dynamic.",
  },
  {
    name: "Killian McCabe",
    photo: "/media/peeps/killian.jpg",
    bio: "Like a Lovecraftian myth, Killian is indescribable. Also he likes anime.",
  },
  {
    name: "Austin O'Halloran",
    photo: "/media/peeps/austin.jpg",
    bio: "Resident extrovert and loud boy, Austin's favourite activity is to touch ocean.",
  },
  {
    name: "Jonathan Hennessey Doyle",
    photo: "/media/peeps/jhd.jpg",
    bio: "An enigmatic person. JHD can often be found hiding within a skeleton friend.",
  },
];

export default function AboutPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Who is we?</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {people.map((person) => (
          <div
            key={person.name}
            className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 rounded-xl p-4 gap-3"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-200">
              <Image
                src={person.photo}
                alt={person.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-600 mt-1">{person.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
