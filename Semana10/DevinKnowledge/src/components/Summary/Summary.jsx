import { SummaryCard } from "@components";
import { useAppContext } from "@contexts";

export const Summary = () => {
  const { categories } = useAppContext();
  return (
    <div className="displayContainer">
      {categories.map((categoria) => {
        return <SummaryCard key={categoria.title} title={categoria.title} count={categoria.count} />;
      })}
    </div>
  );
};
