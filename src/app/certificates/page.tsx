import { Certificate, certificates } from "../data/certificates";
import { formatDate } from "../utils/date";

export default function Certificates() {
    return (
        <section id="certificates">
            <div className="flex flex-row justify-center min-h-screen p-8 py-24 gap-8 sm:px-8 font-[family-name:var(--font-geist-sans)]">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center gap-2 pb-4 text-zinc-800 dark:text-zinc-100">
                            <h1 className="text-4xl font-bold">Certificates & Courses</h1>
                            <span className="px-7 py-1 rounded-full bg-teal-500"></span>
                        </div>
                        <p className="text-base text-zinc-700 dark:text-zinc-300">
                            Here’s where you’ll get to know me better — what I’m working on, what I love to build, and the tech stack I work with every day.
                        </p>
                    </div>
                    <div className="flex">
                        <ul className="flex flex-row flex-wrap space-y-6">
                            {certificates.map((cert: Certificate, idx) => (
                                <li key={idx} className="p-4 rounded shadow">
                                    <div className="flex flex-col gap-2">
                                        <div className=""></div>
                                        <div className="">
                                            <span>{cert.title}</span>
                                        </div>
                                        <div>
                                            <span>{cert.issuer} | {formatDate(cert.issueDate)}</span>
                                        </div>
                                        <div>
                                            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                {cert.linkDisplayText}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}