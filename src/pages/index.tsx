import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="grid min-h-screen place-items-center bg-vampire-black text-seasalt">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="mx-auto mb-10 max-w-[995px] !whitespace-normal big-title">
                                Hi, I am Khoa Phan!
                            </h1>

                            <p className="mx-auto mb-12 max-w-md small-title md:max-w-[700px]">
                                This is my personal website. Feel free to
                                explore! &#128512;
                            </p>
                            <div className="flex items-center justify-center gap-x-5 gap-y-5">
                                <Link
                                    className="rounded-full bg-seasalt px-4 pb-2 pt-3 font-bold text-vampire-black transition duration-300 hover:animate-wiggle"
                                    href={"/ui-collection"}
                                >
                                    UI Collections
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
