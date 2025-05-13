import Link from "next/link";

export default function Home() {
    return (
        <section id="home">
            <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="text-4xl font-bold">Hi, I'm Sethu Palaniyappan.</span>
                    <span className="text-2xl font-semibold"> Full Stack Engineer • Tech Lead • Cloud and AI Enthusiast</span>
                </div>
                <div>
                    <span className="text-lg text-justify">
                        With 10+ years of experience building scalable backend systems and modern web applications. Passionate about solving real-world problems through clean architecture, intuitive design, and strong product thinking.
                    </span>
                </div>
                <div className="flex flex-row items-center justify-center gap-16">
                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        <Link href="/#projects">Projects</Link>
                    </button>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        <Link href="/#uses">Download Resume</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}