import BlogHero from "@/app/ui/components/blog/BlogHero";
import BlogPosts from "@/app/ui/components/blog/BlogPostList";
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
