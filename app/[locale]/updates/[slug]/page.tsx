interface Props {
  params: {slug: string};
}

export default function UpdateDetail({params}: Props) {
  const {slug} = params;
  // TODO: Fetch post by slug and render localized fields
  return (
    <article className="prose">
      <h1>Update: {slug}</h1>
      <p>Coming soon.</p>
    </article>
  );
}

