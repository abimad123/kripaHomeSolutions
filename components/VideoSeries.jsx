import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Play, Clock, Share2, Youtube } from 'lucide-react';

// --- CONFIGURATION ---
// Just add your YouTube Video IDs here. 
// The code will fetch Titles and Thumbnails automatically.
const videoIds = [
  'QdEeZIF7TsU',
  'ghjSSLiDVtY', // Main featured video
  'Xo6G-2XhCUs', 
  'G9bye_lhj5k', 
  'dP7Lc5zksEs',
  'WD_0GKDdNwY'
];

const VideoSeries = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  // --- AUTOMATIC FETCHING LOGIC ---
  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const promises = videoIds.map(async (id) => {
          const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
          const response = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`);
          const data = await response.json();

          return {
            id: id,
            videoId: id,
            title: data.title || 'Loading title...', // Fallback title
            expert: 'Kripa Home Solutions', // Hardcoded Expert
            thumbnail: thumbnailUrl,
            duration: 'Watch Now' // Duration requires a real API Key, so we use a generic CTA
          };
        });

        const videos = await Promise.all(promises);
        setPlaylist(videos);
        setCurrentVideo(videos[0]); // Set first video as featured
        setLoading(false);
      } catch (error) {
        console.error("Error fetching video details:", error);
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, []);

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
    setIsPlaying(true);
    if (window.innerWidth < 1024) {
      document.getElementById('main-player')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading || !currentVideo) {
    return <div className="py-20 text-center">Loading Video Series...</div>;
  }

  return (
    <Section id="video-series" className="bg-slate-50 dark:bg-brand-dark/500">
      <div className="flex flex-col items-end justify-between gap-8 px-2 mb-16 md:flex-row">
        <div className="max-w-2xl">
           <div className="flex items-center gap-2 mb-3">
              <span className="w-10 h-px bg-brand-red"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-brand-red">Open House Talks</span>
           </div>
           <h2 className="text-4xl font-black leading-tight font-serif md:text-5xl text-brand-navy dark:text-white">
             Expert <br/>
             <span className="italic text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-gold">Video Series</span>
           </h2>
        </div>
        <p className="max-w-sm pl-6 mb-1 text-sm font-medium leading-relaxed border-l-2 text-slate-600 dark:text-slate-400 border-brand-red">
          Dive into our exclusive video series featuring industry experts sharing insights and trends.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        
        {/* === MAIN PLAYER AREA === */}
        <div className="flex flex-col lg:col-span-2" id="main-player">
          <div className="relative overflow-hidden transition-all duration-500 border shadow-2xl aspect-video rounded-3xl group bg-black border-slate-200 dark:border-white/10">
            
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&rel=0`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div 
                className="w-full h-full cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src={currentVideo.thumbnail} 
                  alt="Featured Video" 
                  className="object-cover w-full h-full transition-opacity duration-500 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-20 h-20 transition-transform duration-300 shadow-lg bg-brand-red rounded-2xl group-hover:scale-110">
                    <Play className="ml-1 text-white fill-white" size={40} />
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6">
                   <button className="flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-widest text-white transition-all uppercase border bg-black/80 hover:bg-black rounded-xl border-white/20">
                      <span>Watch on</span>
                      <div className="flex items-center gap-1 font-sans">
                        <Youtube size={18} fill="white" />
                        <span className="font-black">YouTube</span>
                      </div>
                   </button>
                </div>
              </div>
            )}

            {!isPlaying && (
              <div className="absolute flex gap-3 top-6 right-6">
                 <div className="flex flex-col items-center text-white text-[10px] font-black uppercase tracking-widest drop-shadow-md cursor-pointer hover:text-brand-gold">
                    <Clock size={20} className="mb-1" />
                    <span>Watch later</span>
                 </div>
                 <div className="flex flex-col items-center text-white text-[10px] font-black uppercase tracking-widest drop-shadow-md cursor-pointer hover:text-brand-gold">
                    <Share2 size={20} className="mb-1" />
                    <span>Share</span>
                 </div>
              </div>
            )}
          </div>

          <div className="px-2 mt-8">
            <h3 className="mb-3 text-3xl font-black leading-tight transition-colors font-serif text-brand-navy dark:text-white group-hover:text-brand-red">
              {currentVideo.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              <span className="text-brand-red">{currentVideo.expert}</span>
              {/* Removed Views and Date as requested */}
            </div>
          </div>
        </div>

        {/* === PLAYLIST SIDE === */}
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[600px] custom-scrollbar pr-2">
          {playlist.map((video) => {
            // Skip the currently playing video in the playlist list to avoid duplication
            if (video.id === currentVideo.id) return null;

            return (
              <div 
                key={video.id} 
                className="flex gap-5 p-4 rounded-[2rem] transition-all duration-300 cursor-pointer group border border-transparent hover:bg-white dark:hover:bg-brand-surface hover:shadow-xl hover:border-slate-200 dark:hover:border-white/10"
                onClick={() => handleVideoChange(video)}
              >
                <div className="relative flex-shrink-0 overflow-hidden shadow-md w-32 h-24 rounded-2xl">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="object-cover w-full h-full duration-500 transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[9px] font-black px-2 py-0.5 rounded-lg border border-white/20">
                    <Play size={10} fill="white" />
                  </div>
                </div>
                
                <div className="relative flex flex-col justify-center w-full">
                  <h4 className="mb-1 text-sm font-bold leading-snug transition-colors text-brand-navy dark:text-slate-200 line-clamp-2 group-hover:text-brand-red">
                    {video.title}
                  </h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-60">
                    {video.expert}
                  </p>
                </div>
              </div>
            );
          })}
 <a href="https://www.youtube.com/@kripahomesolutions">
          <button className="mt-4 w-full py-5 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-4xl font-black text-slate-500 dark:text-slate-400 hover:border-brand-red hover:text-brand-red transition-all uppercase text-[10px] tracking-[0.3em]"> 
            View Full Channel
          </button></a>
        </div>
      </div>
    </Section>
  );
};

export default VideoSeries;