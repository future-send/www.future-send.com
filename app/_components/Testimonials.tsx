import { Roboto_Condensed, Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { Quote } from "lucide-react";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto-condensed",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Bebas Neue supporta solo un peso (400)
  variable: "--font-bebas-neue",
});

export default function Testimonials() {
  const testimonials = [
    {
      name: "Adam Wilson",
      title: "Director - Design Studio and Operations",
      company: "Edward Jones",
      description: "Cris brings clarity and precision to every UX/UI challenge. His designs are thoughtful, intuitive, and consistently raise the bar for our digital experiences.",
      image: "/testimonials/adamWilson.jpeg",
    },
    {
      name: "Katie Houst",
      title: "VP, Creative Service",
      company: "Arbor Realty Trust",
      description: "Cris has a rare ability to bridge creative vision with seamless web development. His builds are not only pixel-perfect but technically sound, scalable, and delivered with precision.",
      image: "/testimonials/katieHoust.jpeg",
    },
    {
      name: "Joe Clote",
      title: "CEO / Group Publisher",
      company: "Publishing Concepts, LLC",
      description: "Cris brings our brand to life with marketing and print designs that are not only visually compelling but also thoughtfully aligned with our business goals.",
      image: "/testimonials/joeClote.jpeg",
    },
  ];

  return (
    <section className={`relative pb-24  ${robotoCondensed.variable} ${bebasNeue.variable}`}>
      <div className="relative z-10 container mx-auto py-16">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-neutral-800/20 backdrop-blur-sm border border-neutral-800 rounded-lg p-8 hover:border-neutral-600 transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-neutral-500 to-neutral-700 p-3 rounded-full">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="pt-6">
                <p className="text-neutral-300 text-xl text-left mb-6 font-[family-name:var(--font-roboto-condensed)]">"{testimonial.description}"</p>

                {/* Client Info */}
                <div className="flex items-center space-x-4 text-left">
                  <div className="relative">
                    <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} width={60} height={60} className="rounded-full border-2 border-slate-600" />
                    {/* <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-800"></div> */}
                  </div>
                  <div>
                    <h4 className="text-neutral-400 font-semibold text-2xl font-[family-name:var(--font-bebas-neue)]">{testimonial.name}</h4>
                    <p className="text-neutral-400 font-medium">{testimonial.title}</p>
                    <p className="text-neutral-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
