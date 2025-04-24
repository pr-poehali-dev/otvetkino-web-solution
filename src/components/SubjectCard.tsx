import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SubjectCardProps {
  title: string;
  price: number;
  icon: string;
  examType: "oge" | "ege";
}

const SubjectCard: FC<SubjectCardProps> = ({ title, price, icon, examType }) => {
  return (
    <Card className="border border-border hover:border-primary/40 transition-all hover:shadow-md animate-fade-in h-full">
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="flex items-center justify-between text-base md:text-lg">
          <span>{title}</span>
          <span className="text-xl md:text-2xl">{icon}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="text-xs md:text-sm text-muted-foreground mb-3">
          {examType === "oge" ? "ОГЭ" : "ЕГЭ"} 2025
        </div>
        <div className="text-xl md:text-2xl font-bold text-primary">
          {price} ₽
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <Button className="w-full bg-primary hover:bg-primary/90 text-sm md:text-base py-1.5">
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
