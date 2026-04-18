import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div className="flex-1">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-emerald-600">Blog</h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow hover:border-emerald-300 dark:hover:border-emerald-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">— {post.author}</span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-gray-900 dark:text-white">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
