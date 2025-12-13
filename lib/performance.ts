// Performance optimizations
export const performanceConfig = {
  // Reduce motion for users who prefer reduced motion
  prefersReducedMotion: typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false,
    
  // Lazy load images intersection observer config
  imageObserverConfig: {
    rootMargin: '50px',
    threshold: 0.01,
  },
  
  // Animation duration adjustments for performance
  getAnimationDuration: (baseDuration: number) => {
    if (typeof window === 'undefined') return baseDuration;
    
    // Reduce animations on lower-end devices
    const connection = (navigator as any).connection;
    if (connection && connection.effectiveType === '2g') {
      return baseDuration * 0.5;
    }
    return baseDuration;
  },
  
  // Debounce scroll events
  debounce: <T extends (...args: any[]) => void>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },
  
  // Throttle resize events
  throttle: <T extends (...args: any[]) => void>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;
  
  // Preload fonts
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Web Vitals monitoring
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics
    console.log(metric);
  }
};
