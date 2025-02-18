import ShareFeed from '@/app/components/ShareFeed'; // Import the client component
import LikeFeed from '../components/LikeFeed';
export default async function PostsPage() {
  const res = await fetch("http://localhost:3000/api/posts", { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("No Post or no post found");
  }

  const posts = await res.json();

  return (
    <div className="max-w-2xl mx-auto font-sans">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Clense</h1>
      </header>
      <main className="p-4">
        {posts.map((post: any) => (
          <div key={post.id} className="bg-white border border-gray-300 rounded-lg mb-4 p-4 shadow">
            <div className="flex items-center mb-3">
              <img
                src={post.avatar || '/default-avatar.png'}
                alt={post.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h2 className="font-semibold text-sm">{post.name}</h2>
                <p className="text-gray-500 text-xs">{new Date(post.date).toLocaleString()}</p>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex justify-between border-t pt-3">
              <LikeFeed postId={post.id} postName={post.name} />
              <button className="text-gray-600 hover:text-blue-600">Comment</button>
              {/* Share button opens the ShareFeed client component */}
              <ShareFeed postId={post.id} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
