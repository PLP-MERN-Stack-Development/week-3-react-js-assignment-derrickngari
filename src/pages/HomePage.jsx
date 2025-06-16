import { useEffect, useState } from 'react';
import Button from '../components/Button';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status} ${res.statusText}`);
        }

        const result = await res.json();
        if (result['Error Message']) {
          throw new Error(result['Error Message']);
        }

        console.log('API Response:', result);
        setData(result)
      } catch (error) {
        setError(`Error Fetching data: ${error.message}`);
        console.error('Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 border-2 border-indigo-500 rounded-md flex flex-col items-center py-8 px-4 mb-10 mx-10">
      <div className="w-full max-w-5xl mb-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Latest Posts</h1>
      </div>

      {loading && (
        <div className="flex flex-col gap-10 items-center justify-center h-64 w-full ">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-500"></div>
          <p className="ml-4 text-lg text-gray-600">Loading posts...</p>
        </div>
      )}

      {error && (
        <div className="w-full">
          <p className="font-semibold max-w-5xl bg-red-100 border border-red-500 text-red-600 px-4 py-3 rounded-lg">
            {error}
          </p>
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="w-full max-w-5xl grid gap-6 md:grid-cols-3 lg-grid-cols-1 mx-auto px-8 mb-10">
          {data.slice(0, 10).map((post) => (
            <div
              key={post.id}
              className="bg-slate-950 p-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-300 mb-2 capitalize">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
              <div className="mt-4 text-sm text-gray-400">
                Post ID: {post.id}
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <div className="w-full max-w-5xl text-center text-gray-600">
          <p>No posts found.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;