import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function UpdatesList() {
  const t = useTranslations('updates');
  // Placeholder posts; in v1, fetch from /api/posts
  const posts: {slug: string; title: string; date: string}[] = [];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">{t('title')}</h1>
      {posts.length === 0 ? (
        <p className="text-slate-600">No posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`./updates/${p.slug}`} className="text-brand underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

