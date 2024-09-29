import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const FilterButtons = ({ options, onFilterChange }) => {
  const { language } = useLanguage();

  return (
    <div className="flex items-center gap-2 mt-4 md:mt-0">
      {options?.map(({ label, value }) => (
        <Button
          key={value}
          variant="outline"
          className="px-4 py-2 rounded-md"
          onClick={() => onFilterChange(value)}
        >
          {language === "ar" ? label.ar : label.en}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
