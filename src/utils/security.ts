
// Input sanitization and security utilities
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  // Remove HTML tags and script content
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  // US phone number format validation
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Simple rate limiting for client-side
const submitTimestamps = new Map<string, number>();

export const isRateLimited = (key: string, limitMs: number = 30000): boolean => {
  const now = Date.now();
  const lastSubmit = submitTimestamps.get(key);
  
  if (lastSubmit && now - lastSubmit < limitMs) {
    return true;
  }
  
  submitTimestamps.set(key, now);
  return false;
};

export const addSecurityHeaders = (response: Response): Response => {
  const headers = new Headers(response.headers);
  
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('X-XSS-Protection', '1; mode=block');
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
};
