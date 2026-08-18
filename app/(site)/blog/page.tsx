import BlogHero from "@/ui/components/blog/BlogHero";
import BlogPosts from "@/ui/components/blog/BlogPostList";
import BlogIndexSchema from "./_schema";
export default function Blog() {
  return (

    <>
    <BlogIndexSchema />
      <BlogHero />
      <BlogPosts />
    </>
  );
}
