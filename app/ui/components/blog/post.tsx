import { SanityDocument } from "@sanity/client";
//import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableTextBlock } from "@portabletext/types";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import SocialShare from "./social-share";
import { format } from "date-fns";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import RecentPosts from "./recent-posts";
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => {
  return builder.image(source);
};

type Category = {
  title: string;
  description: string;
};
// Define types for table structure
interface TableCell extends PortableTextBlock {
  _type: "tableCell";
}

interface TableRow {
  _type: "tableRow";
  cells: TableCell[];
}

interface TableValue {
  _type: "table";
  rows: TableRow[];
}

// Define props for table component
interface TableComponentProps {
  value: TableValue;
}

const TableComponent = ({ value }: TableComponentProps) => {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse">
        <tbody>
          {value.rows.map((row: TableRow, i: number) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
              {row.cells.map((cell: TableCell, j: number) => (
                <td key={j} className="border p-3">
                  <PortableText value={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Post({ post }: { post: SanityDocument }) {
  if (!post) return <p>Loading ...</p>;

  return (
    <div className="w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1440px] px-4 md:px-0 mt-[10rem]">
      <ul className="flex gap-[0.5rem] p-text mb-3 sm:ml-[13px] ">
        <li className="hover:text-primary font-semibold transition-color delay-300">
          <Link href="/">Home</Link>
        </li>
        <li>&gt;</li>
        <li className="hover:text-primary font-semibold transition-color delay-300">
          <Link href="/blog">Blog</Link>
        </li>
        <li>&gt;</li>

        <li className="hover:text-primary font-semibold transition-color delay-300">
          {post.title}
        </li>
      </ul>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Social Share - Sticky */}
        <section className="col-span-1 p-4 h-auto md:min-h-[30rem] md:sticky md:top-0 md:h-screen overflow-y-auto">
          <div className="sm:sticky sm:top-26">
            <SocialShare title={post.title} />
          </div>
        </section>
        <section className="col-span-2 p-4 prose prose-xl ">
          <header className=" py-2 flex flex-col  space-y-8">
            <nav className=" ">
              <Link
                href="/blog"
                className=" btn ">
                <span className="mr-[0.2rem]"> &larr;</span>
                Go Back
              </Link>
            </nav>
            <h3 className="text-3xl font-semibold  text-foreground">
              {post.title}
            </h3>
            <span className="text-[0.97rem] font-medium text-tertiary-white">
              Written on: {format(new Date(post._createdAt), "MM/dd/yyyy")}
            </span>
          </header>
          <figure className="w-full h-[320px] rounded-md overflow-hidden">
            {post?.mainImage && (
              <Image
                src={
                  urlFor(post.mainImage).width(1200).height(650).url() ||
                  "/3d-view-personal-computer-with-vegetation.jpg"
                }
                alt={post?.mainImage?.alt || "Post image"}
                width={1000}
                height={650}
                className="rounded-md"
              />
            )}
          </figure>
          <figcaption className="flex flex-col pt-4 space-y-2">
            <div className=" flex gap-2 items-center p-text text-textColor font-semibold">
              {" "}
              <span className="font-bold">Category: </span>
              {post.categories.map((category: Category, id: number) => (
                <h3 className="font-medium" key={id}>
                  {category.title}
                </h3>
              )) || "Uncategorized post"}
            </div>
            <p className="label-text font-medium ">
              {" "}
              <span className="font-semibold">written by : </span>{" "}
              {post.authorName || "Unknown Author"}
            </p>
          </figcaption>

          <article>
            {post?.body && (
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-[1.1rem] leading-7 mb-4">{children}</p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-bold mb-6 mt-8">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold mb-4 mt-6">
                        {children}
                      </h3>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc pl-6 space-y-2 mb-4">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal pl-6 space-y-2 mb-4">
                        {children}
                      </ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="text-[1.1rem] leading-7">{children}</li>
                    ),
                    number: ({ children }) => (
                      <li className="text-[1.1rem] leading-7">{children}</li>
                    ),
                  },
                  marks: {
                    link: ({ value, children }) => {
                      const url = (value as { href?: string })?.href || "";
                      return (
                        <a
                          href={url}
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      );
                    },
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),
                  },
                  types: {
                    table: TableComponent,
                  },
                }}
              />
            )}
          </article>
        </section>
        {/* Right Social Share - Sticky */}
        <section className="col-span-1 p-4 min-h-[30rem]  sticky top-0 h-screen overflow-y-auto">
          <div className="sticky top-26">
            <header className="text-foreground  mb-12 border-l-4 rounded-sm border-foreground/90 px-2 title  font-semibold ">
              Recently Published
            </header>
            <RecentPosts />
          </div>
        </section>
      </div>
    </div>
  );
}
