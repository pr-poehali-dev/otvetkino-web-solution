import { FC } from "react";
import SubjectCard from "./SubjectCard";

interface ExamSectionProps {
  title: string;
  description: string;
  examType: "oge" | "ege";
}

const subjects = {
  oge: [
    { title: "Математика", price: 499, icon: "🧮" },
    { title: "Русский язык", price: 499, icon: "📝" },
    { title: "Обществознание", price: 699, icon: "👥" },
  ],
  ege: [
    { title: "Математика", price: 999, icon: "🧮" },
    { title: "Русский язык", price: 999, icon: "📝" },
    { title: "Обществознание", price: 1299, icon: "👥" },
  ]
};

const ExamSection: FC<ExamSectionProps> = ({ title, description, examType }) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects[examType].map((subject, index) => (
            <SubjectCard
              key={index}
              title={subject.title}
              price={subject.price}
              icon={subject.icon}
              examType={examType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamSection;
