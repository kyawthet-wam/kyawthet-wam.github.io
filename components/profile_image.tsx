import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './storage';  // Ensure the storage instance is correctly imported

export function ProfileImage () {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = await getDownloadURL(ref(storage, 'images/ktw/ktw-4.jpg'));
        setImageUrl(url);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchImageUrl();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-1 w-full">
      <img
        src={imageUrl || ''}  // Ensure a fallback value if imageUrl is null
        alt="profile"
        className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full border border-white object-cover shadow-lg"
      />
    </div>
  );
};

