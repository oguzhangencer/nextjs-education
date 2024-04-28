import styles from "./styles.module.css";
import BlogCard from "@/components/BlogCard";
import Data from "@/data/posts.json";

export default async function Home() {
  return (
    <div className={styles.blogsContainer}>
      {Data.posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
