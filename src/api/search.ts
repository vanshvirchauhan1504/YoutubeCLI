import axios from 'axios';
import { Video } from './types';

const API_KEY = 'AIzaSyDIQ-v7kgIk2dZL6V-H6h68ksT6Icsw4ng';

async function searchVideos(query: string): Promise<Video[]> {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        q: query,
        type: 'video',
        part: 'snippet',
        maxResults: 5
      }
    });

    const videos: Video[] = response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description
    }));

    return videos;
  } catch (error) {
    console.error('Error searching videos:', error);
    return [];
  }
}


export async function searchAndDisplayVideos(query: string): Promise<void> {
    try {
      const videos = await searchVideos(query);
      if (videos.length === 0) {
        console.log('No videos found.');
      } else {
        console.log('Search results:');
        videos.forEach((video, index) => {
          console.log(`Video ${index + 1}:`);
          console.log(`Title: ${video.title}`);
          console.log(`Description: ${video.description}`);
          console.log(`ID: ${video.id}`);
          console.log('------------------------');
        });
      }
    } catch (error) {
      console.error('Error searching videos:', error);
    }
  }