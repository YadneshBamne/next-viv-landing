// components/Textarea.jsx
import { cn } from '@/lib/utils';

export default function Textarea({ containerClassName = '', showRing = true, ...rest }) {
  return (
    <div className={containerClassName}>
      <textarea
        {...rest}
        className={`${rest.className ?? ''} ${showRing ? 'focus:ring' : ''}`}
      />
    </div>
  );
}

Textarea.displayName = 'Textarea';