import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { language } = useLanguage();
  const { course_name, course_code, credits, plan, id } = course;
  return (
    <Link to={`/students/it/courses/folders/${id}`}>
      <Card className="shadow-[0px_8px_46px_3px_rgba(64,_95,_156,_0.2)]">
        <CardContent className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {plan}
            </Badge>
            <div className="text-sm text-muted-foreground">
              <ClockIcon className="inline-block w-4 h-4 mr-1" />
              {credits} {language === "ar" ? "ساعة" : "hours"}
            </div>
          </div>
          <h3 className="mb-2 text-lg font-semibold">{course_name}</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {course?.course_description || "Course Description."}
          </p>
          <div className="flex items-center justify-between">
            <div className="font-medium text-primary">{course_code}</div>
            <Button
              variant="outline"
              size="sm"
              className="px-4 py-2 rounded-md"
            >
              {language === "ar" ? `تفاصيل` : `Show Details`}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
export default CourseCard;
function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
