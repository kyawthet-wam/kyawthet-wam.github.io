// useProjects.ts
import { useEffect, useState } from 'react';
import { getProjects as fetchProjects } from '../components/getProjects';
import { Project } from '@/types/definitions';
const LOCAL_STORAGE_KEY = 'cachedProjects';

export function useProjects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndCacheProjects = async () => {
      try {
        // Check for cached data
        const cachedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (cachedData) {
          setProjects(JSON.parse(cachedData));
          setLoading(false);
        } else {
          // Fetch data and cache it
          const data = await fetchProjects();
          setProjects(data);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
          setLoading(false);
        }
      } catch (err) {
        setError('Failed to load projects');
        setLoading(false);
      }
    };

    fetchAndCacheProjects();
  }, []);

  return { projects, loading, error };
}
