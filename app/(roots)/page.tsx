// import { Button } from "@/components/ui/button";
import  BookOverview  from "@/components/BookOverview";
import Booklist from "@/components/BookList";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />

      <Booklist
        title="Latest Books"
        books={sampleBooks.slice(1)}
      />
    </>
  );
}
