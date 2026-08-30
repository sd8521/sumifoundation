import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  MapPin, 
  Calendar, 
  Filter, 
  Maximize2, 
  X,
  CheckCircle2
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/ngoData';
import { GalleryItem } from '../types';

export const ImpactAndGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Healthcare', 'Clean Water', 'Solar Energy', 'Empowerment', 'Hygiene', 'Sports & Youth'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <ImageIcon className="w-4 h-4 text-emerald-600" />
            <span>Field Work & Grassroots Realities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Impact in Action
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Visual glimpses of our health camps, solar streetlight installations, clean water plants, women empowerment workshops, and sports tournaments in South Dinajpur.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group cursor-pointer flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white flex items-center space-x-1.5 text-xs font-bold bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Photo</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                  {item.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <h4 className="font-heading font-bold text-base text-slate-900 group-hover:text-emerald-700 transition">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-slate-900 rounded-3xl overflow-hidden max-w-4xl w-full border border-slate-800 shadow-2xl relative">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxItem.imageUrl}
                alt={lightboxItem.title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 text-white space-y-2 bg-slate-900">
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400">
                <span>{lightboxItem.category}</span>
                <span>•</span>
                <span>{lightboxItem.location} ({lightboxItem.date})</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                {lightboxItem.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {lightboxItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
