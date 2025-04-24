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
    <Card className="border border-border hover:border-primary/40 transition-all hover:shadow-md animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-2xl">{icon}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">
          {examType === "oge" ? "ОГЭ" : "ЕГЭ"} 2024
        </div>
        <div className="text-2xl font-bold text-primary">
          {price} ₽
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90">Купить</Button>
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
