import { BlogPost } from "@/types/definitions";

export function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <div
      key={blog.link}
      className="bg-white shadow-md rounded-md p-4 max-w-md mx-auto my-4"
    >
      <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
      <p className="text-sm text-gray-500 mt-2">
        {new Date(blog.pubDate!).toDateString()}
      </p>
      <p
        className="text-gray-700 mt-4"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></p>
      <a
        href={blog.link}
        className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
    </div>
  );
}
