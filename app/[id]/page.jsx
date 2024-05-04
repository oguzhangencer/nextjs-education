import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
async function getPosts(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  return response.json();
}

export default async function Page({ params }) {
  const { id, title, body } = await getPosts(params.id);

  if (!title) {
    return notFound();
  }

  return (
    <div className={styles.blogContainer}>
      Blog
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt={title}
          fill
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
