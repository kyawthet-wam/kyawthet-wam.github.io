import { BlogPost } from "@/types/definitions";

export function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <div
      className="bg-white shadow-md rounded-md p-4 max-w-md mx-auto my-4"
    >
      <figure className="w-full max-w-s mx-auto mb-5 relative h-52 overflow-hidden">
        <img
          src={blog.image}
          alt="Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </figure>
      {/* <figure className="w-full max-w-s mx-auto mb-5">
        <img 
          src={blog.image}
          alt="Image"
          className="w-full h-52 object-cover rounded-lg" 
        />
      </figure> */}
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
