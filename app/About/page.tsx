import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center text-black p-6 font-Judson">
      <div className="max-w-4xl text-center animate-bounceIn">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-6">
          Welcome to my blog! I’m passionate about technology, coding, and everything related to the digital world. On this platform, I share my knowledge and insights about the latest tech trends, blogs and much more.
        </p>
        <p className="text-lg mb-6">
          My primary focus is on web development technologies such as JavaScript,TypesScript, React, Next.js, and others. I love exploring new concepts and tools in the development ecosystem and strive to make learning easy and accessible for everyone.
        </p>
        <div className="relative w-48 h-48 mx-auto mb-6">
          <Image
            src="/display.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl animate-bounceIn"
          />
        </div>
        <p className="text-lg">
          I hope you enjoy the content here. Feel free to leave your comments, share your thoughts, or connect with me through social media. Thanks for stopping by!
        </p>
      </div>
    </div>
  );
}
