type Props = {
  params: {
    id: string;
  };
};

export default function Ground({ params: { id } }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Ground {id}</h1>
    </div>
  );
}
