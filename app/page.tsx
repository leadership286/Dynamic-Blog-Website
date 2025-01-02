"use client"
import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the card structure
interface Card {
  id: number;
  image: string;
  title: string;
  details: string;
}

export default function Blog() {
  // Instead of using a Record, using a simple state for expanded card.
  const [expandedCard, setExpandedCard] = useState<number | null>(null); // Track a single expanded card
  const [comments, setComments] = useState<Record<number, string[]>>({});
  const [newComments, setNewComments] = useState<Record<number, string>>({});

  const cards: Card[] = [
    { 
      id: 1, 
      image: "/ai.jpg", 
      title: "Artificial Intelligence", 
      details: "Artificial Intelligence (AI) is the field of computer science focused on creating machines capable of performing tasks that typically require human intelligence. These tasks include learning, problem-solving, decision-making, language understanding, and visual perception. AI is widely used in various industries such as healthcare, where it assists in diagnosis, treatment plans, and drug discovery. In finance, AI helps with fraud detection, trading algorithms, and financial modeling. In the automotive industry, AI powers self-driving cars and advanced safety features. AI is also widely used in customer service through chatbots and virtual assistants to automate customer interactions. While AI offers significant benefits, it also raises concerns about privacy, job displacement, and ethical implications." 
    }
    ,
    { 
      id: 2, 
      image: "/meta.jpg", 
      title: "Metaverse", 
      details: "The Metaverse is a collective virtual shared space, created by the convergence of virtually enhanced physical reality and physically persistent virtual reality. It encompasses virtual worlds, augmented reality (AR), and other immersive digital experiences. The Metaverse allows users to interact with each other and digital environments in real time using avatars. It offers opportunities for socializing, gaming, education, and business, enabling people to collaborate in virtual spaces from anywhere in the world. While the Metaverse promises innovation and new experiences, it also raises concerns about privacy, security, and the impact on social interactions." 
    }
    ,
    { 
      id: 3, 
      image: "/web.jpg", 
      title: "Web 3.0", 
      details: "Web 3.0 is the next generation of the internet, aiming to create a decentralized, user-centric web experience. Unlike Web 2.0, which is dominated by centralized platforms and corporations, Web 3.0 is powered by blockchain technology, which ensures that data and assets are controlled by users rather than centralized entities. This allows for greater privacy, security, and user ownership. Web 3.0 also includes advancements such as decentralized finance (DeFi), non-fungible tokens (NFTs), and smart contracts. The goal of Web 3.0 is to create a more open, transparent, and equitable digital ecosystem." 
    }
    ,
    { 
      id: 4, 
      image: "/html.jpg", 
      title: "HTML", 
      details: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It provides the basic structure of a webpage by using elements and tags to define headings, paragraphs, links, images, and other content. HTML is the foundation of web development, enabling browsers to interpret and display content in a structured manner. It works in conjunction with CSS (Cascading Style Sheets) and JavaScript to create fully functional and styled websites. As the core language of the web, HTML is essential for anyone looking to build or understand web pages." 
    }
,    
{ 
  id: 5, 
  image: "/css.jpg", 
  title: "CSS", 
  details: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. CSS defines how elements on a webpage should be displayed, including layout, colors, fonts, and spacing. By separating content (HTML) from presentation (CSS), it makes websites easier to maintain and design. CSS allows developers to create responsive designs that adapt to different screen sizes, enhancing the user experience. It is a fundamental technology alongside HTML and JavaScript in web development." 
}
,
{ 
  id: 6, 
  image: "/js.jpg", 
  title: "JavaScript", 
  details: "JavaScript is a high-level, interpreted programming language that is widely used to create dynamic and interactive effects on webpages. It is an essential component of web development, enabling developers to add interactivity, such as form validation, animations, and user-driven events, to websites. JavaScript is supported by all modern browsers and can be used both on the client-side (in the browser) and server-side (via Node.js). With frameworks and libraries like React, Angular, and Vue, JavaScript has become a powerful tool for building complex web applications." 
}
,
{ 
  id: 7, 
  image: "/ts.jpg", 
  title: "TypeScript", 
  details: "TypeScript is a superset of JavaScript that adds optional static typing to the language. It provides developers with enhanced features, such as type annotations, interfaces, and classes, which help to improve the maintainability and scalability of large codebases. TypeScript code is compiled to JavaScript, ensuring compatibility with all browsers and JavaScript environments. By using TypeScript, developers can catch type-related errors at compile time rather than at runtime, making it easier to debug and develop complex applications." 
}
,
{ 
  id: 8, 
  image: "/react.jpg", 
  title: "React", 
  details: "React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and efficiently update the view when data changes, thanks to its virtual DOM. React is maintained by Facebook and has a large ecosystem with tools like React Router for navigation and Redux for state management. React’s declarative nature makes it easier to build interactive UIs, and its component-based architecture promotes code reusability and maintainability, making it a popular choice for modern web development." 
}
,
{ 
  id: 9, 
  image: "/next.jpg", 
  title: "Next.JS", 
  details: "Next.js is a React-based framework for building server-side rendered (SSR) applications, static websites, and hybrid apps. It simplifies the process of creating React apps with built-in features like routing, server-side rendering, static site generation, and API routes. Next.js improves performance and SEO by rendering pages on the server before sending them to the client. It also provides automatic code splitting, which ensures that only the necessary code is loaded for each page, leading to faster load times and improved user experience." 
}

  ];

  const toggleCard = (id: number) => {
    // Toggle the selected card; collapse if the same card is clicked again
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleCommentSubmit = (id: number) => {
    if (newComments[id]?.trim()) {
      setComments((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), newComments[id]],
      }));
      setNewComments((prev) => ({ ...prev, [id]: "" }));
      toast.success("Your comment has been saved!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 to-green-400 flex flex-col items-center justify-center">
      <ToastContainer />
      <div className="text-2xl animate-bounceIn md:text-6xl lg:text-5xl text-center w-full max-w-3xl px-3 py-12 bg-gradient-to-tr from-cyan-500 to-pink-500 text-stone-950 rounded-md shadow-lg font-Judson">
        Welcome to My Blog
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-7xl ">
        {cards.map((card) => (
          <div
            key={card.id}
            className=" bg-gradient-to-tr from-cyan-400 to-pink-400 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 "
          >
            <div className="relative w-full h-48 animate-bounceIn">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <button
                className="mt-3 bg-sky-600 text-white px-4 py-2 rounded hover:bg-pink-500 transform transition-all duration-300 hover:scale-105"
                onClick={() => toggleCard(card.id)}
              >
                {expandedCard === card.id ? "Hide Details" : "Read More"}
              </button>
              {expandedCard === card.id && (
                <div className="mt-4">
                  <p className="text-black font-Judson">{card.details}</p>
                  <h4 className="text-xl font-semibold mt-4">Comments</h4>
                  <ul className="mt-2">
                    {(comments[card.id] || []).map((comment, index) => (
                      <li key={index} className="border-b py-2 text-black">
                        {comment}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-2 mt-2">
                    <input
                      type="text"
                      className="border border-gray-300 p-2 rounded flex-1"
                      placeholder="Write a comment..."
                      value={newComments[card.id] || ""}
                      onChange={(e) =>
                        setNewComments((prev) => ({ ...prev, [card.id]: e.target.value }))
                      }
                    />
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-violet-600"
                      onClick={() => handleCommentSubmit(card.id)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
