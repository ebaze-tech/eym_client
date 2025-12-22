'use client';

import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
  url?: string;
}

export default function HeritageShareButton({ title, text, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className={`h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center gap-2 text-gray-600 hover:bg-[#2B59C3] hover:text-white hover:border-[#2B59C3] transition-all ${copied ? 'px-4 bg-green-50 border-green-200 text-green-600' : 'w-10 hover:w-auto hover:px-4 group'}`}
      aria-label="Share"
    >
      {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
      <span className={`text-sm font-medium overflow-hidden whitespace-nowrap transition-all duration-300 ${copied ? 'w-auto opacity-100' : 'w-0 opacity-0 group-hover:w-auto group-hover:opacity-100'}`}>
        {copied ? 'Copied!' : 'Share'}
      </span>
    </button>
  );
}
