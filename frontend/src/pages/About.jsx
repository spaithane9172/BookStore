import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-[2rem] mb-[1rem]">About Us</h1>
      <p className="text-justify">
        Welcome to BookStore, the ultimate destination for book lovers and
        enthusiasts alike! At BookStore, we believe in celebrating the joy of
        reading and making book management effortless. Our platform offers a
        seamless and enjoyable experience, whether you’re organizing your
        personal collection or discovering new literary treasures. Dive into a
        world of endless possibilities, where every book tells a story waiting
        to be explored. From timeless classics to contemporary bestsellers, we
        aim to enrich your reading journey with convenience and delight. Join us
        in building a community of book enthusiasts and embark on an adventure
        filled with knowledge, imagination, and inspiration!
      </p>
      <h1 className="text-[1.2rem] font-semibold mt-[2rem]">
        At BookStore, you can:
      </h1>
      <div className="pl-[2rem]">
        <ul className="mt-[0.5rem]  list-disc">
          <li>
            <span className="font-semibold">Create:</span> Add new books to your
            collection effortlessly.
          </li>
          <li>
            <span className="font-semibold">Read:</span> Browse and explore
            detailed information about each book.
          </li>
          <li>
            <span className="font-semibold">Update:</span> Modify book details
            to keep your collection up-to-date.
          </li>
          <li>
            <span className="font-semibold">Delete:</span> Remove books you no
            longer need with ease.
          </li>
        </ul>
      </div>
      <p className="text-justify mt-[2rem] mb-[1rem]">
        Our mission is to make book management an enjoyable, efficient, and
        stress-free experience for all book enthusiasts. Whether you're a casual
        reader exploring new titles or a dedicated bibliophile meticulously
        curating your collection, BookStore is designed to cater to your every
        need. We strive to create a platform that celebrates the love of books
        while making organization effortless.
      </p>
      <p className="text-justify">
        Thank you for choosing us as your trusted partner in the world of books.
        Dive in and explore a universe of literary wonders!
      </p>
    </div>
  );
};

export default About;
