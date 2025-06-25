"use client";
import { useState } from 'react';
import { MessageCircle, Repeat2, Heart, BarChart3, Share, MoreHorizontal, Bookmark, Image, Smile, Calendar, MapPin } from 'lucide-react';

export default function News() {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [retweetedPosts, setRetweetedPosts] = useState(new Set());
  const [newPostText, setNewPostText] = useState('');
  const [userPosts, setUserPosts] = useState([]);

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleRetweet = (postId) => {
    setRetweetedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handlePost = () => {
    if (newPostText.trim()) {
      const newPost = {
        id: Date.now(),
        author: 'You',
        handle: '@YourHandle',
        timestamp: 'now',
        content: newPostText,
        comments: 0,
        retweets: 0,
        likes: 0,
        views: Math.floor(Math.random() * 1000) + 'K',
        verified: false,
        isUserPost: true,
      };
      setUserPosts(prev => [newPost, ...prev]);
      setNewPostText('');
    }
  };

  const posts = [
    {
      id: 1,
      author: 'Dr Jitendra Singh',
      handle: '@DrJitendraSingh',
      timestamp: '3h',
      content:
        'It is a matter of pride for all Indians that Shubhanshu Shukla will be part of this international space mission. His role will be just as significant as anyone else involved. While Rakesh Sharma was the first Indian astronaut to go to space, it was a Soviet mission, with...',
      image: 'https://live.staticflickr.com/65535/52211883799_7fc69a0c63_k.jpg',
      comments: 10,
      retweets: 103,
      likes: 550,
      views: '35.2K',
      verified: true,
    },
    {
      id: 2,
      author: 'Space News',
      handle: '@SpaceNews',
      timestamp: '5h',
      content: 'Exciting updates on the latest space missions! Stay tuned for more details on international collaborations. 🚀',
      comments: 5,
      retweets: 50,
      likes: 200,
      views: '10.1K',
      verified: true,
    },
    {
      id: 3,
      author: 'ISRO Updates',
      handle: '@ISROUpdates',
      timestamp: '8h',
      content: 'India\'s space program reaches new heights with upcoming missions. More details to follow! #ISRO #SpaceMission',
      image: 'https://live.staticflickr.com/65535/52534406448_bc47b724f7.jpg',
      comments: 15,
      retweets: 120,
      likes: 600,
      views: '42.8K',
      verified: true,
    },
    {
      id: 4,
      author: 'Tech Insider',
      handle: '@TechInsider',
      timestamp: '12h',
      content: 'Breaking: New developments in AI and space technology collaboration announced today. This could revolutionize how we approach space exploration.',
      comments: 28,
      retweets: 87,
      likes: 342,
      views: '18.5K',
      verified: false,
    },
  ];

  const allPosts = [...userPosts, ...posts];

  return (
    <div className="min-h-screen bg-[#07080A] text-white">
      {/* Header */}
      <div className="sticky top-0 bg-[#07080A]/95 backdrop-blur-xl border-b border-gray-800/50 z-20 shadow-lg">
        <div className="max-w-2xl mx-auto">
          {/* Main Header */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  News at VIV
                </h1>
                <p className="text-gray-400 text-xs -mt-1">Latest updates and insights</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-800/50 rounded-full transition-all duration-200 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-800/50 rounded-full transition-all duration-200 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-800/30">
            <button className="flex-1 px-4 py-3 text-sm font-medium text-white border-b-2 border-blue-500 hover:bg-gray-800/30 transition-colors">
              For you
            </button>
            <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/30 transition-colors">
              Following
            </button>
            <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/30 transition-colors">
              Trending
            </button>
          </div>
          
          {/* Status Indicator */}
          <div className="px-4 py-2 bg-[#07080A] border-gray-800/30">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-300">Live updates</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-400">{allPosts.length} posts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-2xl mx-auto">
        {/* Post Composer */}
        <div className="border-b border-gray-800 p-4">
          <div className="flex space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
              Y
            </div>
            <div className="flex-1">
              <textarea
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder="What's happening?"
                className="w-full bg-transparent text-xl text-white placeholder-gray-500 resize-none border-none outline-none"
                rows="3"
              />
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-4">
                  <button className="p-2 hover:bg-blue-400/10 rounded-full text-blue-400 transition-colors">
                    <Image className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-400/10 rounded-full text-blue-400 transition-colors">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-400/10 rounded-full text-blue-400 transition-colors">
                    <Calendar className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-400/10 rounded-full text-blue-400 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-gray-500">
                    {280 - newPostText.length}
                  </div>
                  <button
                    onClick={handlePost}
                    disabled={!newPostText.trim()}
                    className={`px-6 py-2 rounded-full font-bold text-sm transition-colors ${
                      newPostText.trim()
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-blue-900 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {allPosts.map((post) => (
          <article 
            key={post.id} 
            className="border-b border-gray-800 hover:bg-gray-950/50 transition-colors duration-200 cursor-pointer"
          >
            <div className="p-4">
              {/* User Info */}
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                  post.isUserPost 
                    ? 'bg-gradient-to-br from-blue-400 to-purple-500' 
                    : 'bg-gradient-to-br from-blue-400 to-purple-500'
                }`}>
                  {post.isUserPost ? 'Y' : post.author.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="font-bold text-white hover:underline cursor-pointer">
                      {post.author}
                    </span>
                    {post.verified && (
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className="text-gray-500 text-sm">{post.handle}</span>
                    <span className="text-gray-500 text-sm">·</span>
                    <span className="text-gray-500 text-sm hover:underline cursor-pointer">{post.timestamp}</span>
                    <div className="ml-auto">
                      <button className="p-1 hover:bg-gray-800 rounded-full transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-3">
                    <p className="text-white text-[15px] leading-normal whitespace-pre-wrap">
                      {post.content}
                    </p>
                  </div>

                  {/* Image */}
                  {post.image && (
                    <div className="mb-3 rounded-2xl overflow-hidden border border-gray-700">
                      <img
                        src={post.image}
                        alt="Post image"
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between max-w-md mt-3">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors group">
                      <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{post.comments}</span>
                    </button>

                    <button 
                      onClick={() => handleRetweet(post.id)}
                      className={`flex items-center space-x-2 transition-colors group ${
                        retweetedPosts.has(post.id) 
                          ? 'text-green-400' 
                          : 'text-gray-500 hover:text-green-400'
                      }`}
                    >
                      <div className="p-2 rounded-full group-hover:bg-green-400/10 transition-colors">
                        <Repeat2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm">
                        {post.retweets + (retweetedPosts.has(post.id) ? 1 : 0)}
                      </span>
                    </button>

                    <button 
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 transition-colors group ${
                        likedPosts.has(post.id) 
                          ? 'text-red-500' 
                          : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <div className="p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                        <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                      </div>
                      <span className="text-sm">
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </span>
                    </button>

                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors group">
                      <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{post.views}</span>
                    </button>

                    <div className="flex items-center space-x-1">
                      <button className="p-2 rounded-full text-gray-500 hover:text-blue-400 hover:bg-blue-400/10 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full text-gray-500 hover:text-blue-400 hover:bg-blue-400/10 transition-colors">
                        <Share className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="max-w-2xl mx-auto p-4">
        <button className="w-full text-blue-400 hover:bg-gray-900 py-3 rounded-full transition-colors">
          Show more posts
        </button>
      </div>
    </div>
  );
}