import { FaInfoCircle } from 'react-icons/fa';

export default function GlobalMarquee() {
  return (
    <div className="bg-navy-50 border-b border-navy-100 text-navy-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3">
        <FaInfoCircle className="shrink-0 text-orange-600" size={14} />
        <div className="marquee-container relative flex-1 overflow-hidden">
          <div className="marquee inline-flex whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide">
            <span className="mx-12">
              This is a private consultancy self-registration portal for obtaining GST registration. 
              Portal fees are consultancy charges and not government fees.
            </span>
            <span className="mx-12">
              This is a private consultancy self-registration portal for obtaining GST registration. 
              Portal fees are consultancy charges and not government fees.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}