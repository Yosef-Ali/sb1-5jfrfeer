import { Category } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onSelectCategory(null)}
        className={cn(
          'whitespace-nowrap',
          selectedCategory === null && 'bg-primary text-primary-foreground'
        )}
      >
        All Products
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          size="sm"
          onClick={() => onSelectCategory(category.id)}
          className={cn(
            'whitespace-nowrap',
            selectedCategory === category.id && 'bg-primary text-primary-foreground'
          )}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}