type Props = {
  title: string;
  description: string;
};

export default function Heading({ title, description }: Props) {
  return (
    <div>
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>

      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
