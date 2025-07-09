import Image from "next/image";

const jobs = [
  {
    title: "Technical Support Specialist",
    type: "PART-TIME",
    typeColor: "text-green-600 bg-green-100",
    salary: "20,000 INR – 25,000 INR",
    company: "Google Inc.",
    location: "New Delhi, India",
    logo: "/globe.svg",
    applicants: "10+ applicants",
    avatars: [
      "/vercel.svg",
      "/next.svg",
      "/window.svg"
    ],
  },
  {
    title: "Senior UI/UX Designer",
    type: "FULL-TIME",
    typeColor: "text-purple-600 bg-purple-100",
    salary: "$30,000 – $55,000",
    company: "Apple",
    location: "Boston, USA",
    logo: "/file.svg",
    applicants: "9+ applicants",
    avatars: [
      "/vercel.svg",
      "/next.svg",
      "/window.svg"
    ],
  },
  {
    title: "Marketing Officer",
    type: "PART-TIME",
    typeColor: "text-purple-600 bg-purple-100",
    salary: "15,000 INR – 35,000 INR",
    company: "Intel Corp",
    location: "Bangalore, India",
    logo: "/globe.svg",
    applicants: "30+ applicants",
    avatars: [
      "/vercel.svg",
      "/next.svg",
      "/window.svg"
    ],
  },
];

export function FeaturedJobs() {
  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
        <p className="text-muted-foreground text-lg">Choose jobs from the top employers and apply for the same.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-18 mb-18">
        {jobs.map((job, idx) => (
          <div key={idx} className="bg-violet-50 rounded-xl shadow-sm p-8 w-full max-w-sm flex flex-col relative">
            {/* Bookmark icon */}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-violet-600">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-5-7 5V5z"/></svg>
            </button>
            <div className="mb-2 flex items-center gap-2">
              <span className={`text-xs font-bold px-2 py-1 rounded ${job.typeColor}`}>{job.type}</span>
              <span className="text-xs text-gray-500">Salary: {job.salary}</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
            <div className="flex items-center gap-2 mb-2">
              <Image src={job.logo} alt="logo" width={28} height={28} />
              <div>
                <div className="font-medium text-sm">{job.company}</div>
                <div className="text-xs text-gray-500">{job.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-2">
                {job.avatars.map((a, i) => (
                  <Image key={i} src={a} alt="avatar" width={24} height={24} className="rounded-full border-2 border-white" />
                ))}
              </div>
              <span className="text-xs text-gray-500">{job.applicants}</span>
            </div>
            <div className="flex gap-2 mt-auto">
              <button className="border border-violet-600 text-violet-600 font-medium rounded px-4 py-2 text-sm">View details</button>
              <button className="bg-violet-600 text-white font-medium rounded px-4 py-2 text-sm">Apply now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href="#" className="text-violet-700 font-medium underline text-lg">View all</a>
      </div>
    </section>
  );
} 