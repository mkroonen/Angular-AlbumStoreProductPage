import { Track } from './track';

export interface Album {
  name: string;
  releaseDage: string;
  coverImage: string;
  tracks: Track[];
}
