import { useLanguage } from "@/hooks/useLanguage";
import { formatDate } from "@/lib/utils";
import { Link } from "react-router-dom";

const CourseFolderCard = ({ folder }) => {
  const { instructor, folder_name, id, created_at, course } = folder;
  const folderDate = formatDate(created_at);
  const { language } = useLanguage();
  return (
    <Link
      to={`/students/it/courses/folders/lectures/${id}`}
      className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-md group hover:shadow-lg"
    >
      <div className="absolute inset-0 z-10">
        <span className="sr-only">{course}</span>
      </div>
      <div className="p-4 bg-secondary text-card-foreground">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold tracking-tight">
            {language === "ar" ? `الدكتور :` : ` Dr.`} {instructor}
          </h3>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
            {folder_name}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{folderDate}</p>
      </div>
    </Link>
  );
};

export default CourseFolderCard;
