import Link from "next/link";
import { notFound } from "next/navigation";
import { Post, User } from "@/types/post";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error("Không thể tải thông tin tác giả");
  }

  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getPost(id);
  const author = await getUser(post.userId);

  return (
    <div>
      <Link
        href="/blog"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>

      <article>
        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>

        <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
          <span>
            Tác giả: <strong className="text-gray-700">{author.name}</strong>
          </span>
          <span>•</span>
          <span>{author.email}</span>
        </div>

        <div className="prose max-w-none text-gray-700 whitespace-pre-line mb-8 leading-relaxed">
          {post.body}
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold mb-2">Về tác giả</h3>
          <p className="text-gray-600 text-sm">
            <strong>{author.name}</strong> (@{author.username}) —{" "}
            {author.company.name}
          </p>
          <p className="text-gray-500 text-sm">{author.company.catchPhrase}</p>
        </div>
      </article>
    </div>
  );
}
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/data/posts";
import LikeButton from "@/components/like-button";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
          <span className="text-gray-500 dark:text-gray-400">— {post.author}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 border-l-4 border-emerald-300 dark:border-emerald-700 pl-4">
          {post.excerpt}
        </p>
      </div>

      <div className="prose max-w-none text-gray-800 dark:text-gray-300 whitespace-pre-wrap mb-8">
        {post.content}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-8">
        <LikeButton />
      </div>
    </article>
  );
}
