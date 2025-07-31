import type DOMPurify from 'dompurify';

// Extend Window interface to include DOMPurify
declare global {
  interface Window {
    DOMPurify?: typeof DOMPurify;
  }
}

// Server-side sanitization (simplified approach)
const sanitizeHtmlServer = (dirty: string, stripTags = false) => {
  if (stripTags) {
    // Remove all HTML tags
    return dirty.replace(/<[^>]*>/g, '');
  }
  // Basic HTML entity encoding for server-side
  return dirty
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};

/**
 * Sanitizes HTML content to prevent XSS attacks
 * @param dirty - The potentially unsafe HTML string
 * @param options - Sanitization configuration options
 * @returns Sanitized HTML string
 */
export function sanitizeHtml(
  dirty: string,
  options?: {
    allowedTags?: string[];
    allowedAttributes?: string[];
    stripTags?: boolean;
  }
): string {
  if (!dirty || typeof dirty !== 'string') {
    return '';
  }

  if (typeof window !== 'undefined') {
    // Client-side: use DOMPurify with full configuration
    const config: DOMPurify.Config = {
      ALLOWED_TAGS: options?.allowedTags || [
        'p', 'br', 'strong', 'em', 'u', 'ol', 'ul', 'li', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
      ],
      ALLOWED_ATTR: options?.allowedAttributes || ['href', 'title', 'target'],
      ALLOW_DATA_ATTR: false,
      ALLOW_UNKNOWN_PROTOCOLS: false,
    };

    if (options?.stripTags) {
      config.ALLOWED_TAGS = [];
      config.ALLOWED_ATTR = [];
      config.KEEP_CONTENT = true;
    }

    // Use synchronous approach for client-side
    if (typeof window !== 'undefined' && window.DOMPurify) {
      const result = window.DOMPurify.sanitize(dirty, { ...config, RETURN_DOM: false, RETURN_DOM_FRAGMENT: false });
      return typeof result === 'string' ? result : String(result);
    }
    // Fallback to server-side sanitization if DOMPurify not available
    return sanitizeHtmlServer(dirty, options?.stripTags);
  } else {
    // Server-side: use simplified sanitization
    return sanitizeHtmlServer(dirty, options?.stripTags);
  }
}

/**
 * Sanitizes plain text input by removing HTML tags and encoding special characters
 * @param input - The input string to sanitize
 * @returns Sanitized plain text string
 */
export function sanitizeText(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Remove HTML tags and decode entities, then encode special characters
  return sanitizeHtml(input, { stripTags: true })
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitizes user input for database storage
 * @param input - The input to sanitize
 * @returns Sanitized string safe for database storage
 */
export function sanitizeForDatabase(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Trim whitespace and remove null bytes
  return input
    .trim()
    .replace(/\0/g, '')
    .replace(/\x00/g, '')
    .slice(0, 1000); // Limit length to prevent DoS
}

/**
 * Sanitizes email input
 * @param email - The email string to sanitize
 * @returns Sanitized email string
 */
export function sanitizeEmail(email: string): string {
  if (!email || typeof email !== 'string') {
    return '';
  }

  return email
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9@._-]/g, '')
    .slice(0, 254); // RFC 5321 limit
}

/**
 * Sanitizes URL input
 * @param url - The URL string to sanitize
 * @returns Sanitized URL string or empty string if invalid
 */
export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== 'string') {
    return '';
  }

  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '';
    }
    return parsed.toString();
  } catch {
    return '';
  }
}