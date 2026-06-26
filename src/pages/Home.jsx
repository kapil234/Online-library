import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BookCard from "../components/BookCard";
import books from "../data/books";

function Home() {

  const popularBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <>
      <Hero />

      <Categories />

      <section className="max-w-7xl mx-auto py-12 px-5">
        <h2 className="text-4xl font-bold text-center mb-10">
          Popular Books
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>
      </section>
    </>
  );
}


export default Home;